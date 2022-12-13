import React from 'react';
import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Chef.css';
import {MotionWrap} from '../../wrapper'


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img'>
      <img src={images.chef} alt="chef" style={{borderRadius: "30rem"}}/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Word from the Chef"/>
      <h1 className='headtext__cormorant'>What we Believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>

      <div className='app__chef-sign'>
        <p> D'Yaa</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>

    </div>
  </div>
);

export default Chef
//export default ( MotionWrap(Chef, 'app__chef'));