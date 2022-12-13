import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Gallery.css';


const galleryImages = [images.gallery1, images.gallery2, images.gallery3, images.gallery4];



const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction==='left')
    {
      current.scrollRef -= 300;
    }
    else
    {
      current.scrollRef += 300;
    }
  }


  return(
    <div className=' app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: "#AAA", marginTop: '2rem'}}>For convenience, transform values are applied in a specific order: translate, scale, rotate, skew.
        However, you can customize this default order using the transformTemplate prop.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        {/* FIRST DIV CONTAINS ACTUAL IMAGES */}
        <div className='app__gallery-images_container' ref={scrollRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery image"/>
                <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

         {/* SECOND DIV CONTAINS THE BUTTONS*/}
         <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery_arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery_arrow-icon' onClick={() => scroll('right')}/>
         </div>

      </div>

    </div>
)};

export default Gallery;
