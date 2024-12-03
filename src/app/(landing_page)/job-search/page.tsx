import { GetServerSideProps, NextPage } from "next";

type Props = {
  searchParams: Promise<any>;
};

const JobSearchPage: NextPage<Props> = async ({ searchParams }) => {
  const { query, location, category } = await searchParams;

  console.log(query, location, category);

  return <div>JobSearchPage</div>;
};

export default JobSearchPage;
