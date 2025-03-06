import { Suspense } from "react"
import { BrowserRouter, useRoutes } from "react-router"

import { storeRoutes } from "./store-routes"
import StoreRoute from "./store-route"
import NotFound from "@/pages/not-found"
import { Text } from "@chakra-ui/react"

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
      <Suspense fallback={(<Text>Loading page...</Text>)}>
        <AppNavigation />
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter