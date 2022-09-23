import React from "react";
import Link from "next/link";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import DetailsContent from "@/components/Services/DetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import baseApiUrl from "@/utils/baseApiUrl";

const ServicesDetails = ({ service: { data } }) => {
  return (
    <>
      <PageTitle page="Services Details" />
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
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>{data[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>
      <DetailsContent {...data[0]} />
      <div className="pb-100">
        <GetStarted />
      </div>
      <FooterOne />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/services`);
  const { data } = await res.json();

  // console.log(data);

  const paths = data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/services?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const service = await res.json();

  // By returning { props: { service } }, the Blog component
  // will receive `service` as a prop at build time
  return {
    props: {
      service,
    },
  };
}

export default ServicesDetails;
