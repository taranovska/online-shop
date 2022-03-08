import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import classes from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";

const ProductDescriptionPage = (props) => {
  const params = useParams();
  const context = useContext(CartContext);

  const currentProduct = props.allItems.find(
    (product) => product.id === params.productId
  );
  const defaultCurrency = currentProduct.prices.find(
    (curSymbol) => curSymbol.currency.symbol === props.currency
  );
  const inStock = currentProduct.inStock;
  let defaultAttributes = [];
  currentProduct.attributes?.map((attribute) =>
    defaultAttributes.push({
      title: attribute.name,
      value: attribute.items[0].displayValue,
      selected: true,
    })
  );

  const [attributes, setAttributes] = useState(defaultAttributes);
  console.log(attributes);
  const handleChange = (e) => {
    let title = e.target.dataset.label;
    let value = e.target.value;

    let currAttribute = { title, value };

    const newArrAttribute = attributes.find(
      (attribute) => attribute.title === title
    );
    setSelected(true);
    newArrAttribute.value = value;
    setAttributes([...attributes]);
    return attributes;
  };
  const price = currentProduct.prices;

  const addToCartButtonHandler = (e) => {
    const enteredAmountNumber = 1;
    context.addItem({
      id: params.productId,
      name: currentProduct.name,
      amount: enteredAmountNumber,
      prices: price,
      attributes: attributes,
      allAttributes: currentProduct.attributes,
      img: currentProduct.gallery[0],
      currency: defaultCurrency.currency.symbol,
    });
  };
  console.log(currentProduct.attributes);
  const [image, setImage] = useState(currentProduct.gallery[0]);

  const mainImage = inStock
    ? `${classes.mainImage}`
    : `${classes.mainImage} ${classes.opacity}`;
  const smallImages = inStock
    ? `${classes.smallImages}`
    : `${classes.smallImages} ${classes.opacity}`;

  const isSelected = (el, el2) => {
    const currentAttr = attributes.find((attr) => attr.title === el2);
    if (currentAttr.value === el) return true;
    else return false;
  };

  const [selected, setSelected] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div>
        {currentProduct.gallery.map((productImg, index) => (
          <img
            className={smallImages}
            src={productImg}
            onClick={() => setImage(currentProduct.gallery[index])}
            key={index++}
            alt="small itemImage"
          ></img>
        ))}
      </div>
      <div
        className={mainImage}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {inStock === false ? <div>Out of Stock</div> : null}
      </div>
      <div className={classes.productDetails}>
        <p className={classes.productName}>{currentProduct.name}</p>
        <div>
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Size" && (
                <div key={index}>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}
                    <div className={classes.flex}>
                      {attribute.items.map((attribute, index) => (
                        <button
                          key={index}
                          className={
                            isSelected(attribute.displayValue, "Size")
                              ? `${classes.options} ${classes.active}`
                              : `${classes.options}`
                          }
                          value={attribute.displayValue}
                          onClick={handleChange}
                          data-label="Size"
                          style={
                            isSelected(attribute.displayValue, "Size")
                              ? {
                                  background: "#1d1f22",
                                  color: "white",
                                }
                              : null
                          }
                        >
                          {attribute.displayValue}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Color" && (
                <div key={index}>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}
                    {attribute.items.map((attribute, index) => (
                      <button
                        key={index}
                        className={
                          isSelected(attribute.displayValue, "Color")
                            ? `${classes.options} ${classes.border}`
                            : `${classes.options}`
                        }
                        value={attribute.displayValue}
                        onClick={handleChange}
                        data-label="Color"
                        style={{ background: `${attribute.displayValue}` }}
                      ></button>
                    ))}
                  </div>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Capacity" && (
                <div key={index}>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}
                    {attribute.items.map((attribute, index) => (
                      <button
                        key={index}
                        className={
                          isSelected(attribute.displayValue, "Capacity")
                            ? `${classes.options} ${classes.active}`
                            : `${classes.options}`
                        }
                        value={attribute.displayValue}
                        onClick={handleChange}
                        data-label="Capacity"
                      >
                        {attribute.displayValue}
                      </button>
                    ))}
                  </div>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "With USB 3 ports" && (
                <div key={index}>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}
                    {attribute.items.map((attribute, index) => (
                      <button
                        key={index}
                        className={
                          isSelected(attribute.displayValue, "With USB 3 ports")
                            ? `${classes.options} ${classes.active}`
                            : `${classes.options}`
                        }
                        value={attribute.displayValue}
                        onClick={handleChange}
                        data-label="With USB 3 ports"
                      >
                        {attribute.displayValue}
                      </button>
                    ))}
                  </div>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Touch ID in keyboard" && (
                <div key={index}>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}
                    {attribute.items.map((attribute, index) => (
                      <button
                        key={index}
                        className={
                          isSelected(
                            attribute.displayValue,
                            "Touch ID in keyboard"
                          )
                            ? `${classes.options} ${classes.active}`
                            : `${classes.options}`
                        }
                        value={attribute.displayValue}
                        onClick={handleChange}
                        data-label="Touch ID in keyboard"
                      >
                        {attribute.displayValue}
                      </button>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
        <div className={classes.titleDescription}>
          Price:
          <p className={classes.price}>
            {defaultCurrency.currency.symbol +
              defaultCurrency.amount.toFixed(2)}
          </p>
        </div>
        <div>
          <button
            className={classes.addToCartButton}
            onClick={addToCartButtonHandler}
            disabled={!inStock}
          >
            ADD TO CART
          </button>
        </div>

        <div className={classes.description} />
        {parse(currentProduct.description)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(ProductDescriptionPage);
