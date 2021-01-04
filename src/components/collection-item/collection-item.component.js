import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  AddToCartButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  ItemNameContainer,
  ItemPriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} className="image" />
      <CollectionFooterContainer>
        <ItemNameContainer>{name}</ItemNameContainer>
        <ItemPriceContainer>{price}</ItemPriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
