import AdminDashboardStats from '@/app/components/admin components/dashBoard/DashBoardStats'
import RecentOrdersTable from '@/app/components/admin components/dashBoard/Orders'
import React from 'react'

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const search = params?.search || "";
  return (
    <div className=''>
      <AdminDashboardStats/>
      <RecentOrdersTable search={search}/>
    </div>
  )
}
