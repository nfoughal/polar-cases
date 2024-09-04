import { db } from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import * as z from 'zod'

const userSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
  })

export async function POST(req: Request) {
    try{
        const body = await req.json();
        const {email, password} = userSchema.parse(body);
        
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email},
        })
        if (existingUserByEmail)
            return(NextResponse.json({user: null, message: "user with this email already exists"}, {status: 409}))

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                email: email,
                password: hashedPassword
            }
        })

        const { password: newUserPassword, ...rest } = newUser; 
        return NextResponse.json({user: rest, message: "user create successfully"}, {status: 201});

    } catch(error) {
        return NextResponse.json({message: "someting went wrong!"}, {status: 500})
    }
}