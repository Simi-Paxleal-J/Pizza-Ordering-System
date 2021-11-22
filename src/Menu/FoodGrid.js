import styled from "styled-components"
import Title from "../Style/title"

export const FoodGrid = styled.div`
 display: grid;
 grid-template-columns:1fr 1fr;
 gap: 20px;
`

export const FoodLabel = styled(Title)`
   position: absolute;
   background-color: #71DFE7;
`





export const Food = styled.div`
 height: 100px;
 padding: 10px;
 background-image: ${({img}) => `url(${img})`};
 background-position: center;
 background-size: cover;
 filter: contrast(75%);
`
 export const FoodSection = styled.div`
 align: right;
 background-color: #FFC4E1;
 `

export const FoodPrice = styled.div`
align: right;
 background-color: #EED7CE;

`