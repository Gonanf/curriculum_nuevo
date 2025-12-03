import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({ component: Root })

function Root() {
  return <>
    <header className="hidden">
      hola
    </header>

    <Outlet></Outlet>
  </>
}
