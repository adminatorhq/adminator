import { ErrorAlert, SectionBox, SortList, Tabs } from "@hadmean/chromista";
import { useRouteParam } from "@hadmean/protozoa";
import { useChangeRouterParam, useSetPageDetails } from "frontend/lib/routing";
import { LINK_TO_DOCS } from "frontend/views/constants";
import { USER_PERMISSIONS } from "shared/types";
import {
  useAppConfiguration,
  useUpsertConfigurationMutation,
} from "../../../hooks/configuration/configuration.store";
import { useEntityDictionPlurals } from "../../../hooks/entity/entity.queries";
import {
  ENTITIES_MENU_ENDPOINT,
  useEntitiesList,
  useEntitiesMenuItems,
} from "../../../hooks/entity/entity.store";
import { SETTINGS_VIEW_KEY } from "../constants";
import { BaseSettingsLayout } from "../_Base";
import { EntitiesSelection } from "./Selection";

export function EntitiesSettings() {
  const entitiesList = useEntitiesList();
  const tabFromUrl = useRouteParam("tab");

  useSetPageDetails({
    pageTitle: "Entities Settings",
    viewKey: SETTINGS_VIEW_KEY,
    permission: USER_PERMISSIONS.CAN_CONFIGURE_APP,
  });

  const changeTabParam = useChangeRouterParam("tab");

  const entitiesToHide = useAppConfiguration<string[]>("disabled_entities");
  const entitiesMenuItems = useEntitiesMenuItems();

  const upsertHideFromMenuMutation = useUpsertConfigurationMutation(
    "disabled_entities",
    "",
    { otherEndpoints: [ENTITIES_MENU_ENDPOINT] }
  );

  const upsertEntitiesOrderMutation = useUpsertConfigurationMutation(
    "entities_order",
    "",
    {
      otherEndpoints: [ENTITIES_MENU_ENDPOINT],
    }
  );

  const entitiesDictionPlurals = useEntityDictionPlurals(
    entitiesList.data || [],
    "value"
  );

  return (
    <BaseSettingsLayout>
      <ErrorAlert message={entitiesList.error || entitiesToHide.error} />
      <SectionBox
        title="Entities Settings"
        iconButtons={[
          {
            action: LINK_TO_DOCS("app-configuration/entities"),
            icon: "help",
            label: "Entities Settings Documentation",
          },
        ]}
      >
        <Tabs
          currentTab={tabFromUrl}
          onChange={changeTabParam}
          contents={[
            {
              content: (
                <EntitiesSelection
                  isLoading={entitiesList.isLoading || entitiesToHide.isLoading}
                  allList={(entitiesList.data || []).map(({ label }) => label)}
                  getEntityFieldLabels={entitiesDictionPlurals}
                  hiddenList={entitiesToHide.data || []}
                  onSubmit={async (data) => {
                    await upsertHideFromMenuMutation.mutateAsync(data);
                  }}
                />
              ),
              label: "Selection",
            },
            {
              content: (
                <SortList
                  data={entitiesMenuItems}
                  onSave={async (data) => {
                    await upsertEntitiesOrderMutation.mutateAsync(data);
                  }}
                />
              ),
              label: "Order",
            },
          ]}
        />
      </SectionBox>
    </BaseSettingsLayout>
  );
}