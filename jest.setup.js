// jest.setup.js
require('@testing-library/jest-dom');

// Mock IntersectionObserver for Framer Motion
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe(target) {
    // You can trigger the callback here if needed for specific tests
  }

  unobserve(target) {}

  disconnect() {}
};
