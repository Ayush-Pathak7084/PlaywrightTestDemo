import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

test("User should be able to logout", async ({ page }) => {
  const app = new Application(page);

  await app.loginPage.navigateTo("/");
  await app.loginPage.login("standard_user", "secret_sauce");

  await app.productsPage.logout();

  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
