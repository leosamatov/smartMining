import { useEffect, useState } from "react";

import "./Loading.scss";

const Loading = ({ loading }) => {
  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);
  return (
    <section className="pageLoader">
      <div class="loadingio-spinner-spinner-ys8aivwbw1">
        <div class="ldio-rm0psfcr4uj">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
