import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "node:path";
import Pages from "vite-plugin-pages";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Unocss({
      /* options */
    }),
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
    Pages({
      // Here we can add 'md'
      extensions: ["vue"],
      dirs: [{ dir: "src/views", baseRoute: "" }],
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store",
        "src/helpers",
        "src/stores",
        "src/support",
      ],
      vueTemplate: true,
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),

  ],
});
