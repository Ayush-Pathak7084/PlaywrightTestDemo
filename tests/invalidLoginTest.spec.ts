import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

test("Login with invalid credentials shows error", async ({ page }) => {
  const app = new Application(page);

  await app.loginPage.navigateTo("/");
  await app.loginPage.login("invalid_user", "wrong_password");

  const errorMsg = await app.loginPage.getErrorMessage();
  expect(errorMsg).toContain("Epic sadface"); // SauceDemo error message
});
