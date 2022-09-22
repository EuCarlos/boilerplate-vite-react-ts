import { Route } from "react-router-dom"
import { Home } from "../pages/Home"

// https://v5.reactrouter.com/web/example/route-config
export const routes = [
    {
      path: "/",
      component: Home
    },
];

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}