import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000", // 서버리스 함수 로컬 서버 (Express or Vercel dev)
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
