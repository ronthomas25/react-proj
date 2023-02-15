import { useState } from "react";

const images = [


  { id :1 , link :"https://images.pexels.com/photos/14979469/pexels-photo-14979469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  { id :2 , link :"https://images.pexels.com/photos/13354883/pexels-photo-13354883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  { id :2 , link :"https://images.pexels.com/photos/9430789/pexels-photo-9430789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  { id :4 , link :"https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide(){
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return(
    <div>
        <h1>Carousel</h1>
        <div className="slider">
            <div className="left-arrow" onClick={prevSlide}>Back</div>
            <div className="right-arrow" onClick={nextSlide}>Next</div>
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image.id} className="slide">
                <img src={image.link} alt="images" />
              </div>
            )
        )}
      </div>
   
  )
}
