import React from "react";
import Header from "./Header";
import Carosel from "./Carosel";
import Contenttt from "./Contenttt";
import Footerr from "./Footerr";

export default function Ex_BootsTrap() {
  return (
    <div>
      <Header />
      <section>
        <Carosel />
      </section>
      <Contenttt />
      <Footerr />
    </div>
  );
}
