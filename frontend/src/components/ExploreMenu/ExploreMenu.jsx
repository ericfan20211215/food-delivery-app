import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className="explore-menu" id='explore-menu'>  
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>From savory mains to sweet treats, our menu is packed with a wide range of options to satisfy every craving. Whether you’re looking for something classic or adventurous, there’s something delicious waiting for you.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
