import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a2sv from '../../assets/other/a2sv.svg'
import meta from '../../assets/other/meta.svg'
import google from '../../assets/other/google.svg'
import addisababaU from '../../assets/other/addisababaU.svg'
import langchain from '../../assets/other/langchain.svg'


class Carousel extends Component{
    //bg-darkBg
  render(){
    const settings = {
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 4000,
      cssEase: "linear",
      initialSlide: 0,
      arrows:false
    };
    return(
      <div className="mainContainer text-textColor h-[400px] w-full bottom-10 opacity-50">
        <h2 className="text-center text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs mt-6">Companies we wished would sponser us</h2>
        <Slider {...settings} className="flex justify-center items-center w-full h-full">
          <div className="container">
            .<img src={a2sv}/>
          </div>
          <div className="container">
          <img src={meta}/>
          </div>
          <div className="container">
          <img src={google}/>
          </div>
          <div className="container">
          <img src={addisababaU}/>
          </div>
          <div className="container">
          <img src={langchain}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;