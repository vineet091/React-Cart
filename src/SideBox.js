import ActionBox from "./ActionBox";

const SideBox = ({ totalPrice }) => {
  return (
    <div className="sideBox">
      <button className="redirectBtn">Continue</button>
      <div className="sideboxItem">
        <div>Price</div>
        <div>{`Rs. ${totalPrice?.value}`}</div>
      </div>
      <div className="sideboxItem totalPriceBox">
        <div>Total Price</div>
        <div>{`Rs. ${totalPrice?.value}`}</div>
      </div>
    </div>
  );
};

export default SideBox;
