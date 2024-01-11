import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import type { Adapter } from "next-auth/adapters";

import prisma from "@/app/utils/db";

export const authOptions = {
    //adapters
    adapter: PrismaAdapter(prisma) as Adapter,

    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        // ...add more providers here
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
