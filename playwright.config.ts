import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    timeout: 10 * 60 * 1000,
    testDir: "./e2e",
    use: {
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        baseURL: "http://localhost:3000",
        trace: "on-first-retry",
        actionTimeout: 20 * 1000,
        navigationTimeout: 50 * 1000,
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },

        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },

        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
        {
            name: "Microsoft Edge",
            use: { ...devices["Desktop Edge"], channel: "msedge" },
        },
    ],

    reporter: [
        ["dot"],
        [
            "html",
            {
                open: "always",
            },
        ],
    ],
});
