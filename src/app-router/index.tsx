import { Suspense } from "react"
import { BrowserRouter, useRoutes } from "react-router"

import { Typography } from "@mui/material"
import { storeRoutes } from "./store-routes"
import StoreRoute from "./store-route"
import NotFound from "@/pages/not-found"

const AppNavigation = () =>
  useRoutes([
    {
      element: <StoreRoute />,
      children: storeRoutes.map((route) => ({ path: route.path, element: <route.component /> }))
    },
    {
      element: <NotFound />,
      path: '*'
    }
  ])

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={(<Typography>Loading page...</Typography>)}>
        <AppNavigation />
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter