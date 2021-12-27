import MainLayout from '../layouts/MainLayout'
import NoLayout from '../layouts/NoLayout'
import { FC } from 'react'

export const Layouts = {
  main: MainLayout,
  no: NoLayout,
}

export const NoLayoutPagesRoutes = {
  component: Layouts.no,
  routes: ['/404'],
}

const allLayoutPages = [NoLayoutPagesRoutes]

export function getPageLayout(pageRoute: string): FC {
  for (let layoutPages of allLayoutPages) {
    if (layoutPages.routes.includes(pageRoute)) return layoutPages.component
  }

  return Layouts.main
}
