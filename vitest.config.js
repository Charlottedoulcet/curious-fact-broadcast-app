import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // permet d’utiliser test(), describe(), expect() sans importer partout
    environment: "jsdom", // simule un navigateur pour tester le DOM
  },
});
