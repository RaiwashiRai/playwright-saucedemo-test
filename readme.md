# UI Test Automation — Playwright + TypeScript


Maintainable UI test automation for the Swag Labs demo, built with Playwright + TypeScript.
A focused portfolio project featuring clean Page Object–based tests, stable selectors, and fast, CI-friendly HTML reporting.


![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![CI Ready](https://img.shields.io/badge/CI--Ready-000000)
![Release](https://img.shields.io/github/v/release/your-username/playwright-saucedemo-test)


⭐ Highlights

- Page Object pattern with TypeScript for clarity and reuse
- Playwright HTML reports and easy local runs
- Configured for CI (GitHub Actions) — see .github/workflows


## ✅ Application Under Test (AUT)
- [Swag labs demo website](https://www.saucedemo.com/)


## 📚 Project Structure

```
src/
  test/
    java/
      ryu/
        api/jsonplaceholder/      # API client abstraction
        tests/jsonplaceholder/    # Test classes (CRUD, Negative, Schema, Smoke, Temp)
        utils/                    # Config and test data utilities
    resources/
      ryu/schemas/               # JSON schemas for validation
.github/
  workflows/                     # CI/CD pipeline (GitHub Actions)
```



## 🚀 Tech stack
- Playwright (TypeScript)
- Node.js, npm
- GitHub Actions (CI)
- Playwright HTML reports


## ⚙️ Quick start
1. Clone:
   ```sh
   git clone https://github.com/your-username/playwright-saucedemo-test.git
   cd playwright-saucedemo-test
   ```
2. Install:
   ```sh
   npm install
   npx playwright install
   ```
3. Run tests:
   ```sh
   npx playwright test
   ```
4. Open report:
   ```sh
   npx playwright show-report
   ```


## 🏗️ CI/CD

- Manually triggered execution via [GitHub Actions](.github/workflows/playwright.yml).
- Test report generated for each run.




## 📄 License

Copyright (c) 2025 Shubham Gaikwad (GitHub: RaiwashiRai). All Rights Reserved. See [LICENSE](LICENSE) for details.