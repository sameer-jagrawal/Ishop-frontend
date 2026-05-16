import { getMe } from '@/api_call/serverApi'
import AddressPage from '@/app/components/user components/UserInfo/Address'
import React from 'react'

export default async function page() {
    const userRes =  await getMe()
    const user =  userRes?.data
  return (
    <div>
      <AddressPage user = {user}/>
    </div>
  )
}
