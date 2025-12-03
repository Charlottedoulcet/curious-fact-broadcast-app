import { describe, expect, test } from "vitest";
import { addToFavorites, getFavorites } from "../src/js/storage.js";

describe("addToFavorites()", () => {
  test("should add a fact to favorites", () => {
    const fact = "Cats sleep 70% of their lives";

    const result = addToFavorites(fact);

    expect(result).toBe(true);
    expect(getFavorites()).toContain(fact);
  });

  test("should not add a duplicate", () => {
    const fact = "Cats sleep 70% of their lives";

    addToFavorites(fact);
    const result = addToFavorites(fact);

    expect(result).toBe(false);
    expect(getFavorites().length).toBe(1);
  });
});
