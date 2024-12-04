"use client";

import AutoPlayCarousel from "./shared/AutoPlayCarousel";

// type Job = {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
// };

type Props = {
  //   jobs: Job[];
};

export default function FeaturesJobCarousel({}: Props) {
  return (
    <>
      <AutoPlayCarousel />
    </>
  );
}
