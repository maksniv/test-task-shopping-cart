export function getEnding(count) {
  count = Math.abs(count) % 100;
  const lastDigit = count % 10;

  if (count > 10 && count < 20) {
    return "товаров"; // 11-19 товаров
  }
  if (lastDigit > 1 && lastDigit < 5) {
    return "товара"; // 2-4 товара
  }
  if (lastDigit === 1) {
    return "товар"; // 1 товар
  }
  return "товаров"; // 0, 5-9 товаров
}
