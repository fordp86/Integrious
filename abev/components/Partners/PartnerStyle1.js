import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const options = {
  loop: false,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 0,
  center: false,
  dots: false,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 3,
      margin: 30,
    },
    576: {
      items: 3,
      margin: 30,
    },
    768: {
      items: 5,
      margin: 30,
    },
  },
};

const PartnerStyle1 = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Partner API
  const [partner, setPartner] = React.useState();
  React.useEffect(() => {
    const getPartner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/partner?populate=partnersList.image`
      );
      setPartner(response.data);
      // console.log(response.data)
    };
    getPartner();
  }, []);

  return (
    <>
      {partner && (
        <div className="partner-area ptb-100">
          <div className="container">
            <div className="partner-slides">
              {display ? (
                <OwlCarousel
                  className="partner-slides owl-carousel owl-theme"
                  {...options}
                >
                  {partner.data.attributes.partnersList.map((partnerLogo) => (
                    <div className="partner-item" key={partnerLogo.id}>
                      <img
                        src={partnerLogo.image.data.attributes.url}
                        alt={partnerLogo.image.data.attributes.alternativeText}
                      />
                    </div>
                  ))}
                </OwlCarousel>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerStyle1;
