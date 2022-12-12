import NextAuth from 'next-auth'
import Facebook from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    Facebook({
      clientId: String(process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET)
    })
  ]
})