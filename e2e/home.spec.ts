import { test } from "@playwright/test";

test.describe("landing Page", () => {
    test("landing page", async ({ page }) => {
        await page.goto("/");
    });
});
