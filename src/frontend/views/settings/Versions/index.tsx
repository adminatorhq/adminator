import { UserPermissions } from "shared/constants/user";
import { ViewStateMachine } from "frontend/components/ViewStateMachine";
import { Fragment } from "react";
import { MAKE_CRUD_CONFIG } from "frontend/lib/crud-config";
import { useApi } from "frontend/lib/data/useApi";
import { useSetPageDetails } from "frontend/lib/routing/usePageDetails";
import { SectionBox } from "frontend/design-system/components/Section/SectionBox";
import { BaseSkeleton } from "frontend/design-system/components/Skeleton/Base";
import { Typo } from "frontend/design-system/primitives/Typo";
import { Spacer } from "frontend/design-system/primitives/Spacer";
import { msg } from "@lingui/macro";
import { typescriptSafeObjectDotEntries } from "shared/lib/objects";
import { SETTINGS_VIEW_KEY } from "../constants";
import { BaseSettingsLayout } from "../_Base";

const SYSTEM_INFORMATION_CRUD_CONFIG = MAKE_CRUD_CONFIG({
  plural: msg`System Information`,
  singular: msg`System Information`,
});

export function VersionInfo() {
  useSetPageDetails({
    pageTitle: SYSTEM_INFORMATION_CRUD_CONFIG.TEXT_LANG.TITLE,
    viewKey: SETTINGS_VIEW_KEY,
    permission: UserPermissions.CAN_CONFIGURE_APP,
  });

  const systemVersions = useApi<Record<string, string>>("/api/versions", {
    errorMessage: SYSTEM_INFORMATION_CRUD_CONFIG.TEXT_LANG.NOT_FOUND,
    defaultData: {},
  });

  return (
    <BaseSettingsLayout>
      <SectionBox title={SYSTEM_INFORMATION_CRUD_CONFIG.TEXT_LANG.TITLE}>
        <ViewStateMachine
          loading={systemVersions.isLoading}
          error={systemVersions.error}
          loader={
            <>
              {Array.from({ length: 4 }, (_, k) => k).map((key) => (
                <Fragment key={key}>
                  <BaseSkeleton height="18px" width="100px" bottom={8} />
                  <BaseSkeleton height="20px" bottom={16} />
                </Fragment>
              ))}
            </>
          }
        >
          {typescriptSafeObjectDotEntries(systemVersions.data).map(
            ([label, value]) => (
              <Fragment key={label}>
                <Typo.XS $weight="bold">{label}</Typo.XS>
                <Typo.SM>{value}</Typo.SM>
                <Spacer />
              </Fragment>
            )
          )}
        </ViewStateMachine>
      </SectionBox>
    </BaseSettingsLayout>
  );
}
