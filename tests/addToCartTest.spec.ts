import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

test("Add a product to the cart", async ({ page }) => {
  const app = new Application(page);

  await app.loginPage.navigateTo("/");
  await app.loginPage.login("standard_user", "secret_sauce");

  await app.productsPage.addFirstProductToCart();
  await app.productsPage.goToCart();

  expect(await app.cartPage.isProductInCart()).toBeTruthy();
});
