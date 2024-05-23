import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/app.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Hooray!</h1>
      <canvas id="drawing_canvas"></canvas>
    </div>
  );
}