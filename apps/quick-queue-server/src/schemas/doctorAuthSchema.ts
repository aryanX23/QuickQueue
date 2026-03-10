import { z } from 'zod';

export const doctorAuthSchema = z.object({
  name: z.string({ message: 'Doctor\'s name is required' }),
  clinicName: z.string({ message: 'Clinic name is required' }),
  clinicAddress: z.string({ message: 'Clinic address is required' }),
  email: z.email({
    message: 'Invalid email address',
  }),
  password: z
  .string({ message: 'Password is required' })
  .min(8, 'Password must be at least 8 characters long')
  .max(100, 'Password is too long')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
});

export type DoctorAuthSchema = z.infer<typeof doctorAuthSchema>;