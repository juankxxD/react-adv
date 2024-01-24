import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <ProductCard product={product}>
          <ProductCard.Image img={product.img} />

          <ProductCard.Title title={product.title} />

          <ProductCard.Buttons  counter={counter} increaseBy={increaseBy} />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage  />

          <ProductTitle  />

          <ProductButtons  />
        </ProductCard>
      </div>
    </div>
  );
};
