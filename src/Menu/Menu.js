import React from "react"
import styled from "styled-components"
import {foods} from "../Data/foodData"
import {FoodGrid, Food, FoodLabel, FoodSection, FoodPrice} from "./FoodGrid"

const MenuStyled = styled.div`
 height: 700px;
 margin: 0px 40px 50px 20px;
 background-color: #FFCC1D;
`
const Menu =()=>{

    return(
        <MenuStyled> 
        <h1> Menu </h1> 
        <FoodGrid>
        {
          foods.map(food =>(
            
              <Food img={food.img}>
               <FoodLabel> {food.name}             
                <FoodSection>{food.section} 
                <FoodPrice>
                    {food.price}
                </FoodPrice>
                </FoodSection>
                </FoodLabel>
               
              </Food>

          ))
        }
        </FoodGrid>
        </MenuStyled>
    )

}
export default Menu