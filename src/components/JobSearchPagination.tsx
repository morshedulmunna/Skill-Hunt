"use client";

import React from "react";
import Pagination from "./shared/Pagination";
import { useSearchParams } from "next/navigation";

type Props = {
  totalCount: number;
};

export default function JobSearchPagination({ totalCount }: Props) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page"));
  return (
    <div>
      <Pagination
        numberOfData={totalCount}
        limits={5}
        activePage={page || 1}
        getCurrentPage={(page: any) => {
          const url = new URL(window.location.href);
          url.searchParams.set("page", page.toString());
          window.location.href = url.toString();
        }}
        className="float-right"
      />
    </div>
  );
}
