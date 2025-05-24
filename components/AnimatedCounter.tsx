"use client";
import React from "react";
import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp duration={1.5} prefix="$" end={amount} decimals={2} />
    </div>
  );
}
