import { defineStore } from "pinia";

import type { ThemeState } from "@/models/ThemeStateModel";

export const useThemeStore = defineStore ({
    id: "Theme",
    state: () : ThemeState => ({
        isDark: false,
        mode: "Light Mode"
    }),
    actions: {
        changeTheme (theme: ThemeState) {
            this.isDark = this.isDark ? false : true;
            this.mode = this.mode ? "Dark" : "Light Mode";
        }
    }
})