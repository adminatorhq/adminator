import {
  FormButton,
  RenderList,
  SectionListItem,
  Stack,
  Spacer,
  ListSkeleton,
} from "@hadmean/chromista";
import { ViewStateMachine } from "frontend/components/ViewStateMachine";
import { useEffect, useState } from "react";
import { IEntityField } from "shared/types/db";
import { useStringSelections } from "../../../lib/selection";

interface IProps {
  columns?: {
    fields: IEntityField[];
    submit?: (columnsSelection: string[]) => Promise<void>;
    hidden: string[];
    getEntityFieldLabels?: (fieldName: string) => string;
  };
  toggling: {
    onToggle?: () => void;
    enabled: boolean;
    label: string;
  };
  isLoading: boolean;
  error: unknown;
}

export function SelectionTab({ columns, isLoading, toggling, error }: IProps) {
  const { toggleSelection, currentPageSelection, selectMutiple } =
    useStringSelections();

  const [touched, setTouched] = useState(false);

  const [isMakingRequest, setIsMakingRequest] = useState(false);

  useEffect(() => {
    selectMutiple(columns?.hidden || []);
  }, [columns?.hidden]);

  const enableDisableLabel = toggling?.enabled
    ? `Disable ${toggling.label} Functionality`
    : `Enable ${toggling?.label} Functionality`;

  return (
    <ViewStateMachine
      error={error}
      loading={isLoading}
      loader={<ListSkeleton count={10} />}
    >
      <Stack justify="space-between" align="flex-start">
        {toggling && toggling.onToggle && (
          <FormButton
            isMakingRequest={false}
            size="sm"
            isInverse={toggling.enabled}
            text={enableDisableLabel}
            onClick={() => toggling.onToggle()}
          />
        )}
      </Stack>
      <Spacer size="xxl" />
      {columns && (
        <>
          <RenderList
            items={columns.fields}
            singular="Field"
            getLabel={columns.getEntityFieldLabels}
            render={(menuItem) => {
              const isHidden = currentPageSelection.includes(menuItem.name);

              return (
                <SectionListItem
                  label={menuItem.label}
                  key={menuItem.name}
                  disabled={!toggling.enabled}
                  subtle={menuItem.isId}
                  toggle={
                    toggling.enabled && !menuItem.isId
                      ? {
                          selected: !isHidden,
                          onChange: () => {
                            setTouched(true);
                            toggleSelection(menuItem.name);
                          },
                        }
                      : undefined
                  }
                />
              );
            }}
          />

          <Spacer size="xxl" />
          <FormButton
            onClick={async () => {
              setIsMakingRequest(true);
              await columns.submit(currentPageSelection);
              setIsMakingRequest(false);
              setTouched(false);
            }}
            text="Save Changes"
            disabled={!touched}
            isMakingRequest={isMakingRequest}
          />
        </>
      )}
    </ViewStateMachine>
  );
}
