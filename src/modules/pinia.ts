import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const pinia = createPinia().use(piniaPluginPersistedState);

export { pinia };
