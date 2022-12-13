import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter()
  const { status } = useSession()

  const tryToLoginWithFacebook = async () => {
    try {
      await signIn('facebook')
    } catch (error) {
      console.log('Erro ao efetuar login')
      console.error(error)
    }
  }

  const tryLogInWithGoogle = async () => {
    try {
      await signIn('google')
    } catch (error) {
      console.log('Erro ao efetuar login')
      console.error(error)
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/logged')
    }
  }, [router, status])

  return (
    <div>
      <button type="button" onClick={tryToLoginWithFacebook}>login com o Facebook</button>
      <button type="button" onClick={tryLogInWithGoogle}>login com o Google</button>
    </div>
  )
}
