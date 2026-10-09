function formatPrice(price) {
  return `৳${price.toLocaleString("en-BD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default formatPrice;
