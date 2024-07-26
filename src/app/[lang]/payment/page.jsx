import { HeroSection2 } from "@/components";
import React from "react";
import Script from "next/script";

function page() {
  return (
    <div>
      <Script
        type="text/javascript"
        src="http://localhost:1337/plugins/strapi-paypal/static/paypal.js"
      ></Script>
      <HeroSection2
        type={"image"}
        heading1={"Luxury Car"}
        heading2={"Rental in Dubai"}
        subheading={"Experience luxury on wheels"}
        posterurl={"/assets/rentacar/banner.png"}
        btntext={"Book your ride"}
        url={"/assets/rentacar/banner.png"}
        overlay={1}
      />
      <div>
        <button
          class="css style"
          type="button"
          className="SS_ProductCheckout"
          data-id="1"
          data-url="http://localhost:1337"
        >
          BuyNow
        </button>
      </div>
    </div>
  );
}

export default page;
