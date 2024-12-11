import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="my-20 px-6">
      {/* Top Section */}
      <div className="flex items-center max-w-[700px] mx-auto justify-center flex-col gap-6">
        <h2 className="md:text-5xl text-3xl font-semibold text-center tracking-wide md:leading-snug">
          <span className="text-primary">
            Discover Your Next Adventure with AI :
          </span>{" "}
          Personlized Planner at your Fingerprints{" "}
        </h2>
        <h5 className="text-center text-muted-foreground">
          Your personal trip planner and trip curator, creating custom trips
          tailored to your interests and budget
        </h5>

        <Button>Get Started It's Free</Button>
      </div>
    </div>
  );
}
