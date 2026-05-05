import { test, expect } from '@playwright/test';

test.describe('Pet Care Portfolio E2E', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('PW-01: should navigate to about section', async ({ page }) => {
        await page.click('text=About Me');
        await expect(page).toHaveURL(/.*#about/);
    });

    test('PW-11: should show success popup on recommendation submission', async ({ page }) => {
        await page.fill('#recName', 'Playwright Tester');
        await page.fill('#recText', 'Automated recommendation message.');
        await page.click('button[type="submit"]');

        const popup = page.locator('#popup');
        await expect(popup).toBeVisible();
        await expect(popup).toContainText('Submitted Successfully!');
    });
});
