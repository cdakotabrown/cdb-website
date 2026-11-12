import "@testing-library/jest-dom/vitest";

// jsdom lacks IntersectionObserver, which motion's whileInView relies on.
if (!globalThis.IntersectionObserver) {
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}
