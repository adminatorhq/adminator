import { WidgetRoot } from "frontend/views/Dashboard/styles";
import { ReactElement, forwardRef } from "react";
import {
  IWidgetConfig,
  WIDGET_SCRIPT_RELATIVE_TIME_MARKER,
} from "shared/types/dashboard";
import { ISharedWidgetConfig } from "shared/types/dashboard/base";
import { DataStateKeys } from "frontend/lib/data/types";
import { msg } from "@lingui/macro";
import { ViewStateMachine } from "@/components/app/view-state-machine";
import { WidgetHeader } from "../WidgetHeader";
import { IWidgetSettingProps } from "../WidgetHeader/types";
import { WIDGET_CONFIG } from "../../constants";
import { useWidgetNavigationLink } from "../../../Widget/useWidgetNavigationLink";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { EmptyWrapper } from "@/components/app/empty-wrapper";
import { RenderCode } from "@/components/app/render-code";

interface IProps {
  config: ISharedWidgetConfig;
  setting?: IWidgetSettingProps;
  type: IWidgetConfig["_type"];
  isPreview: boolean;
  data: DataStateKeys<unknown>;
  Component: ({
    data,
    config,
  }: {
    data: unknown;
    config: ISharedWidgetConfig;
  }) => ReactElement;
}

export const WidgetFrame = forwardRef<HTMLDivElement, IProps>(
  ({ setting, config, type, data, isPreview, Component }, ref) => {
    const navigationLink = useWidgetNavigationLink(
      config.entity,
      config.queryId
    );

    const {
      height: configHeight,
      span: configSpan,
      LoadingComponent,
      requiredInterface,
      schema,
      exampleValidData,
      isDataEmpty,
    } = WIDGET_CONFIG[type];

    const height = config.height || configHeight;

    let schemaError: object | null = null;

    if (!data.isLoading || !data.error) {
      const response = schema?.safeParse(data.data);
      if (response.success === false) {
        schemaError = {
          data: data.data,
          exampleValidData,
          requiredInterface,
          ...response.error,
          name: undefined,
        };
      }
    }

    const hasRelativeDate = config.script?.includes(
      `$.${WIDGET_SCRIPT_RELATIVE_TIME_MARKER}`
    );

    return (
      <WidgetRoot
        ref={ref}
        aria-label={`${config.title} Widget`}
        span={config.span || configSpan}
        height={height}
      >
        <Card className="h-full">
          <div className="p-4">
            <WidgetHeader
              setting={setting}
              title={config.title}
              widgetId={config.id}
              link={navigationLink}
              isPreview={isPreview}
              hasRelativeDate={hasRelativeDate}
            />
            <div
              className={cn("mt-3", {
                "h-full overflow-y-auto": schemaError,
              })}
            >
              <ViewStateMachine
                error={data.error}
                loading={data.isLoading}
                loader={<LoadingComponent height={height} />}
              >
                {/* eslint-disable-next-line no-nested-ternary */}
                {schemaError ? (
                  <RenderCode input={schemaError} />
                ) : isDataEmpty(data.data) ? (
                  <EmptyWrapper text={msg`No Data`} />
                ) : (
                  <Component data={data.data} config={config} />
                )}
              </ViewStateMachine>
            </div>
          </div>
        </Card>
      </WidgetRoot>
    );
  }
);
