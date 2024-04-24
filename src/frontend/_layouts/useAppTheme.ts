import { useAppConfiguration } from "frontend/hooks/configuration/configuration.store";
import { MAKE_CRUD_CONFIG } from "frontend/lib/crud-config";
import { IColorMode } from "frontend/design-system/theme/types";
import { useTheme } from "frontend/design-system/theme/useTheme";
import { useUserPreference } from "frontend/hooks/auth/preferences.store";
import { ColorSchemes } from "shared/types/ui";
import { t } from "@lingui/macro";
import { processThemeColors } from "./portal";
import { getThemePrimaryColor } from "./utils";

export const THEME_SETTINGS_CRUD_CONFIG = MAKE_CRUD_CONFIG({
  path: "N/A",
  plural: "Theme Settings",
  singular: t`Theme Settings`,
});

export const useUserThemePreference = () => {
  const themeColor = useAppConfiguration("theme_color");
  const userPreferences = useUserPreference("theme");

  const theme: ColorSchemes | IColorMode = userPreferences.data;

  const primaryColor = getThemePrimaryColor(theme, themeColor);

  return processThemeColors(primaryColor, theme, themeColor);
};

export const useAppTheme = () => {
  const { primaryColor, theme } = useUserThemePreference();
  useTheme(primaryColor, theme);
};
