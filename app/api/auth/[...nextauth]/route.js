import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

// DEBUG BLOCK - Used to test 1:23:00 of the Tutorial where the Google
// credentials are always printing.
//
// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) { }

})

export { handler as GET, handler as POST }