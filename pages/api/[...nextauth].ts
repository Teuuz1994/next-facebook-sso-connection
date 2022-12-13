import NextAuth from 'next-auth'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    Facebook({
      clientId: String(process.env.FACEBOOK_ID),
      clientSecret: String(process.env.FACEBOOK_SECRET)
    }),
    Google({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    })
  ],
  secret: String(process.env.NEXTAUTH_SECRET)
})