import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => signIn('facebook')}>login com o Facebook</button>
    </div>
  )
}
