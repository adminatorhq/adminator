import { SoftButton } from "frontend/design-system/components/Button/SoftButton";
import { Stack } from "frontend/design-system/primitives/Stack";
import { Typo } from "frontend/design-system/primitives/Typo";
import { DropDownMenu } from "frontend/design-system/components/DropdownMenu";
import { SortableKnob } from "react-easy-sort";
import { GrabIcon } from "frontend/design-system/Icons/Grab";
import { ActionButtons } from "frontend/design-system/components/Button/ActionButtons";
import { DELETE_BUTTON_PROPS } from "frontend/design-system/components/Button/constants";
import { msg } from "@lingui/macro";
import { DASHBOARD_WIDGETS_CRUD_CONFIG } from "frontend/views/Dashboard/constants";
import { DASHBOARD_RELATIVE_DAYS } from "./constants";
import { IWidgetSettingProps } from "./types";
import { useDashboardWidgetRelativeDateStore } from "../../../relativeTime.store";

interface IProps {
  setting?: IWidgetSettingProps;
  title: string;
  widgetId: string;
  link?: string;
  isPreview?: boolean;
  hasRelativeDate: boolean;
}

export function WidgetHeader({
  title,
  setting,
  link,
  widgetId,
  isPreview,
  hasRelativeDate,
}: IProps) {
  const [setWidgetRelativeDate] = useDashboardWidgetRelativeDateStore(
    (store) => [store.setWidgetRelativeDate]
  );

  return (
    <Stack $justify="space-between" $align="flex-start">
      <Stack>
        {setting && (
          <SortableKnob>
            <GrabIcon width={18} />
          </SortableKnob>
        )}
        <Typo.MD $ellipsis>{title}</Typo.MD>
      </Stack>
      {setting ? (
        <ActionButtons
          justIcons
          actionButtons={[
            {
              id: "edit",
              action: setting.setId,
              label: DASHBOARD_WIDGETS_CRUD_CONFIG.TEXT_LANG.EDIT,
              systemIcon: "Edit",
            },
            {
              ...DELETE_BUTTON_PROPS({
                action: setting.delete,
                label: DASHBOARD_WIDGETS_CRUD_CONFIG.TEXT_LANG.DELETE,
                isMakingRequest: false,
              }),
            },
          ]}
        />
      ) : (
        <Stack $width="auto">
          {hasRelativeDate && !isPreview && (
            <DropDownMenu
              ariaLabel={`Toggle ${title} Menu`}
              menuItems={DASHBOARD_RELATIVE_DAYS.map(({ label, value }) => ({
                id: value,
                label,
                systemIcon: null,
                action: () => {
                  setWidgetRelativeDate({
                    widgetId,
                    currentRelativeDay: value,
                  });
                },
              }))}
            />
          )}
          {link && (
            <SoftButton
              action={link}
              label={msg`View`}
              systemIcon="Right"
              disabled={isPreview}
              justIcon
            />
          )}
        </Stack>
      )}
    </Stack>
  );
}
