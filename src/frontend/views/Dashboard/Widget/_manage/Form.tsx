import { useEntityConfiguration } from "frontend/hooks/configuration/configuration.store";
import { Field, Form } from "react-final-form";
import { ISummaryWidgetConfig, IWidgetConfig } from "shared/types/dashboard";
import { ROYGBIV, ROYGBIV_CONFIG } from "shared/constants/colors";
import { IconInputField } from "frontend/components/IconInputField";
import { useMutation } from "@tanstack/react-query";
import { ViewStateMachine } from "frontend/components/ViewStateMachine";
import { useEffect, useState } from "react";
import { WidgetScriptDocumentation } from "frontend/docs/scripts/widget-scripts";
import { required } from "frontend/lib/validations";
import { resetFormValues } from "frontend/lib/form/utils";
import { ApiRequest } from "frontend/lib/data/makeRequest";
import { IFormProps } from "frontend/lib/form/types";
import { ILabelValue } from "shared/types/options";
import { FormInput } from "frontend/design-system/components/Form/FormInput";
import { FormSelect } from "frontend/design-system/components/Form/FormSelect";
import { BaseSkeleton } from "frontend/design-system/components/Skeleton/Base";
import { Tabs } from "frontend/design-system/components/Tabs";
import { RenderCode } from "frontend/design-system/components/RenderCode";
import { Spacer } from "frontend/design-system/primitives/Spacer";
import { SoftButton } from "frontend/design-system/components/Button/SoftButton";
import { Typo } from "frontend/design-system/primitives/Typo";
import { Stack } from "frontend/design-system/primitives/Stack";
import { FormButton } from "frontend/design-system/components/Button/FormButton";
import { FormCodeEditor } from "frontend/design-system/components/Form/FormCodeEditor";
import { loadedDataState } from "frontend/lib/data/constants/loadedDataState";
import { useDocumentationActionButton } from "frontend/docs/constants";
import { FormGrid } from "frontend/components/SchemaForm/form-grid";
import { GRID_SPAN_OPTIONS } from "frontend/design-system/constants/grid";
import { msg } from "@lingui/macro";
import {
  typescriptSafeObjectDotEntries,
  typescriptSafeObjectDotKeys,
} from "shared/lib/objects";
import { i18nNoop, transformLabelValueToSelectData } from "translations/fake";
import { MessageDescriptor } from "@lingui/core";
import { DASHBOARD_WIDGETS_CRUD_CONFIG } from "../../constants";
import { DashboardWidgetPresentation } from "../Presentation";
import { WIDGET_CONFIG } from "../constants";
import { PortalFormFields, PortalFormSchema } from "./portal";
import { WidgetFormField } from "./types";
import { DASHBOARD_WIDGET_HEIGHTS } from "./constants";

const DashboardTypesOptions: {
  label: MessageDescriptor;
  value: IWidgetConfig["_type"];
}[] = typescriptSafeObjectDotEntries(WIDGET_CONFIG).map(
  ([value, { label }]) => ({
    label,
    value: value as IWidgetConfig["_type"],
  })
);

const FormSchema: Partial<Record<IWidgetConfig["_type"], WidgetFormField[]>> = {
  "summary-card": ["color", "icon"],
  table: [],
  ...PortalFormSchema,
};

export function useRunWidgetScript() {
  return useMutation({
    mutationFn: async (script: string) =>
      await ApiRequest.POST(`/api/dashboards/script`, { script }),
  });
}

