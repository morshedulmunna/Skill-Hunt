"use client";

import React, { useEffect, useState } from "react";
import Pagination from "./shared/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { generateSearchQueryUrl } from "@/utils";

type Props = {
  totalCount: number;
};

export default function JobSearchPagination({ totalCount }: Props) {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const searchParams = generateSearchQueryUrl({
    page: page,
  });

  useEffect(() => {
    router.push(`/job-search?${searchParams}`);
  }, [page]);

  return (
    <div>
      <Pagination
        numberOfData={totalCount}
        limits={5}
        activePage={page || 1}
        getCurrentPage={(page: any) => {
          setPage(page);
        }}
        className="float-right"
      />
    </div>
  );
}
