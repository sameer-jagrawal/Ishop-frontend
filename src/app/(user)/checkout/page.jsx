import { getMe } from '@/api_call/serverApi'
import CheckoutPage from '@/app/components/user components/Store/CheckOut'
import React from 'react'

export default async function page() {
  const user = await  getMe()
  return (
    <div>
      <CheckoutPage user={user}/>
    </div>
  )
}
