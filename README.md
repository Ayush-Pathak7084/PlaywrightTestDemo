# 🎭 Playwright TypeScript POM Framework (SauceDemo)

A robust, end-to-end automation framework for [SauceDemo](https://www.saucedemo.com/) built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern for scalability and maintainability.

---

## ✨ Key Features

- **TypeScript**: Type-safe and scalable environment for test development.
- **Page Object Model (POM)**: Clean separation of test logic from page actions (`BasePage`, `LoginPage`, etc.).
- **Centralized Management**: `application.ts` acts as a factory for all page objects, simplifying test setup.
- **Cross-Browser**: Run tests simultaneously across Chromium, Firefox, and WebKit.
- **Smart Artifacts**: Automatically captures screenshots and records videos **only for failed tests**.
- **HTML Reporting**: Generates a detailed, interactive HTML report for easy result sharing.

---

## 📂 Project Structure

```

sauce-pom/
├── tests/
│   ├── loginTest.spec.ts          # Valid Login Test
│   ├── invalidLoginTest.spec.ts   # Invalid Login Test
│   ├── addToCartTest.spec.ts      # Add Product to Cart Test
│   └── logoutTest.spec.ts         # Logout Test
├── pages/
│   ├── basePage.ts                # Reusable actions (click, type, navigate, assert)
│   ├── loginPage.ts               # Page Object for the Login screen
│   ├── productsPage.ts            # Page Object for the Products screen
│   ├── cartPage.ts                # Page Object for the Cart screen
│   └── application.ts             # Central Page Object Manager/Context
├── playwright.config.ts           # Core Playwright configuration file
├── package.json
└── tsconfig.json

```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd sauce-pom
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

**Run All Tests (Default)**

```bash
npx playwright test
```

**Run in Headed Mode**

```bash
npx playwright test --headed
```

**Run on Specific Browser**

```bash
npx playwright test --project=Firefox   # or WebKit/Chromium
```

---

## 📝 Automated Test Cases Summary

| File Name                  | Test Description                                                                                   | Status     |
| -------------------------- | -------------------------------------------------------------------------------------------------- | ---------- |
| `loginTest.spec.ts`        | **Valid Login:** Log in with `standard_user/secret_sauce` and verify redirection to Products page. | ✅ Passing |
| `invalidLoginTest.spec.ts` | **Invalid Login:** Attempt login with incorrect credentials and assert error message visibility.   | ✅ Passing |
| `addToCartTest.spec.ts`    | **Cart Flow:** Log in, add an item to the cart, and verify it appears correctly in the Cart view.  | ✅ Passing |
| `logoutTest.spec.ts`       | **Logout:** Log in, perform logout, and verify redirection to the login page.                      | ✅ Passing |

---

## 📊 Reporting & Artifacts

- **HTML Report**: An interactive HTML report is generated in the `reports/` folder.
  View it with:

  ```bash
  npx playwright show-report reports
  ```

- **Screenshots & Videos**: Automatically captured **only for failed tests**.

---

### 💡 Why This Framework?

This setup is designed for **scalability** (easy to add new tests/pages), **maintainability** (clean POM architecture), and **cross-browser reliability**, making it a perfect starting point for UI test automation on SauceDemo or similar projects.

---

**Happy Testing! 🚀**

```

---

✅ **How to use:**
1. Copy the **Repo Description** into the GitHub “Description” field when creating the repository.
2. Save the **README.md** content as your `README.md` file in the project root.
```
