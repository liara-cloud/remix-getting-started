import {
  Meta,
  MetaFunction,
  Scripts,
  Links,
  LiveReload,
  Outlet,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

export const meta: MetaFunction = () => {
  return [  
 {
  charset: "utf-8",
  title: "Deployed to Liara",
  viewport: "width=device-width,initial-scale=1",
 },
  ];
};

export const links: LinksFunction = () => {
  return [
  { rel: "stylesheet", href: "/css/app.css" },
  { rel: "shortcut icon", href: "/images/favicon.ico" },
  ];
};

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default App;
