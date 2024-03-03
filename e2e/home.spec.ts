import { test } from "@playwright/test";

test.describe("landing", () => {
    test("landing page", async ({ page }) => {
        await page.goto("/");
    });
});
