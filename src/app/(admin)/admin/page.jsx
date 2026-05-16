import AdminDashboardStats from '@/app/components/admin components/dashBoard/DashBoardStats'
import RecentOrdersTable from '@/app/components/admin components/dashBoard/Orders'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <AdminDashboardStats/>
      <RecentOrdersTable/>
    </div>
  )
}
