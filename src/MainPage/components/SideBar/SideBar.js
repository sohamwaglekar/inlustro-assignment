import React from 'react'
import CreateButton from './components/CreateButton'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import Support from './components/Support'
import Shop from './components/Shop'
import Settings from './components/Settings'
import Logout from './components/Logout'
export default function SideBar() {
  return (
      <div className='w-fit pl-12'>
          <CreateButton />
          <Dashboard />
          <Analytics />
          <Support />
          <Shop />
          <Settings className='mt-8' />
          <Logout/>
    </div>
  )
}
