import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="w-full border-b shadow-md p-4 flex items-center justify-between">
      <h1 className="bg-primary shadow-lg text-white p-2 rounded-md text-lg font-semibold">
        AI Trip Planner
      </h1>
      {/* Right Scetion */}
      <div>
        <Button className="bg-black hover:bg-black/90">Sign in</Button>
      </div>
    </div>
  );
}
