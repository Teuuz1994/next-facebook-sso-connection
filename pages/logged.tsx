import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Logged() {
  const { data, status } = useSession()
  const router = useRouter()

  const logOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.log('não foi possível deslogar usuário')
      console.error(error)
    }
  }

  return (
    <div>
      {status === 'authenticated' && data && (
        <>
          <h1>logged in</h1>
          <span>name: {data?.user?.name}</span>
          <span>email: {data?.user?.email}</span>
          <button type="button" onClick={logOut}>Log out</button>
        </>
      )}
      {status === 'unauthenticated' && (<h1>usuário não logado</h1>)}
    </div>
  )
}