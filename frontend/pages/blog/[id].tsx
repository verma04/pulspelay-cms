import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Edit from "@components/blog/news";

import { useGetSingleBlog } from "@apolloo/actions";

const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetSingleBlog({ variables: { id: id } });
  //
  if (loading) {
    return null;
  }

  return <Edit blog={data.getSingleBlog} />;
}, "blog");

export default Home;
