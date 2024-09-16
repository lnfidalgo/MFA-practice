import { mount } from "products/ProductsIndex";
import { mountCart } from "cart/CartShow";

console.log("Container!");

const myProducts = document.querySelector("#my-products");
const myCart = document.querySelector("#my-cart");

mount(myProducts);
mountCart(myCart);
