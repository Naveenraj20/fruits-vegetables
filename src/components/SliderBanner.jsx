import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import List from '../List.json'
import Cards from "./Cards";

function SliderBanner() {
    const data = List.filter((i)=>(i.type==="fruit"));


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <div className="rounded-2xl ">
      <Slider {...settings} className="justify-center grid text-sm m-5 font-extrabold " >
        {data.map((i)=>(
            <Cards item={i} key={i.id}/>
        ))}
      </Slider>
    </div>
  );
}

export default SliderBanner;
