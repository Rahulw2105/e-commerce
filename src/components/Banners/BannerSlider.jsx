import Slider from "react-slick";
import React from "react";
import "./BannerSlider.css";

export default function BannerSlider() {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww",
      title: "Fresh Vegetables And Fruits ",
      description: "We Deliver Fresh Vegetables and Fruits at your doorstep",
      button: "Shop Now",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "ZYz",
      description: "XXXS0",
      button: "sdsdsd",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner-slider">
      <Slider className="banner-slider" {...settings}>
        {data.map((item) => (
          <div className="image-container" key={item.id}>
            <img src={item.image} alt="" />
            <div className="content">
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
