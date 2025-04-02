import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Custom snapshot path to keep Linux and Windows consistent
  snapshotPathTemplate: '{testDir}/snapshots/{testFilePath}/{arg}{ext}',

  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'off',
    colorScheme: 'light',

    // Force all tests to run with consistent fonts and no animations
    launchOptions: {
      args: ['--font-render-hinting=none'],
    },
  },

  // Reporter to show HTML summary locally
  reporter: [['html']],
});
