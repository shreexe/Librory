import NextAuth from "next-auth"
import { NextAuthOptions, User,getServerSession } from "next-auth"
import{useSession} from 'next-auth/react'
import GoogleProvider from "next-auth/providers/google";
export const authConfig={
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET 
  })
]
}