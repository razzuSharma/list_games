import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import { createClient } from "@supabase/supabase-js";
// import { cookies } from "next/headers";

// Supabase configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// NextAuth configuration
const authOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  secret: "asdasdkkkklasldk",
  debug: true,

  // callbacks: {
  //   async signIn({ profile }) {
  //     try {
  //       if (!profile?.email) {
  //         throw new Error("No profile");
  //       }

  //       const { data: existingUsers, error: userError } = await supabase
  //         .from("profiles")
  //         .select("*")
  //         .eq("email", profile.email);

  //       if (userError) {
  //         throw new Error(
  //           `Error checking user in Supabase: ${userError.message}`
  //         );
  //       }

  //       if (existingUsers && existingUsers.length === 1) {
  //         // User found, proceed with sign-in
  //         return "/roulette";
  //       } else if (!existingUsers || existingUsers.length === 0) {
  //         // User not found, insert into Supabase
  //         const { data, error } = await supabase.from("profiles").upsert([
  //           {
  //             email: profile.email,
  //             name: profile.name,
  //             image: profile.image,
  //           },
  //         ]);

  //         if (error) {
  //           throw new Error(
  //             `Error inserting user data into Supabase: ${error.message}`
  //           );
  //         } else {
  //           console.log("User data inserted into Supabase successfully:", data);
  //           return true; // Allow sign in
  //         }
  //       } else {
  //         // Multiple users found with the same email (handle as needed)
  //         throw new Error("Multiple users found with the same email");
  //       }
  //     } catch (error: any) {
  //       console.error(error.message);
  //       // Handle the error as needed
  //       return false; // Prevent sign-in on error
  //     }
  //   },

  //   // JWT callback
  //   async jwt({ token, user, account }) {
  //     try {
  //       const newToken = { ...token };

  //       if (user) {
  //         newToken.user = user;
  //         newToken.accessToken = account?.access_token;
  //       }

  //       return newToken;
  //     } catch (error: any) {
  //       console.error(`Error in JWT callback: ${error.message}`);
  //       return token;
  //     }
  //   },
  // },
};

// NextAuth handler
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
