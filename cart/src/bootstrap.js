import faker from "faker";

const mountCart = (el) => {
  const cartItems = `<div>Você tem ${faker.random.number()} itens no seu carrinho.</div>`;

  el.innerHTML = cartItems;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");

  if (el) {
    mountCart(el);
  }
}

export { mountCart };
