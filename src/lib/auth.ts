import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "@/lib/db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_URL,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/signin'
    },
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
              email: { label: "Email", type: "text", placeholder: "example@mail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password)
                    return null;
                const existingUser = await db.user.findUnique({
                    where: {email: credentials?.email},
                });

                if(!existingUser){
                    return null};
                    const isPasswordMath = await compare(credentials.password, existingUser.password);
                    if(!isPasswordMath){
                        return null};
                        
                        return {
            id: `${existingUser.id}`,
            email: existingUser.email };
        }
    })
]
}
