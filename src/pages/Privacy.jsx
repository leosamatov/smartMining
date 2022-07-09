/* eslint-disable react/no-unescaped-entities */
import React from "react";

// Helpers
import Template, { WhiteBgContainer } from "../helpers/Template";
import Footer from "../helpers/Footer";

// Components
import TopBar from "../components/organisms/TopBar";

function Privacy() {
  return (
    <Template classes="main-content-bg">
      <WhiteBgContainer>
        <TopBar showJumbotron={false} isHomePage={false} isTransparent={true} />

        <div className="py-20 text-white">
          <div className="container">
            <div className="space-y-6">
              <h1 className="text-7xl text-center pb-20">
                PRIVACY POLICY SMART MINING
              </h1>
              <p>PRIVACY POLICY SMART MINING</p>
              <p>
                SMART MINING makes every possible effort to ensure the privacy
                and security of its customers, both during their interaction
                with the company and after it, to the maximum extent possible,
                which the company can provide.
              </p>
              <p>
                When customers register with SMART MINING, they confirm their
                willingness to provide the company with certain personal
                information, which we use to verify the identity of the customer
                and ensure the security of his purchases and his account. This
                information is collected in accordance with our strict
                verification procedures, which are used to prevent international
                money laundering operations and to ensure the security of our
                clients' activities at all stages.
              </p>
              <p>
                Our customers are committed to providing us with true, current
                and accurate information about their identity. In addition, they
                must firmly state that they are registering and acting on their
                own behalf and in no case attempt to act in any way that could
                be considered fraudulent, and they do not attempt to impersonate
                others in any way. was the purpose.
              </p>
              <p>
                SMART MINING's data collection practices include the collection
                of public customer information provided to the company, in
                addition to the placement of cookies to collect data about how
                the customer interacts with the SMART MINING website. These
                customer information gathering tools are used for the purpose of
                customer security; all data collected by the company is accessed
                only by employees of the company who are involved in verifying
                customer account information for the express purpose of
                protecting customer security and privacy.
              </p>
              <p>
                SMART MINING will never disclose personal or other confidential
                information about its clients and former clients to third
                parties without the express written consent of clients, except
                in such specific cases when disclosure of information is
                required by law or otherwise necessary to conduct a verification
                analysis of the client's identity in order to protect his
                account and protect his personal information.
              </p>
              <p>
                By registering with SMART MINING and voluntarily interacting
                with SMART MINING products and services, customers acknowledge
                and agree that they consent to the use of all or part of the
                information they provide under their SMART MINING customer
                account, transactions, they carry out through it, and the
                interactions they carry out with the company and on behalf of
                the company. All customer interactions with the company will be
                kept by the company for record purposes and may be used by the
                company in cases where disputes arise between customers and the
                company.
              </p>
              <p>
                SMART MINING is committed to protecting the privacy of its
                customers' personal information, including implementing data
                protection procedures designed to protect customer privacy.
                SMART MINING ensures that its data protection policy is updated
                regularly, ensuring that the client's sensitive information is
                protected at all times.
              </p>
              <p>
                From time to time, SMART MINING may contact customers by phone
                or email to provide them with additional information about the
                SMART MINING cloud mining service. In addition, the company may
                from time to time contact customers by phone or email to inform
                them about the unique promotional offers offered by SMART MINING
                to the customer. By agreeing to our Terms of Use when
                registering with SMART MINING, customers agree to such
                interaction. A user who wishes to opt out of further contact
                with SMART MINING has the right to do so at any time simply by
                contacting the company by phone or email and requesting that no
                further contact be made on behalf of the company.
              </p>
            </div>
          </div>
        </div>
      </WhiteBgContainer>

      <Footer isHomePage={false} />
    </Template>
  );
}

export default Privacy;
