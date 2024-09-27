import { expect } from "jsr:@std/expect";
import verify_email from "./verify_email.js";

Deno.test("Test for Irish email", () => {
  const result = verify_email("cgiles.stu@naascc.ie");
  expect(result).toBe("Ireland");
});

Deno.test("Test for non-educational email", () => {
  const result = verify_email("contact@cobraracing.ie");
  expect(result).toBe("Fail");
});
