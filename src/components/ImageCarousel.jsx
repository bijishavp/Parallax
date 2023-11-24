// image Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; // Import your custom CSS file

const ImageCarousel = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    
   
  };

  return (
    <>
      <div className='head text-center pb-3'><h1>Image Slider with parallax Effect</h1></div>
      <Slider {...settings} className='container'>
      <div className="parallax-slide">
          <img src=" https://www.kiwiqa.com/wp-content/uploads/2022/05/Automation-Testing-vs.-DevOps.jpg" alt="No image" />
        </div>
     
        <div className="parallax-slide">
          <img src="https://www.kiwiqa.com.au/wp-content/uploads/2023/11/types-of-testing-in-web-application.jpg" alt="No image" />
        </div>
        <div className="parallax-slide">
          <img src="https://www.kiwiqa.com/wp-content/uploads/2022/09/Performance-Testing-of-Salesforce-Applications.jpg" alt="No image" />
        </div>
        <div className="parallax-slide">
          <img src="https://www.kiwiqa.com/wp-content/uploads/2023/11/what-is-salesforce-testing.jpg" alt="No image" />
        </div>
        <div className="parallax-slide">
          <img src="https://www.kiwiqa.com.au/wp-content/uploads/2023/10/web-application-security-testing-checklist.jpg" alt="No image" />
        </div>
        <div className="parallax-slide">
          <img src="https://www.kiwiqa.com.au/wp-content/uploads/2023/10/A-Guide-To-Backward-Compatibility-Testing-In-Software.jpg" alt="No image" />
        </div>
        <div className="parallax-slide">
          <img src=" https://www.kiwiqa.com.au/wp-content/uploads/2023/10/web-application-security-testing-checklist.jpg" alt="No image" />
        </div>
       
        {/* Add more image url for image slider */}
      </Slider>
    </>
  );
};

export default ImageCarousel;

