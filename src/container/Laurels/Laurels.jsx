import React from 'react';
import { SubHeading } from "../../components"
import { images, data } from "../../constants" 
import './Laurels.css';


const AwardCard = ({award: {imgUrl, title, subtitle}}) => 
(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award"/>
    <div className='app__laurels_awards-card_content'>
      <p className='p__opensans' style={{color: "#DCCA87"}}>{title}</p>
      <p className='p__opensans' >{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>

   {/* INFO */} 
    <div className='app__wrapper_info'>
      <SubHeading title="Awards and Recognition"/>
      <h1 className='headtext__cormorant'> Our Awards</h1>

      {/*looping Over our DATA */}
      <div className='app__laurels_award'>
        {data.awards.map((award)=> <AwardCard award={award} key={award.title}/> )}
      </div>

    </div>

    {/* IMAGE */}
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="awards"/>
    </div>

  </div>
);

export default Laurels;
