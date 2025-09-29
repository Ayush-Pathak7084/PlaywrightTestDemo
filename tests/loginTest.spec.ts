import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

test("Login with valid credentials", async ({ page }) => {
  const app = new Application(page);

  await app.loginPage.navigateTo("/");
  await app.loginPage.login("standard_user", "secret_sauce");

  await expect(await app.productsPage.getTitleText()).toBe("Products");
});
