import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import FooterOne from "@/components/Layout/Footer/FooterOne";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";

const TermsConditions = () => {
  return (
    <>
      <PageTitle page="Terms & Conditions" />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Terms & Conditions</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <TermsConditionsContent />
      <FooterOne />
    </>
  );
};

export default TermsConditions;
