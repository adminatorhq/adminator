import { useAuthenticatedUserBag } from "frontend/hooks/auth/user.store";
import { useSetPageDetails } from "frontend/lib/routing/usePageDetails";
import { META_USER_PERMISSIONS } from "shared/constants/user";
import {
  IUpdateProfileForm,
  UPDATE_PROFILE_FORM_SCHEMA,
} from "shared/form-schemas/profile/update";
import { LANG_DOMAINS } from "frontend/lib/crud-config/lang-domains";
import { useDomainMessages } from "frontend/lib/crud-config";
import { SchemaForm } from "@/components/app/form/schema";
import { ViewStateMachine } from "@/components/app/view-state-machine";
import {
  FormSkeleton,
  FormSkeletonSchema,
} from "@/components/app/skeleton/form";
import { SectionBox } from "@/components/app/section-box";
import { useUpdateProfileMutation } from "../account.store";
import { ACCOUNT_VIEW_KEY } from "../constants";
import { BaseAccountLayout } from "../_Base";

export function AccountProfile() {
  const authenticatedUserBag = useAuthenticatedUserBag();
  const updateProfileMutation = useUpdateProfileMutation();
  const domainMessages = useDomainMessages(LANG_DOMAINS.ACCOUNT.PROFILE);

  useSetPageDetails({
    pageTitle: domainMessages.TEXT_LANG.EDIT,
    viewKey: ACCOUNT_VIEW_KEY,
    permission: META_USER_PERMISSIONS.NO_PERMISSION_REQUIRED,
  });

  return (
    <BaseAccountLayout>
      <SectionBox title={domainMessages.TEXT_LANG.EDIT}>
        <ViewStateMachine
          loading={authenticatedUserBag.isLoading}
          error={authenticatedUserBag.error}
          loader={<FormSkeleton schema={[FormSkeletonSchema.Input]} />}
        >
          <SchemaForm<IUpdateProfileForm>
            onSubmit={updateProfileMutation.mutateAsync}
            initialValues={authenticatedUserBag.data}
            buttonText={domainMessages.FORM_LANG.UPSERT}
            fields={UPDATE_PROFILE_FORM_SCHEMA}
            systemIcon="Save"
          />
        </ViewStateMachine>
      </SectionBox>
    </BaseAccountLayout>
  );
}
