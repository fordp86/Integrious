import React from "react";
import Link from "next/link";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import PortfolioDetailsContent from "@/components/Portfolio/PortfolioDetailsContent";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";

const PortfolioDetails = ({ portfolio: { data } }) => {
  return (
    <>
      <PageTitle page="Portfolio Details" />

      <Navbar />

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{data[0].attributes.title}</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio-1">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>{data[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <PortfolioDetailsContent {...data[0]} />

      <FooterOne />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/portfolios`);
  const { data } = await res.json();

  // console.log(data);

  const paths = data.map((portfolio) => ({
    params: { slug: portfolio.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/portfolios?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const portfolio = await res.json();

  // By returning { props: { portfolio } }, the portfolio component
  // will receive `portfolio` as a prop at build time
  return {
    props: {
      portfolio,
    },
  };
}

export default PortfolioDetails;
