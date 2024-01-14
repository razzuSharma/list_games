import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// NextAuth configuration
export const authOptions: AuthOptions = {
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
  secret: process.env.NEXTAUTH_SECRET as string,

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
