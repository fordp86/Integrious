import React from "react";
import Head from "next/head";

const PageTitle = ({ page }) => {
  return (
    <Head>
      <title>{page} | Abev - Creative Multipurpose React Template</title>
    </Head>
  );
};

export default PageTitle;
