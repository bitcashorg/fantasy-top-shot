import React from 'react'

import { AppLogo } from '~/icons'

import { Auth } from './auth.component'

export function Header() {
  return (
    <header className="flex justify-between px-3 py-2">
      <div></div>
      {/* <AppLogo /> */}
      <div className="flex justify-end pt-1 h-30 lg:pr-7">
        <Auth />
      </div>
    </header>
  )
}
