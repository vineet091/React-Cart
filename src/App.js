import "./styles.css";
import ProductCard from "./ProductCard";
import { data } from "./data";
import { useEffect, useState } from "react";

// Product page - Name, Image, price, description, CTA - add to Cart
// Cart Page -  Product lists, price bifurcation, total

export default function CartPage() {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    setCartData(data);
  }, []);

  const onRemove = (productCode) => {
    const { products } = cartData;
    const productList = products.filter((product) => {
      return productCode !== product.code;
    });
    setCartData((cart) => ({ ...cart, products: [...productList] }));
  };

  const onMoveToWishList = (productCode) => {
    const { products } = cartData;
    const productList = products.filter((product) => {
      console.log(product, productCode);
      return parseInt(productCode, 10) !== parseInt(product.code, 10);
    });
    console.log(productList);
    setCartData((cart) => ({ ...cart, products: [...productList] }));
  };

  const onUpdateQty = (actionType = 2, productCode) => {
    const { products = [] } = cartData;
    products.map((product) => {
      if (product.code === productCode) {
        if (actionType === 1) {
          product.qty -= 1;
        } else {
          product.qty += 1;
        }
      }
      return true;
    });
    setCartData((cart) => ({ ...cart, products: [...products] }));
  };

  return (
    <div className="App">
      {cartData?.products.map((product) => {
        return (
          <ProductCard
            product={product}
            onUpdateQty={onUpdateQty}
            onRemove={onRemove}
            onMoveToWishList={onMoveToWishList}
          />
        );
      })}
    </div>
  );
}
