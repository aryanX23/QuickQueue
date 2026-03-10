import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import pg from 'pg';

const connectionString = `${process.env.DATABASE_URL}`;

// Configure pool with SSL settings for self-signed certificates
const pool = new pg.Pool({ 
  connectionString,
  ssl: process.env.NODE_ENV === 'production' 
    ? { rejectUnauthorized: true } 
    : { rejectUnauthorized: false } // Accept self-signed certificates in dev
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Test connection
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export { prisma };
