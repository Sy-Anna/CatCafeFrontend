import react from "@vitejs/plugin-react";
import n_path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.split("node_modules/")[1].split("/")[0];
					}
				},
			},
		},
	},
	server: {
		open: "/Home",
	},
	resolve: {
		alias: {
			"@": n_path.resolve(__dirname, "src"),
			"@libs": n_path.resolve(__dirname, "src/libs"),
			"@assets": n_path.resolve(__dirname, "src/assets"),
			"@pages": n_path.resolve(__dirname, "src/pages"),
		},
	},
});
