"use client";

import ArrowSvgIcon from "@/assets/svg/ArrowSvgIcon";
import React from "react";

type Props = {};

export default function ApplyButton({}: Props) {
  return (
    <div className="bg-primary-base w-fit mt-6 text-white flex items-center gap-2 px-4 py-2 rounded text-sm">
      <button
        className="whitespace-nowrap"
        type="button"
        onClick={() => {
          window.location.href = "mailto:example@example.com";
        }}
      >
        Apply Now
      </button>
      <ArrowSvgIcon className="animate-pulse" />
    </div>
  );
}
