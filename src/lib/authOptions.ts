import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!credentials?.password || !adminPassword) {
          throw new Error("Password not configured");
        }

        // Simple password verification
        const isValid = credentials.password === adminPassword;

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: "1",
          name: "Admin",
          email: "admin@portfolio.local",
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    maxAge: 0, // Session expires immediately; requires re-auth on each page load
  },
  callbacks: {
    async jwt({ token }: { token: any }) {
      return token;
    },
    async session({ session }: { session: any }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
