import { create } from 'zustand';
import { persist, createJSONStorage  } from 'zustand/middleware';

interface UserStore {
    user: { username: string; token: string } | null;
    login: (username: string, token: string) => void;
    logout: () => void;
}
export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            login: (username, token) => {
                set({ user: { username, token } });
            },
            logout: () => {
                set({ user: null });
            },
        }),
        {
            name: 'user-auth',
            storage: createJSONStorage(() => localStorage)
        }
    )
);