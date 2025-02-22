import { lazy } from "react";

// Pages
const ProductsPage = lazy(() => import("../pages/products"));
const ProductPage = lazy(() => import("../pages/products/product"));
const CartPage = lazy(() => import("../pages/cart"));

const routes = {
  products: "/",
  product: "/products/:productId",
  cart: "/cart",
};

const storeRoutes = [
  {
    exact: true,
    title: "Products",
    path: routes.products,
    component: ProductsPage,
  },
  {
    exact: true,
    title: "Product",
    path: routes.product,
    component: ProductPage,
  },
  {
    exact: true,
    title: "Cart",
    path: routes.cart,
    component: CartPage,
  },
];

export { storeRoutes, routes };
