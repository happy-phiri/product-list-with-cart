/* eslint-disable react/prop-types */

const OrderSuccessItemCard = ({
  productName,
  productQuantity,
  productPrice,
  productThumbnail,
}) => {
  const total = productQuantity * productPrice;

  return (
    <div className="flex flex-row flex-nowrap justify-start items-center gap-4 border-b border-rose-50 py-4">
      <img
        src={productThumbnail}
        alt={`${productName} thumbnail`}
        className="w-[45px] h-[45px] my-auto"
      />
      <div className="font-red-hat-text">
        <p className="text-rose-900 text-xs font-semibold leading-6">
          {productName}
        </p>
        <p className="flex flex-row flex-nowrap gap-3 text-xs">
          <span className="text-red font-medium">{productQuantity}x</span>
          <span className="text-rose-400">@${productPrice.toFixed(2)}</span>
        </p>
      </div>
      <p className="text-rose-900 text-sm ml-auto font-medium">
        ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default OrderSuccessItemCard;
