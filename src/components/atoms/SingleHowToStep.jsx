import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

function SingleHowToStep({ src, title, description, isLast }) {
  return (
    <div className={"sm:w-full md:w-1/3 sm:space-y-4 md:space-y-8 relative"}>
      <div>
        <img src={src} alt="" />
      </div>
      <div className="sm:space-y-3 md:space-y-5 max-w-xs">
        <div className="title-font text-3xl">{title}</div>
        <div>{ReactHtmlParser(description)}</div>
      </div>
      <img
        style={{ display: isLast ? "none" : "block" }}
        src="img/Arrow-1.png"
        className="absolute lg:left-40 lg:w-auto md:left-24 md:right-auto md:top-2 md:transform-none sm:-right-14 sm:rotate-90 sm:top-40 sm:transform sm:w-32"
      />
    </div>
  );
}

SingleHowToStep.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isLast: PropTypes.bool,
};

export default SingleHowToStep;
