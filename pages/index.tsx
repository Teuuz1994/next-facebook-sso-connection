import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  const tryToLoginWithFacebook = async () => {
    try {
      await signIn('facebook')
      router.push('/logged')
    } catch (error) {
      console.log('Erro ao efetuar login')
      console.error(error)
    }
  }

  return (
    <div>
      <button type="button" onClick={tryToLoginWithFacebook}>login com o Facebook</button>
    </div>
  )
}
