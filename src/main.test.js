import { expect, test } from "vitest";

test("main.js loads", async () => {
  await expect(import("./main.js")).resolves.toBeDefined();
});
