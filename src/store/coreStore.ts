import { create } from 'zustand';

interface CoreState {
  initialized: boolean;
  initialize: () => void;
  // TODO: Add other relevant state and actions
}

export const useCoreStore = create<CoreState>((set) => ({
  initialized: false,
  initialize: () => {
    // Simulate initialization
    setTimeout(() => {
      set({ initialized: true });
    }, 1000);
  },
  // TODO: Implement other state and actions
}));

// Call initialize when the store is created or app starts
// This is a common pattern, but might need adjustment based on app flow
// useCoreStore.getState().initialize(); // Commented out for better testability & control
