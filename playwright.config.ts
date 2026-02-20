import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 1,               // retry failed tests
  workers: 3,               // parallel test workers
  use: {
    headless: false,         // set true in CI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',   // capture screenshot if test fails
    video: 'retain-on-failure',      // capture video if test fails
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],   // optional, shows console output
  ],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
   // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
   // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
