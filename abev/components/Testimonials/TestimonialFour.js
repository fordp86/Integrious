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
  loop: false,
  dots: true,
  autoplay: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  autoplayHoverPause: true,
  navText: [
    "<i className='ph-caret-left'></i>",
    "<i className='ph-caret-right'></i>",
  ],
};

const TestimonialFour = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Testimonials API
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonials-style-4?populate=*`
      );
      setTestimonials(response.data);
      // console.log(response.data)
    };
    getTestimonials();
  }, []);

  return (
    <>
      {testimonials && (
        <div className="testimonials-area ptb-100">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="sub-title green-color">
                {testimonials.data.attributes.subTitle}
              </span>
              <h2 className="nunito-font">
                {testimonials.data.attributes.title}
              </h2>
            </div>

            <div className="row m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="testimonials-img">
                  <img
                    src={testimonials.data.attributes.image.data.attributes.url}
                    alt="testimonials-image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div className="testimonials-content-style-two">
                  {display ? (
                    <OwlCarousel
                      className="testimonials-slides-two owl-carousel owl-theme"
                      {...options}
                    >
                      {testimonials.data.attributes.feedbacks.map(
                        (feedback) => (
                          <div
                            className="single-testimonials-box"
                            key={feedback.id}
                          >
                            <i className="flaticon-left-quote"></i>

                            <ReactMarkdown>
                              {feedback.feedbackText}
                            </ReactMarkdown>

                            <div className="info">
                              <h3>{feedback.name}</h3>
                              <span>{feedback.designation}</span>
                            </div>
                          </div>
                        )
                      )}
                    </OwlCarousel>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialFour;
