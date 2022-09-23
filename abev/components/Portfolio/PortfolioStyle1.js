import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PortfolioStyle1 = () => {
  const [portfolios, setPortfolios] = React.useState();
  React.useEffect(() => {
    const getPortfolios = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/portfolios?populate=*`
      );
      setPortfolios(response.data);
      console.log(response.data);
    };
    getPortfolios();
  }, []);

  return (
    <>
      {portfolios && (
        <div className="case-studies-area pb-100 bg-f1f5fd">
          <div className="container">
            <div className="row">
              {portfolios.data.map((portfolio) => (
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  key={portfolio.id}
                >
                  <div className="single-case-studies-box">
                    <Link href={`/portfolio/${portfolio.attributes.slug}`}>
                      <a className="d-block image">
                        <img
                          src={portfolio.attributes.image.data.attributes.url}
                          alt={
                            portfolio.attributes.image.data.attributes
                              .alternativeText
                          }
                        />
                      </a>
                    </Link>
                    <div className="content">
                      <div className="icon">
                        <i className={portfolio.attributes.iconName}></i>
                      </div>
                      <h3>
                        <Link href={`/portfolio/${portfolio.attributes.slug}`}>
                          <a>{portfolio.attributes.title}</a>
                        </Link>
                      </h3>
                      <p>{portfolio.attributes.shortText}</p>
                      <Link href={`/portfolio/${portfolio.attributes.slug}`}>
                        <a className="link-btn">
                          {portfolio.attributes.btnText}{" "}
                          <i className="bx bx-chevron-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioStyle1;
