import React from "react";
import AnimatedGif from "./AnimatedGif";
import Contact_img from "../assets/contact-img.png";
import Contact_mobile_img1 from "../assets/Contact-mobile-img1.gif";
import Contact_mobile_img2 from "../assets/Contact_mobile_img2.gif";
import Contact_mobile_img3 from "../assets/Contact_mobile_img3.gif";
import Contact_img1 from "../assets/Contact-img1.gif";
import Contact_img2 from "../assets/Contact-img2.gif";

function Contact() {
  return (
    <>
      <div className="bg-black bg-gradient-to-r  from-teal-400 justify-center grid to-blue-500  md:hidden lg:hidden bolck">
        <div className=" grid justify-center">
          <div className="md:hidden lg:hidden bolck">
            <AnimatedGif src={Contact_mobile_img1} />
          </div>
        </div>
        <div className=" grid justify-center">
          <div className="md:hidden lg:hidden bolck">
            <AnimatedGif src={Contact_mobile_img2} />
          </div>
        </div>
        <div className=" grid justify-center">
          <div className="md:hidden lg:hidden bolck">
            <AnimatedGif src={Contact_mobile_img3} />
          </div>
        </div>
        <div className="">
          <AnimatedGif src={Contact_img2} />
        </div>
      </div>
      <div className="bg-black bg-gradient-to-r from-teal-400 justify-center grid to-blue-500    w-full lg:block md:block hidden">
        <div className="justify-center grid">
          <div className="">
            <AnimatedGif src={Contact_img1} />
          </div>
          <div className="justify-center grid">
            <div className="lg:hidden md:block hidden">
              <AnimatedGif src={Contact_img} />
            </div>
          </div>
          <div className="">
            <AnimatedGif src={Contact_img2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
