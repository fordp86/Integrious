import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const options = {
  margin: 25,
  nav: false,
  loop: false,
  dots: true,
  autoplay: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
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
      items: 2,
    },
  },
};

const TestimonialFive = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Testimonials API
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonials-style-5?populate=*`
      );
      setTestimonials(response.data);
      // console.log(response.data)
    };
    getTestimonials();
  }, []);

  return (
    <>
      {testimonials && (
        <div className="testimonials-area with-top-border o-hidden ptb-100">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h2 className="nunito-font">
                {testimonials.data.attributes.title}
              </h2>
              <p>{testimonials.data.attributes.shortText}</p>
            </div>

            {display ? (
              <OwlCarousel
                className="testimonials-slides-three owl-carousel owl-theme"
                {...options}
              >
                {testimonials.data.attributes.feedbacks.map((feedback) => (
                  <div className="single-testimonials-box" key={feedback.id}>
                    <i className="flaticon-left-quote"></i>
                    <ReactMarkdown>{feedback.feedbackText}</ReactMarkdown>
                    <div className="info">
                      <h3>{feedback.name}</h3>
                      <span>{feedback.designation}</span>
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

export default TestimonialFive;
