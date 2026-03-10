import { NextFunction, Request, Response } from "express";
import { createHash } from "node:crypto";
import { v7 as uuidv7 } from 'uuid';

import logger from "@/utils/logger";
import { doctorAuthSchema } from "@/schemas/doctorAuthSchema";
import { prisma } from "@/configurations/database-configurations";
import { AppError } from "@/utils/errorHandlerUtility";
import { Clinic, User } from "@prisma/client";

class DoctorAuthController {
    public static async signupUsingEmailAndPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedData = doctorAuthSchema.parse(req.body);
            const { email, password, name, clinicName, clinicAddress } = validatedData;
            const user = await prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if(user){
                throw new AppError('BAD_REQUEST', { message: 'User already exists' });
            }

            const hashedPassword = createHash('sha256').update(password).digest('hex');
            const doctorId = uuidv7();
            const newUser = await prisma.user.create({
                data: {
                    id: doctorId,
                    name,
                    email,
                    passwordHash: hashedPassword,
                    role: 'DOCTOR',
                    isEmailVerified: false,
                    isPhoneVerified: false,
                    avatarUrl: null,
                },
            }) as User;
            
            const newClinic = await prisma.clinic.create({
                data: {
                    id: uuidv7(),
                    name: clinicName,
                    address: clinicAddress,
                    specialization: null,
                    doctorId,
                },
            }) as Clinic;

            await prisma.user.update({
                where: { id: doctorId },
                data: {
                    clinic: { connect: { id: newClinic.id } },
                },
            });

            return res.status(201).send({ message: 'User created successfully', data: { user: newUser, clinic: newClinic } });

        } catch (error) {
            logger.error("Error in Signup Using Email And Password function - ", error);
            next(error);
        }
    }
}

export default DoctorAuthController;