import { IntegrationsConfigurationGroup } from "shared/types/integrations";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FEPaginationTable,
  IFETableCell,
  IFETableColumn,
} from "frontend/components/FEPaginationTable";
import {
  IPageDetails,
  useSetCurrentActionItems,
} from "frontend/lib/routing/usePageDetails";
import { UserPermissions } from "shared/constants/user";
import { usePasswordStore } from "frontend/views/integrations/password.store";
import { useUserHasPermission } from "frontend/hooks/auth/user.store";
import { INTEGRATIONS_GROUP_CONFIG } from "shared/config-bag/integrations";
import { VariablesDocumentation } from "frontend/docs/variables";
import { ToastService } from "frontend/lib/toast";
import { useApi } from "frontend/lib/data/useApi";
import { Spacer } from "frontend/design-system/primitives/Spacer";
import { Typo } from "frontend/design-system/primitives/Typo";
import { OffCanvas } from "frontend/design-system/components/OffCanvas";
import {
  PasswordMessage,
  PasswordToReveal,
} from "frontend/views/integrations/Password";
import { IKeyValue } from "shared/types/options";
import { useDocumentationActionButton } from "frontend/docs/constants";
import { ActionButtons } from "frontend/design-system/components/Button/ActionButtons";
import { DELETE_BUTTON_PROPS } from "frontend/design-system/components/Button/constants";
import { msg } from "@lingui/macro";
import {
  INTEGRATIONS_GROUP_ENDPOINT,
  useIntegrationConfigurationDeletionMutation,
  useIntegrationConfigurationUpsertationMutation,
  useRevealedCredentialsList,
} from "./configurations.store";
import { KeyValueForm } from "./Form";
import { INTEGRATIONS_GROUP_CRUD_CONFIG } from "./constants";

const NEW_CONFIG_ITEM = "__new_config_item__";

export function ManageCredentialGroup({
  group,
  currentTab,
}: {
  group: IntegrationsConfigurationGroup;
  currentTab: IntegrationsConfigurationGroup;
}) {
  const dataEndpoint = INTEGRATIONS_GROUP_ENDPOINT(group);
  const upsertConfigurationMutation =
    useIntegrationConfigurationUpsertationMutation(group);
  const deleteConfigurationMutation =
    useIntegrationConfigurationDeletionMutation(group);

  const tableData = useApi<IKeyValue[]>(dataEndpoint, { defaultData: [] });

  const revealedCredentials = useRevealedCredentialsList(group);

  useEffect(() => {
    if (
      revealedCredentials.error &&
      group === IntegrationsConfigurationGroup.Credentials
    ) {
      ToastService.error(revealedCredentials.error);
    }
  }, [revealedCredentials.error]);

  const passwordStore = usePasswordStore();

  const userHasPermission = useUserHasPermission();

  const [currentConfigItem, setCurrentConfigItem] = useState("");

  const closeConfigItem = () => {
    setCurrentConfigItem("");
  };

  const CRUD_CONFIG = INTEGRATIONS_GROUP_CRUD_CONFIG[group].crudConfig;

  const documentationActionButton = useDocumentationActionButton(
    CRUD_CONFIG.TEXT_LANG.TITLE
  );

  const MemoizedAction = useCallback(
    ({ row }: IFETableCell<IKeyValue>) => (
      <ActionButtons
        justIcons
        actionButtons={[
          {
            id: "edit",
            action: () => setCurrentConfigItem(row.original.key),
            label: CRUD_CONFIG.TEXT_LANG.EDIT,
            systemIcon: "Edit",
          },
          {
            ...DELETE_BUTTON_PROPS({
              action: () =>
                deleteConfigurationMutation.mutateAsync(row.original.key),
              label: CRUD_CONFIG.TEXT_LANG.DELETE,
              isMakingRequest: false,
            }),
          },
        ]}
      />
    ),
    [deleteConfigurationMutation.isPending, passwordStore.password]
  );

  const canManageAction = !(
    group === IntegrationsConfigurationGroup.Credentials &&
    !userHasPermission(UserPermissions.CAN_MANAGE_APP_CREDENTIALS)
  );

  const showManageAction =
    canManageAction &&
    (group !== IntegrationsConfigurationGroup.Credentials ||
      (group === IntegrationsConfigurationGroup.Credentials &&
        revealedCredentials.data !== undefined));

  const actionItems:
    | Pick<IPageDetails, "actionItems" | "secondaryActionItems">
    | undefined = useMemo(() => {
    if (group !== currentTab) {
      return undefined;
    }

    return {
      actionItems: showManageAction
        ? [
            {
              id: `add-${showManageAction ? "true" : "false"}`,
              action: () => {
                setCurrentConfigItem(NEW_CONFIG_ITEM);
              },
              systemIcon: "Plus",
              label: CRUD_CONFIG.TEXT_LANG.CREATE,
            },
          ]
        : [],
      secondaryActionItems: [documentationActionButton],
    };
  }, [group, currentTab, canManageAction, showManageAction]);

  useSetCurrentActionItems(actionItems);

  const tableColumns: IFETableColumn<IKeyValue>[] = [
    {
      Header: msg`Key`,
      accessor: "key",
      filter: {
        _type: "string",
        bag: undefined,
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ value }: { value: unknown }) => (
        <span
          dangerouslySetInnerHTML={{
            __html: `{{ ${INTEGRATIONS_GROUP_CONFIG[group].prefix}.${value} }}`,
          }}
        />
      ),
    },
    {
      Header: msg`Value`,
      accessor: "value",
    },
  ];
  if (showManageAction) {
    tableColumns.push({
      Header: msg`Action`,
      disableSortBy: true,
      accessor: "__action__",
      Cell: MemoizedAction,
    });
  }

  return (
    <>
      <section aria-label={`${group} priviledge section`}>
        {group === IntegrationsConfigurationGroup.Credentials &&
          userHasPermission(UserPermissions.CAN_MANAGE_APP_CREDENTIALS) &&
          revealedCredentials.data === undefined && (
            <Spacer>
              <PasswordToReveal
                label="Secrets"
                isLoading={revealedCredentials.isLoading}
              />
            </Spacer>
          )}
        {!canManageAction && tableData.data.length > 0 && (
          <Spacer>
            <Typo.SM $textStyle="italic">
              Your account does not have the permission to view secret values or
              manage them
            </Typo.SM>
          </Spacer>
        )}
      </section>

      <FEPaginationTable
        dataEndpoint={dataEndpoint}
        empty={{
          text: CRUD_CONFIG.TEXT_LANG.EMPTY_LIST,
          createNew: showManageAction
            ? {
                label: CRUD_CONFIG.TEXT_LANG.CREATE,
                action: () => setCurrentConfigItem(NEW_CONFIG_ITEM),
              }
            : undefined,
        }}
        columns={tableColumns}
      />

      <OffCanvas
        title={
          currentConfigItem === NEW_CONFIG_ITEM
            ? CRUD_CONFIG.TEXT_LANG.CREATE
            : CRUD_CONFIG.TEXT_LANG.EDIT
        }
        onClose={closeConfigItem}
        show={!!currentConfigItem}
      >
        {group === IntegrationsConfigurationGroup.Credentials && (
          <>
            <PasswordMessage />
            <Spacer />
          </>
        )}
        <KeyValueForm
          group={group}
          initialValues={tableData.data.find(
            ({ key }) => key === currentConfigItem
          )}
          onSubmit={async (values: { key: string; value: string }) => {
            await upsertConfigurationMutation.mutateAsync(values);
            closeConfigItem();
          }}
        />
      </OffCanvas>
      <VariablesDocumentation />
    </>
  );
}
