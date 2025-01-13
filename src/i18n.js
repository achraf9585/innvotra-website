import { getLocaleFromNavigator, init, register } from "svelte-i18n";
import { addMessages } from "svelte-i18n";

// Register translations
register("en", () => import("./locales/en.json"));
register("ar", () => import("./locales/ar.json"));

// Initialize i18n
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(), // Default language
});
