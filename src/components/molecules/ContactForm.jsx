import React from "react";
import PropTypes from "prop-types";

// Components
import SingleLocation from "../atoms/SingleLocation";

const LOCATIONS_DATA_LEFT = ["CANADA", "MALTA", "AUSTRALIA"];

const LOCATIONS_DATA_RIGHT = ["CYPRUS", "SWITZERLAND", "ICELAND"];

function ContactForm() {
  return (
    <div className="py-20 text-white">
      <div className="container">
        <div className="space-y-6">
          <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-center pb-20">
            Contact Us
          </h1>
          <div className="lg:px-24 md:px-12 sm:px-0 lg:text-lg md:text-md sm:text-md text-center pb-10 font-medium">
            About Us
            <br />
            SMART MINING was founded at the end of 2018 by the team of experts
            in blockchain programming and IT engineers. The current members of
            our altcoins mining team come from different scientific disciplines,
            but our common faith in cryptocurrencies has brought us together.
          </div>
          <div className="lg:flex lg:text-lg md:text-md sm:text-md sm:space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 md:w-full space-y-10 lg:pr-52">
              <p>
                Write to us
                <br />
                Please complete the form below and our customer service will
                contact you back as soon as possible.
              </p>
              <p>You can contact our customer support 24/7 via</p>
              <p>support@smartmining.com</p>
              <div className="form border-2 border-orange-500 rounded-xl p-10">
                <form action="/contact" className="space-y-6">
                  <input
                    className="sm:w-full md:w-3/4 border-2 border-orange-500 rounded-xl py-2 px-3 bg-transparent"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name*"
                    required
                  />
                  <input
                    className="sm:w-full md:w-3/4 border-2 border-orange-500 rounded-xl py-2 px-3 bg-transparent"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    required
                  />
                  <input
                    className="sm:w-full md:w-3/4 border-2 border-orange-500 rounded-xl py-2 px-3 bg-transparent"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number*"
                    required
                  />
                  <textarea
                    className="w-full border-2 border-orange-500 rounded-xl py-2 px-3 bg-transparent"
                    placeholder="Message*"
                    required
                    name="text"
                    id="text"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <div className="text-center">
                    <button className="btn-orange w-2/3">Send</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-20">
              <div>Location of the biggest data centers</div>
              <div className="flex sm:text-md md:text-lg">
                <div className="w-1/2 relative space-y-20">
                  {LOCATIONS_DATA_LEFT.map((location, index) => (
                    <SingleLocation
                      label={location}
                      number={index + 1}
                      key={index}
                    />
                  ))}
                </div>
                <div className="w-1/2 relative space-y-20">
                  {LOCATIONS_DATA_RIGHT.map((location, index) => (
                    <SingleLocation
                      label={location}
                      number={3 + (index + 1)}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="font-bold">
                <div>Customer Support service phone numbers</div>
                <div>
                  Czech Republic:{" "}
                  <a className="text-orange-500" href="tel:420517810282">
                    +420 518 818282
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  items: PropTypes.arrayOf({
    question: PropTypes.string,
    answer: PropTypes.string,
  }),
};

export default ContactForm;
