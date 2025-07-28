// src/__mocks__/@tensorflow/tfjs.ts

import { type Mock } from "vitest";

// Define a type for the mock tensor to avoid using 'any' repeatedly
type MockTensor = {
  dataSync: Mock<any[], any>;
  mul: Mock<any[], any>;
  relu: Mock<any[], any>;
  sigmoid: Mock<any[], any>;
  sub: Mock<any[], any>;
  square: Mock<any[], any>;
  sum: Mock<any[], any>;
};

// Mock the parts of tfjs that are used in SMRL.ts and App.test.tsx
export const tensor1d: Mock<any[], MockTensor> = vi.fn((values?: any[]) => ({
  dataSync: vi.fn(() => new Float32Array(values || [])), // Ensure dataSync returns a TypedArray
  mul: vi.fn(() => tensor1d(values)), // Return a mock tensor
  relu: vi.fn(() => tensor1d(values)),
  sigmoid: vi.fn(() => tensor1d(values)),
  sub: vi.fn(() => tensor1d(values)),
  square: vi.fn(() => tensor1d(values)),
  sum: vi.fn(() => ({ dataSync: vi.fn(() => [0]) })), // Mock for sum used in grad
  // Add other functions as needed by your tests or code
}));

export const scalar = vi.fn((value: number) => ({
  // Mock scalar representation if needed, or return a simple object
}));

export const mul = vi.fn((a: MockTensor, b: MockTensor) => tensor1d(a.dataSync())); // Simplified mock
export const relu = vi.fn((tensor: MockTensor) => tensor);
export const sigmoid = vi.fn((tensor: MockTensor) => tensor);
export const sub = vi.fn((a: MockTensor, b: MockTensor) => tensor1d(a.dataSync()));
export const mean = vi.fn((tensor: MockTensor) => ({ dataSync: vi.fn(() => [0.5]) })); // Mock mean
export const abs = vi.fn((tensor: MockTensor) => tensor);
export const grad = vi.fn((f: (t: MockTensor) => any) => vi.fn((t_val: any) => tensor1d([1,1,1]))); // Mock grad

// If you use specific backends or other tf functions, mock them as well
// For example:
// export const setBackend = vi.fn();
// export const ready = vi.fn(() => Promise.resolve());

console.log('Using mocked @tensorflow/tfjs'); // For debugging to ensure mock is used

// Ensure all exports from the actual module that are used are mocked.
// This is a basic mock. You might need to expand it based on actual usage.
export default {
  tensor1d,
  scalar,
  mul,
  relu,
  sigmoid,
  sub,
  mean,
  abs,
  grad,
  // ... other tf functions used
};
