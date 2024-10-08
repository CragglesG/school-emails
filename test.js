import { expect } from "jsr:@std/expect";
import verifyEmail from "./verify_email.js";

Deno.test("Test for Irish email", () => {
  const result = verifyEmail("cgiles.stu@naascc.ie");
  expect(result).toBe("Ireland");
});

Deno.test("Test for non-educational email", () => {
  const result = verifyEmail("contact@cobraracing.ie");
  expect(result).toBe("Fail");
});
