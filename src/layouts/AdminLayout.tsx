import AdminTopBar from '@/components/TopBar/AdminTopBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className ="Flex justify-start items-start flex-col">
    <AdminTopBar />
    <main>
      <Outlet/>
    </main>

    </div>
  )
}

export default AdminLayout