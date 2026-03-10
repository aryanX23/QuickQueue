import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ApiError } from "@repo/types";

// 1. Cleaned up ErrorType
export type ErrorType = 
    | 'INTERNAL_SERVER_ERROR' 
    | 'BAD_REQUEST' 
    | 'UNAUTHORIZED' 
    | 'FORBIDDEN' 
    | 'NOT_FOUND' 
    | 'METHOD_NOT_ALLOWED' 
    | 'NOT_ACCEPTABLE' 
    | 'PROXY_AUTHENTICATION_REQUIRED' 
    | 'REQUEST_TIMEOUT' 
    | 'CONFLICT' 
    | 'UNPROCESSABLE_ENTITY' 
    | 'TOO_MANY_REQUESTS'
    | 'VALIDATION_ERROR';

// 2. Configuration mapping ErrorType to Status Codes and Messages
const errorConfig: Record<ErrorType, { status: number; message: string }> = {
    INTERNAL_SERVER_ERROR: { status: 500, message: 'An unexpected error occurred' },
    BAD_REQUEST: { status: 400, message: 'Bad request' },
    UNAUTHORIZED: { status: 401, message: 'Unauthorized' },
    FORBIDDEN: { status: 403, message: 'Forbidden' },
    NOT_FOUND: { status: 404, message: 'Not found' },
    METHOD_NOT_ALLOWED: { status: 405, message: 'Method not allowed' },
    NOT_ACCEPTABLE: { status: 406, message: 'Not acceptable' },
    PROXY_AUTHENTICATION_REQUIRED: { status: 407, message: 'Proxy authentication required' },
    REQUEST_TIMEOUT: { status: 408, message: 'Request timeout' },
    CONFLICT: { status: 409, message: 'Conflict' },
    UNPROCESSABLE_ENTITY: { status: 422, message: 'Unprocessable entity' },
    TOO_MANY_REQUESTS: { status: 429, message: 'Too many requests' },
    VALIDATION_ERROR: { status: 400, message: 'Validation error' },
};

// 3. Custom Error class to trigger specific API responses
export class AppError extends Error {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(public type: ErrorType, public details?: any, customMessage?: string) {
        super(customMessage || errorConfig[type].message);
        this.name = 'AppError';
        // Capturing stack trace, excluding constructor call from it
        Error.captureStackTrace(this, this.constructor);
    }
}

class ErrorHandlerUtility {
    private static instance: ErrorHandlerUtility;

    private constructor() {}

    public static getInstance(): ErrorHandlerUtility {
        if (!ErrorHandlerUtility.instance) {
            ErrorHandlerUtility.instance = new ErrorHandlerUtility();
        }
        return ErrorHandlerUtility.instance;
    }

    /**
     * Express Middleware wrapper
     */
    public middleware() {
        return (err: unknown, req: Request, res: Response, next: NextFunction) => {
            this.handleError(err, req, res, next);
        };
    }

    /**
     * Core handler logic
     */

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public handleError(err: unknown, req: Request, res: Response, next: NextFunction): void {
        // --- A. Auto-Detect ZodError ---
        if (err instanceof ZodError) {
            const apiError: ApiError = {
                code: 'VALIDATION_ERROR',
                message: errorConfig.VALIDATION_ERROR.message,
                details: { 
                    issues: err.issues 
                } 
            };
            res.status(errorConfig.VALIDATION_ERROR.status).json(apiError);
            return;
        }

        // --- B. Handle Custom AppErrors ---
        if (err instanceof AppError) {
            const config = errorConfig[err.type] || errorConfig.INTERNAL_SERVER_ERROR;
            const apiError: ApiError = {
                code: err.type,
                message: err.message,
                details: err.details
            };
            res.status(config.status).json(apiError);
            return;
        }

        // --- C. Fallback for unexpected/unhandled errors ---
        // Log the actual error internally
        console.error('Unhandled Exception:', err);

        const apiError: ApiError = {
            code: 'INTERNAL_SERVER_ERROR',
            message: errorConfig.INTERNAL_SERVER_ERROR.message,
            details: process.env.NODE_ENV === 'development' && err instanceof Error ? { error: err.message } : undefined
        };

        res.status(errorConfig.INTERNAL_SERVER_ERROR.status).json(apiError);
    }
}

export default ErrorHandlerUtility.getInstance();