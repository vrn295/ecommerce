import React from "react";
import styled from "styled-components";
import "./ProductStructure.css";

const ProductContainer = styled.div`
  max-width: 28.125rem;
  background-color: rgb(228, 228, 228);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  > h3 {
    text-overflow: ellipsis;

    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default function ProductStructure(props) {
  return (
    <ProductContainer>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      {/* <p>{props.details}</p> */}
      <h4>{props.price}</h4>
    </ProductContainer>
  );
}
