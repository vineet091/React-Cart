const ActionBox = ({ product, onRemove, onMoveToWishList }) => {
  return (
    <div className="actionBox">
      <button
        className="actBtn"
        type="button"
        onClick={() => onMoveToWishList(product.code)}
      >
        Move to Wishlist
      </button>
      <button
        className="actBtn"
        type="button"
        onClick={() => onRemove(product.code)}
      >
        Remove
      </button>
    </div>
  );
};

export default ActionBox;
