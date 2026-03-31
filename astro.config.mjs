import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import node from "@astrojs/node";
import keystatic from "@keystatic/astro";

export default defineConfig({
    output: "server",
    adapter: node({ mode: "middleware" }),
    integrations: [mdx(), react(), keystatic()],
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 300,
            },
        },
    },
});
