import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const options = {
  margin: 25,
  nav: false,
  loop: true,
  dots: true,
  autoplay: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  mouseDrag: false,
  autoplayHoverPause: true,
  navText: ["<i class='ph-caret-left'></i>", "<i class='ph-caret-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const TestimonialSix = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Testimonials API
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonials-style-6?populate=feedbacks.image`
      );
      setTestimonials(response.data);
      // console.log(response.data)
    };
    getTestimonials();
  }, []);

  return (
    <>
      {testimonials && (
        <div className="testimonials-area bg-263238 ptb-100">
          <div className="container">
            <div
              className="section-title white-color"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="sub-title">
                {testimonials.data.attributes.subTitle}
              </span>
              <h2 className="nunito-font">
                {testimonials.data.attributes.title}
              </h2>
            </div>

            {display ? (
              <OwlCarousel
                className="testimonials-slides-four owl-carousel owl-theme"
                {...options}
              >
                {testimonials.data.attributes.feedbacks.map((feedback) => (
                  <div className="testimonials-item" key={feedback.id}>
                    <i className="flaticon-left-quotes-sign"></i>
                    <ReactMarkdown>{feedback.feedbackText}</ReactMarkdown>
                    <div className="info">
                      <h3>{feedback.name}</h3>
                      <span>{feedback.designation}</span>
                    </div>
                    <div className="img">
                      <img
                        src={feedback.image.data.attributes.url}
                        alt={feedback.image.data.attributes.alternativeText}
                      />
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialSix;
