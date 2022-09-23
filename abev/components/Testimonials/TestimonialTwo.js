import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const options = {
  items: 1,
  margin: 25,
  nav: false,
  loop: true,
  dots: true,
  autoplay: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  autoplayHoverPause: true,
  navText: ["<i class='ph-caret-left'></i>", "<i class='ph-caret-right'></i>"],
};

const TestimonialOne = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Testimonials API
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonial-style-2?populate=feedbacks.image`
      );
      setTestimonials(response.data);
      // console.log(response.data)
    };
    getTestimonials();
  }, []);

  return (
    <>
      {testimonials && (
        <div className="testimonials-area pt-100 pb-75">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="sub-title light-green-color">
                {testimonials.data.attributes.subTitle}
              </span>
              <h2>{testimonials.data.attributes.title}</h2>
            </div>

            {display ? (
              <OwlCarousel
                className="testimonials-slides-two owl-carousel owl-theme"
                {...options}
              >
                {testimonials.data.attributes.feedbacks.map((feedback) => (
                  <div className="single-testimonials-box" key={feedback.id}>
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-7">
                        <i className="flaticon-left-quote"></i>

                        <ReactMarkdown>{feedback.feedbackText}</ReactMarkdown>

                        <div className="info">
                          <h3>{feedback.name}</h3>
                          <span>{feedback.designation}</span>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-center">
                        <div className="img">
                          <img
                            src={feedback.image.data.attributes.url}
                            alt={feedback.image.data.attributes.alternativeText}
                          />
                        </div>
                      </div>
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

export default TestimonialOne;
