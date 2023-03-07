import React from "react";
import { AuthLayout } from "frontend/_layouts/guest";
import { useSetupCheck } from "frontend/hooks/setup/setup.store";
import { FormSkeleton, FormSkeletonSchema } from "@hadmean/chromista";
import { NAVIGATION_LINKS } from "frontend/lib/routing";
import { ViewStateMachine } from "frontend/components/ViewStateMachine";
import { UserSetupForm } from "./Form";
import { useSetupUserMutation } from "../setup.store";

export function UserSetup() {
  const setupUserMutation = useSetupUserMutation();

  const isChecking = useSetupCheck([
    {
      key: "hasDbCredentials",
      value: false,
      url: NAVIGATION_LINKS.SETUP.CREDENTIALS,
    },
    {
      key: "hasUsers",
      value: true,
      url: NAVIGATION_LINKS.DASHBOARD,
    },
  ]);

  return (
    <AuthLayout
      title="Account Setup"
      subTitle="Create first super admin account"
    >
      <ViewStateMachine
        loading={isChecking}
        error={false}
        loader={
          <FormSkeleton
            schema={[
              FormSkeletonSchema.Input,
              FormSkeletonSchema.Input,
              FormSkeletonSchema.Input,
            ]}
          />
        }
      >
        <UserSetupForm onSubmit={setupUserMutation.mutateAsync} />
      </ViewStateMachine>
    </AuthLayout>
  );
}
