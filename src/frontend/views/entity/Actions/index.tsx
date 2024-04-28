import { useSetPageDetails } from "frontend/lib/routing/usePageDetails";
import { NAVIGATION_LINKS } from "frontend/lib/routing/links";
import { UserPermissions } from "shared/constants/user";
import { useEntitySlug } from "frontend/hooks/entity/entity.config";
import { FormIntegrationsDocumentation } from "frontend/docs/form-integrations";
import { SectionBox } from "frontend/design-system/components/Section/SectionBox";
import { useDocumentationActionButton } from "frontend/docs/constants";
import { msg } from "@lingui/macro";
import { BaseEntitySettingsLayout } from "../_Base";
import { ENTITY_CONFIGURATION_VIEW } from "../constants";
import { FormActions } from "./Base";
import { FORM_ACTION_CRUD_CONFIG } from "./constants";

export function EntityFormActionsSettings() {
  const entity = useEntitySlug();

  useSetPageDetails({
    pageTitle: FORM_ACTION_CRUD_CONFIG.TEXT_LANG.TITLE,
    viewKey: ENTITY_CONFIGURATION_VIEW,
    permission: UserPermissions.CAN_CONFIGURE_APP,
  });

  const documentationActionButton = useDocumentationActionButton(
    FORM_ACTION_CRUD_CONFIG.TEXT_LANG.TITLE
  );

  return (
    <BaseEntitySettingsLayout>
      <SectionBox
        title={FORM_ACTION_CRUD_CONFIG.TEXT_LANG.TITLE}
        actionButtons={[
          {
            id: "manage",
            action: NAVIGATION_LINKS.SETTINGS.VARIABLES,
            systemIcon: "Settings",
            label: msg`Manage Variables`,
          },
          documentationActionButton,
        ]}
      >
        <FormActions entity={entity} />
      </SectionBox>
      <FormIntegrationsDocumentation />
    </BaseEntitySettingsLayout>
  );
}