export function DashboardWidgetForm({
  onSubmit,
  initialValues,
  entities,
  action,
}: IFormProps<IWidgetConfig> & {
  entities: ILabelValue[];
  action: "create" | "edit";
}) {
  const [currentTab, setCurrentTab] = useState("");
  const runWidgetScript = useRunWidgetScript();

  const documentationActionButton = useDocumentationActionButton(
    msg`Widget Script`
  );

  useEffect(() => {
    if (initialValues.script) {
      runWidgetScript.mutate(initialValues.script);
    }
  }, [initialValues]);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, pristine, values, submitting }) => {
          const tableViews = useEntityConfiguration(
            "table_views",
            values.entity
          );

          const formFields = FormSchema[values._type] || [];

          return (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e)?.then(() => {
                  try {
                    resetFormValues<Record<string, unknown>>(
                      action === "create",
                      values as unknown as Record<string, unknown>,
                      form as any,
                      initialValues
                    );
                  } catch (error) {
                    // Do nothing
                  }
                });
              }}
            >
              <FormGrid.Root>
                <FormGrid.Item $span="9">
                  <Field name="title" validate={required} validateFields={[]}>
                    {({ input, meta }) => (
                      <FormInput
                        required
                        label={msg`Title`}
                        meta={meta}
                        input={input}
                      />
                    )}
                  </Field>
                </FormGrid.Item>
                <FormGrid.Item $span="3">
                  <Field name="_type" validate={required} validateFields={[]}>
                    {({ input, meta }) => (
                      <FormSelect
                        required
                        label={msg`Type`}
                        disabledOptions={[]}
                        selectData={DashboardTypesOptions}
                        meta={meta}
                        input={input}
                      />
                    )}
                  </Field>
                </FormGrid.Item>
                <FormGrid.Item>
                  <Field name="entity" validateFields={[]}>
                    {({ input, meta }) => (
                      <FormSelect
                        label={msg`Link Entity`}
                        description="Select the entity the user should be directed to when clicking on the widget"
                        disabledOptions={[]}
                        selectData={transformLabelValueToSelectData(entities)}
                        meta={meta}
                        input={input}
                      />
                    )}
                  </Field>
                </FormGrid.Item>
                {values.entity && (tableViews.data || []).length > 0 && (
                  <FormGrid.Item>
                    <Field name="queryId" validateFields={[]}>
                      {({ input, meta }) => (
                        <FormSelect
                          label={msg`Entity Tab`}
                          description="Select the most appropriate tab of the entity above that the user should be direct to"
                          disabledOptions={[]}
                          selectData={(tableViews.data || []).map(
                            ({ id, title }) => ({
                              label: i18nNoop(title),
                              value: id,
                            })
                          )}
                          meta={meta}
                          input={input}
                        />
                      )}
                    </Field>
                  </FormGrid.Item>
                )}

                <PortalFormFields formFields={formFields} />
                <FormGrid.Item>
                  {formFields.includes("color") && (
                    <Field name="color" validate={required} validateFields={[]}>
                      {({ input, meta }) => (
                        <FormSelect
                          label={msg`Color`}
                          required
                          selectData={typescriptSafeObjectDotKeys(ROYGBIV).map(
                            (value) => ({
                              value,
                              label: ROYGBIV_CONFIG[value].label,
                            })
                          )}
                          meta={meta}
                          input={input}
                        />
                      )}
                    </Field>
                  )}
                </FormGrid.Item>
                <FormGrid.Item>
                  {formFields.includes("icon") && (
                    <IconInputField
                      value={(values as ISummaryWidgetConfig)?.icon}
                    />
                  )}
                </FormGrid.Item>
                <FormGrid.Item $span="6">
                  <Field name="span" validateFields={[]}>
                    {({ input, meta }) => (
                      <FormSelect
                        label={msg`Width`}
                        selectData={GRID_SPAN_OPTIONS}
                        meta={meta}
                        input={input}
                      />
                    )}
                  </Field>
                </FormGrid.Item>
                <FormGrid.Item $span="6">
                  <Field name="height" validateFields={[]}>
                    {({ input, meta }) => (
                      <FormSelect
                        label={msg`Height`}
                        selectData={DASHBOARD_WIDGET_HEIGHTS}
                        meta={meta}
                        input={input}
                      />
                    )}
                  </Field>
                </FormGrid.Item>
                {values._type && (
                  <FormGrid.Item>
                    <Field
                      name="script"
                      validate={required}
                      validateFields={[]}
                    >
                      {({ input, meta }) => (
                        <FormCodeEditor
                          required
                          language="javascript"
                          label={msg`Script`}
                          meta={meta}
                          input={input}
                          rightActions={[documentationActionButton]}
                        />
                      )}
                    </Field>

                    <ViewStateMachine
                      error={runWidgetScript.error}
                      loading={runWidgetScript.isPending}
                      loader={
                        <BaseSkeleton height={`${values.height || 250}px`} />
                      }
                    >
                      {!runWidgetScript.isIdle && (
                        <Tabs
                          currentTab={currentTab}
                          onChange={setCurrentTab}
                          contents={[
                            {
                              label: msg`Preview`,
                              id: "preview",
                              content: (
                                <DashboardWidgetPresentation
                                  config={values}
                                  isPreview
                                  data={loadedDataState(runWidgetScript.data)}
                                />
                              ),
                            },
                            {
                              label: msg`Data`,
                              id: "data",
                              content: (
                                <RenderCode input={runWidgetScript.data} />
                              ),
                            },
                          ]}
                        />
                      )}
                    </ViewStateMachine>
                  </FormGrid.Item>
                )}
                <FormGrid.Item>
                  {process.env.NEXT_PUBLIC_IS_DEMO ? (
                    <Stack $justify="center">
                      <Typo.SM>
                        <Spacer />
                        You will be able to save this form on your own
                        installation
                      </Typo.SM>
                    </Stack>
                  ) : (
                    <>
                      <Spacer />
                      <Stack $justify="end" $width="auto">
                        {values._type && (
                          <SoftButton
                            action={() => {
                              runWidgetScript.mutate(values.script);
                            }}
                            disabled={!values.script}
                            isMakingRequest={runWidgetScript.isPending}
                            systemIcon="Eye"
                            size={null}
                            label={msg`Test Widget Script`}
                          />
                        )}

                        <FormButton
                          text={
                            action === "create"
                              ? DASHBOARD_WIDGETS_CRUD_CONFIG.FORM_LANG.CREATE
                              : DASHBOARD_WIDGETS_CRUD_CONFIG.FORM_LANG.UPDATE
                          }
                          systemIcon={action === "create" ? "Plus" : "Save"}
                          isMakingRequest={submitting}
                          disabled={pristine}
                        />
                      </Stack>
                    </>
                  )}
                </FormGrid.Item>
              </FormGrid.Root>
            </form>
          );
        }}
      />
      <WidgetScriptDocumentation />
    </>
  );
}
