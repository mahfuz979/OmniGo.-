import request from "supertest";
import { describe, it, expect } from "vitest";
import { createApp } from "../src/app";

describe("health", () => {
  it("returns ok", async () => {
    const r = await request(createApp()).get("/v1/health");
    expect(r.status).toBe(200);
    expect(r.body.status).toBe("ok");
  });
  it("returns consistent 404 error", async () => {
    const r = await request(createApp()).get("/nope");
    expect(r.body.error.code).toBe("not_found");
  });
});
