import NextAuth from 'next-auth'
import Facebook from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    Facebook({
      clientId: String(process.env.FACEBOOK_ID),
      clientSecret: String(process.env.FACEBOOK_SECRET)
    })
  ],
  secret: String(process.env.NEXTAUTH_SECRET)
})