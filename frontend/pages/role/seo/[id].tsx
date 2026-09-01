// import React from "react";
// import type { NextPage } from "next";
// import { useRouter } from "next/router";
// import Add from "@components/comman/seo/form";
// import Navbar from "@components/Layout/Navbar/Navbar";
// import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
// import { Section } from "@components/comman/Style";
// import withauth from "@/hocwithauth";
// const Home: NextPage = withauth(() => {
//   const router = useRouter();
//   const { id } = router.query;
//   console.log(router.query);
//   return (
//     <>
//       <Navbar />
//       <Section>
//         <Sidebarr />

//         <Add query={router.query} />
//       </Section>
//     </>
//   );
// }, "admin");

// export default Home;

import React from "react";

export default function inde() {
  return <div>[id]</div>;
}
