import { useMutation } from "@tanstack/react-query";
import { AuthLayout } from "frontend/_layouts/guest";
import { ISuccessfullAuthenticationResponse } from "shared/types/auth/portal";
import { useSetupCheck } from "frontend/hooks/setup/setup.store";
import {
  AUTH_SIGNIN_FORM_SCHEMA,
  ISignInForm,
} from "shared/form-schemas/auth/signin";
import { useAuthenticateUser } from "frontend/hooks/auth/useAuthenticateUser";
import { ApiRequest } from "frontend/lib/data/makeRequest";
import { ToastService } from "frontend/lib/toast";
import { NAVIGATION_LINKS } from "frontend/lib/routing/links";
import { ComponentIsLoading } from "frontend/design-system/components/ComponentIsLoading";
import { Typo } from "frontend/design-system/primitives/Typo";
import { SchemaForm } from "frontend/components/SchemaForm";
import { useGuestCheck } from "frontend/hooks/auth/useGuestCheck";
import { msg, t } from "@lingui/macro";
import { CustomNextPage } from "frontend/_layouts/types";
import { useHandleNoTokenAuthResponse } from "./portal";

function useSignInMutation() {
  const authenticateUser = useAuthenticateUser();
  const handleNoTokenAuthResponse = useHandleNoTokenAuthResponse();
  return useMutation({
    mutationFn: async (values: ISignInForm) =>
      await ApiRequest.POST(`/api/auth/signin`, values),
    onSuccess: (data: ISuccessfullAuthenticationResponse, formData) => {
      if (data.token) {
        authenticateUser(data.token, formData.rememberMe);
        return;
      }
      handleNoTokenAuthResponse(data, formData);
    },
    onError: (error: { message: string }) => {
      ToastService.error(error.message);
    },
  });
}

// eslint-disable-next-line react/function-component-definition
export const SignIn: CustomNextPage = () => {
  const render = useGuestCheck();
  const signInMutation = useSignInMutation();

  const setupCheck = useSetupCheck([
    {
      key: "hasDbCredentials",
      value: false,
      url: NAVIGATION_LINKS.SETUP.CREDENTIALS,
    },
    {
      key: "hasUsers",
      value: false,
      url: NAVIGATION_LINKS.SETUP.USER,
    },
  ]);

  if (setupCheck || !render) {
    return <ComponentIsLoading />;
  }

  return (
    <AuthLayout
      title={t`Sign In`}
      subTitle={t`Enter your credentials to continue`}
    >
      {process.env.NEXT_PUBLIC_IS_DEMO && (
        <div aria-label="Demo App Credentials">
          <Typo.XS>
            Username is <b>root</b>
          </Typo.XS>
          <Typo.XS>
            Password is <b>password</b>
          </Typo.XS>
        </div>
      )}
      <SchemaForm<ISignInForm>
        onSubmit={signInMutation.mutateAsync}
        initialValues={{ rememberMe: true }}
        buttonText={(isSubmitting) =>
          isSubmitting ? msg`Signing In` : msg`Sign In`
        }
        systemIcon="LogIn"
        fields={AUTH_SIGNIN_FORM_SCHEMA}
      />
    </AuthLayout>
  );
};
