import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="h-5/6 w-full">
        <Suspense fallback={"Carregando...."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
