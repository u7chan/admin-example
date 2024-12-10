import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'
import { LoginForm } from './login-form'

export default async function Page() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  if (session) {
    redirect('/', RedirectType.replace)
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Card className='max-w-md w-full'>
        <CardHeader>
          <h2 className='text-center text-2xl font-bold'>ログイン</h2>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
