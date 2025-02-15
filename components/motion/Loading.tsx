"use client";
import { Progress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className=" bg-white w-full  h-[1vh] ">
      <Progress
        isIndeterminate
        aria-label="Loading..."
        className="max-w-full"
        size="sm"
        color="default"
      />
      <div className="   h-[99vh]   flex items-center justify-center">
        <h3 className="font-normal text-3xl"> Your Animation Logo...</h3>
      </div>
    </div>
  );
}
