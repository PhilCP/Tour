import React from 'react'
import { Outlet } from 'react-router'

const Adminlayout = () => {
  return (
    <div className="admin-layout">
        Mobile
      <aside className=" w-full max-w-[270px] hidden lh:block">Sidebar</aside>

      <aside className="children">
        <Outlet/>

      </aside>
    </div>
  )
}

export default Adminlayout
