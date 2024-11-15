import { createAuthSlice } from "./slices/auth-slice";
import { createChatSlice } from "./slices/chat-slice";

import { create } from "zustand";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createChatSlice(...a)
}));
