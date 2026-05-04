import { describe, it, expect } from "vitest";
import { projects } from "./projects";

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required fields", () => {
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(["completed", "ongoing", "upcoming"]).toContain(p.status);
    });
  });

  it("every project has string github and live fields", () => {
    projects.forEach((p) => {
      expect(typeof p.github).toBe("string");
      expect(typeof p.live).toBe("string");
    });
  });

  it("every project has at least one tag", () => {
    projects.forEach((p) => {
      expect(p.tags.length).toBeGreaterThan(0);
    });
  });
});
