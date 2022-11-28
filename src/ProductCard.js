import ActionBox from "./ActionBox";

const ProductCard = ({ product, onRemove, onMoveToWishList, onUpdateQty }) => {
  return (
    <div className="productCard">
      <div className="gridBox">
        <div className="leftGrid">
          <div className="img">{product.imageUrl}</div>
          <div className="qtyActionBox">
            <button
              className="qtyBtn"
              disabled={product.qty <= 1}
              onClick={() => onUpdateQty(1, product.code)}
            >
              -
            </button>
            <input
              value={product.qty}
              className="qtyInput"
              type="text"
              disabled
            />
            <button
              className="qtyBtn"
              disabled={product.qty >= 3}
              onClick={() => onUpdateQty(2, product.code)}
            >
              +
            </button>
          </div>
        </div>
        <div className="rightGrid">
          <div className="productHeader">
            <span className="title">{product.name}</span>
            <span className="price">{`Rs. ${product.price?.value}`}</span>
          </div>
          <div className="desc">{product.description}</div>
          <div className="code">
            <span className="bold">Article Id</span>: {product.code}
          </div>
          <div className="qty">
            <span className="bold">Qty</span>: {product.qty}
          </div>
        </div>
      </div>
      <ActionBox
        product={product}
        onRemove={onRemove}
        onMoveToWishList={onMoveToWishList}
      />
    </div>
  );
};

export default ProductCard;
