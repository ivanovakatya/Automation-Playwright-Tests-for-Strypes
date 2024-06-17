# Strypes-Playwright

## Project Setup

## 📩 Pre-requisites

Ensure you have the following installed on your system
[Node JS] (https://nodejs.org/en/download)
[Git] (https://git-scm.com/downloads)

 <br />
> The project is configured to run only on chromium browser for now.
 <br />

## 💻 To Install and run the project locally

```bash
npm ci
```

1. Install project dependencies with:

```bash
npx playwright install
```

2. Intall Browsers

```bash
$ npx playwright install --with-deps
```

3. Run Tests - In Headless mode

```bash
npm run qatest
```

4. Run Tests - In Headed mode (configured to run only on chrominum)

```bash
npm run qaheaded
```

5. To see the html report

```bash
npm run qareport
```

## 🏃‍♀️ Run project via Github Actions

[In the Github respository --> Actions](https://github.com/ivanovakatya/Automation-Playwright-Tests-for-Strypes/actions)

- Click on `Run workflow`
- Click on the button `Run workflow again`
  <br />
  After the workflow is completed, Report is uploaded to it. This can be downloaded and viewed (index.html)
