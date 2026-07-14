#Instruction and Notes

1. ✅Install playwright
    - npm init playwright@latest

2. ✅Check if installed correctly
    - npx playwright --help

Starts the interactive UI mode.
    npx playwright test --ui
    npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

    npx playwright test example

Runs the tests in a specific file.

    npx playwright test --debug

Runs the tests in debug mode.

    npx playwright codegen

Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:

- .\tests\example.spec.ts - Example end-to-end test
- .\playwright.config.ts - Playwright Test configuration

//Prettier
How to Run It

Check files: Run to see which files need formatting.
    npx prettier . --check

Fix files: Run to automatically format all files in the directory.
    npx prettier . --write


/*GITHUB*/

1. --git commands
git init /*this will initialise got and create master branch*/
git * . /*This will open enclosed folder with hidden files .git(hidden) folder is important file which shows git managed*/
git status /*Will show all git managed files and folder*/
git add .  /*Files to be added in git*/
git commit -m "<commit-message>" /*commit on master branch*/


2. /*Git ignores the following files*/
-/debug
-logs/
-.env   /*Important files with security details and should not be shared*/
-allure-results
-tests-examples/
-example.*
-*.log

3. /*Adding to online git cloud repository*/
git branch -M main  /*Renamed Master to main*/
git remote add origin <REMOTE_URL>  /*Link to remote URL*/
git remote set-url origin https://github.com/elitinocgpt/playwright-e2e-tests.git /*Set remote URL, if above shows any error*/
git remote -v /*Will provide status of link*/
git push -u origin main /*If this fails then check credential manager github..*/

4. /*To remove wrong files from GIT due to .gitignore file not exercised, following steps inmportant*/
