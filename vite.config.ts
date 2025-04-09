import react from "@vitejs/plugin-react";
import n_path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: "/Home",
	},
	resolve: {
		alias: {
			"@": n_path.resolve(__dirname, "src"),
		},
	},
});
