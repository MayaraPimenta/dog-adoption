import { devices, expect, test } from '@playwright/test';

test.describe('DogCard swipe', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adote');
    await page.waitForSelector('[data-testid="dog-card"]');
  });

  test('swipe right past threshold dismisses card', async ({ page }) => {
    const card = page.locator('[data-testid="dog-card"]').first();
    const box = await card.boundingBox()!;
    const cx = box!.x + box!.width / 2;
    const cy = box!.y + box!.height / 2;

    const before = await page.locator('[data-testid="dog-card"]').count();

    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 120, cy);
    await page.mouse.up();
    await page.waitForTimeout(400);

    const after = await page.locator('[data-testid="dog-card"]').count();
    expect(after).toBe(before - 1);
  });

  test('swipe left past threshold dismisses card', async ({ page }) => {
    const card = page.locator('[data-testid="dog-card"]').first();
    const box = await card.boundingBox()!;
    const cx = box!.x + box!.width / 2;
    const cy = box!.y + box!.height / 2;

    const before = await page.locator('[data-testid="dog-card"]').count();

    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx - 120, cy);
    await page.mouse.up();
    await page.waitForTimeout(400);

    const after = await page.locator('[data-testid="dog-card"]').count();
    expect(after).toBe(before - 1);
  });

  test('drag below threshold snaps card back', async ({ page }) => {
    const card = page.locator('[data-testid="dog-card"]').first();
    const box = await card.boundingBox()!;
    const cx = box!.x + box!.width / 2;
    const cy = box!.y + box!.height / 2;

    const before = await page.locator('[data-testid="dog-card"]').count();

    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 40, cy);
    await page.mouse.up();
    await page.waitForTimeout(400);

    const after = await page.locator('[data-testid="dog-card"]').count();
    expect(after).toBe(before);

    const transform = await card.evaluate(el => (el as HTMLElement).style.transform);
    expect(transform).toBe('translateX(0px) rotate(0deg)');
  });

  test('pointercancel resets card to center (mobile browser scroll interception)', async ({ page }) => {
    const card = page.locator('[data-testid="dog-card"]').first();
    const box = await card.boundingBox()!;
    const cx = box!.x + box!.width / 2;
    const cy = box!.y + box!.height / 2;

    await page.evaluate(([x, y]) => {
      const el = document.querySelector('[data-testid="dog-card"]')!;
      el.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y, bubbles: true, isPrimary: true, pointerId: 1 }));
    }, [cx, cy]);

    for (let i = 1; i <= 8; i++) {
      await page.evaluate(([x, y]) => {
        const el = document.querySelector('[data-testid="dog-card"]')!;
        el.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, isPrimary: true, pointerId: 1 }));
      }, [cx + i * 12, cy]);
    }

    await page.evaluate(() => {
      const el = document.querySelector('[data-testid="dog-card"]')!;
      el.dispatchEvent(new PointerEvent('pointercancel', { bubbles: true, isPrimary: true, pointerId: 1 }));
    });

    await page.waitForTimeout(400);

    const transform = await card.evaluate(el => (el as HTMLElement).style.transform);
    expect(transform).toBe('translateX(0px) rotate(0deg)');
  });
});

test.describe('DogCard swipe — mobile viewport', () => {
  test.use({ ...devices['iPhone 12'] });

  test('pointercancel não congela o card em mobile', async ({ page }) => {
    await page.goto('/adote');
    await page.waitForSelector('[data-testid="dog-card"]');

    const card = page.locator('[data-testid="dog-card"]').first();
    const box = await card.boundingBox()!;
    const cx = box!.x + box!.width / 2;
    const cy = box!.y + box!.height / 2;

    await page.evaluate(([x, y]) => {
      const el = document.querySelector('[data-testid="dog-card"]')!;
      el.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y, bubbles: true, isPrimary: true, pointerId: 1 }));
    }, [cx, cy]);

    for (let i = 1; i <= 8; i++) {
      await page.evaluate(([x, y]) => {
        const el = document.querySelector('[data-testid="dog-card"]')!;
        el.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, isPrimary: true, pointerId: 1 }));
      }, [cx + i * 12, cy]);
    }

    await page.evaluate(() => {
      const el = document.querySelector('[data-testid="dog-card"]')!;
      el.dispatchEvent(new PointerEvent('pointercancel', { bubbles: true, isPrimary: true, pointerId: 1 }));
    });

    await page.waitForTimeout(400);

    const transform = await card.evaluate(el => (el as HTMLElement).style.transform);
    expect(transform).toBe('translateX(0px) rotate(0deg)');
  });
});
