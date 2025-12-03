import { describe, expect, test, vi } from "vitest";

vi.mock("../src/js/ui.js", () => ({
  displayFact: vi.fn(),
  showLoadingState: vi.fn(),
  showErrorState: vi.fn(),
  renderFavorites: vi.fn(),
  showFeedback: vi.fn(),
}));

import { fetchRandomFact } from "../src/js/app.js";

describe("fetchRandomFact", () => {
  test("should fetch and return data", async () => {
    const mockData = { text: "Mocked fact for tests" };

    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      )
    );

    const result = await fetchRandomFact();

    expect(fetch).toHaveBeenCalledOnce();
    expect(result).toEqual(mockData);

    vi.unstubAllGlobals();
  });

  test("should throw an error if API responds with !ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 500,
        })
      )
    );

    await expect(fetchRandomFact()).rejects.toThrow("API responded with status 500");
    vi.unstubAllGlobals();
  });
});
