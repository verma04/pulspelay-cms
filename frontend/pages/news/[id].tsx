import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Edit from "@components/News/edit";

import { useGetSingleNews } from "@apolloo/actions";

const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetSingleNews({ variables: { id: id } });

  if (loading) {
    return null;
  }

  console.log(data);

  console.log(data);

  return <Edit blog={data.getSingleNews} />;
}, ["admin"]);

export default Home;
