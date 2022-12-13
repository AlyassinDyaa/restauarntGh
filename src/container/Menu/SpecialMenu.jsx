import React from 'react';
import { SubHeading, MenuItem } from "../../components" 
import { images, data} from "../../constants"
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="A Menu that Fits Your Palette"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

  <div className='app__specialMenu-menu'>
    
    <div className='app__specialMenu-menu_drinkcold flex__center'>
      <p className='app__specialMenu_menu_heading'>Cold Drinks </p>
      <div className='app__specialMenu_menu_items'>
        {data.coldDrinks.map((cDrink, index) => (
          <MenuItem key={cDrink.title + index} title={cDrink.title} price={cDrink.price} tags={cDrink.tags}/>
        ))}
      </div>
    </div>

    <div className='app__specialMenu-menu_img '>
          <img src={images.drinks1} alt="menu"/>
    </div>

    <div className='app__specialMenu-menu_drinkhot flex__center'>
      <p className='app__specialMenu_menu_heading'>Hot Drinks </p>
      <div className='app__specialMenu_menu_items'>
        {data.hotDrinks.map((hDrink, index) => (
           <MenuItem key={hDrink.title + index} title={hDrink.title} price={hDrink.price} tags={hDrink.tags}/>
        ))}
      </div>
    </div>

  </div>

  <div style={{marginTop: "15px"}}>
        <button type='button' className='custom__button'></button>
  </div>


  </div>
);

export default SpecialMenu;
