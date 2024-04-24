import { t } from "@lingui/macro";
import { MAKE_CRUD_CONFIG } from "frontend/lib/crud-config";

export const DASHBOARD_WIDGETS_CRUD_CONFIG = MAKE_CRUD_CONFIG({
  path: "N/A",
  plural: "Dashboard Widgets",
  singular: t`Dashboard Widget`,
});

export const DASHBOARD_CRUD_CONFIG = MAKE_CRUD_CONFIG({
  path: "n/a",
  plural: "Dashboards",
  singular: t`Dashboard`,
});
