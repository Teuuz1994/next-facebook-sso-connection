import { useSession } from 'next-auth/react'

export default function Logged() {
  const { data } = useSession()

  return (
    <div>
      <h1>logged in</h1>
      <span>name: {data?.user?.name}</span>
      <span>email: {data?.user?.email}</span>
    </div>
  )
}