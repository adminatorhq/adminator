import { NAVIGATION_LINKS } from "frontend/lib/routing/links";
import { HOME_DASHBOARD_KEY } from "shared/types/dashboard";
import { t } from "@lingui/macro";
import { BaseManageDashboard } from "./_BaseManageDashboard";

export function ManageDashboard() {
  return (
    <BaseManageDashboard
      dashboardId={HOME_DASHBOARD_KEY}
      doneLink={NAVIGATION_LINKS.DASHBOARD.HOME}
      title={t`Dashboard`}
    />
  );
}
