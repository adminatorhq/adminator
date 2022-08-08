import React, { useEffect, useState } from "react";
import {
  AuthService,
  makePostRequest,
  SLUG_LOADING_VALUE,
  ToastService,
  useRouteParam,
} from "@gothicgeeks/shared";
import { useMutation } from "react-query";
import { AuthLayout } from "frontend/_layouts/guest";
import { ISuccessfullAuthenticationResponse } from "shared/types";
import { useRouter } from "next/router";
import { NAVIGATION_LINKS } from "frontend/lib/routing";
import { useSetupCheck } from "frontend/hooks/setup/setup.store";
import { ComponentIsLoading } from "@gothicgeeks/design-system";
import { ISignInForm } from "shared/form-schemas/auth/signin";
import { SignInForm } from "./Form";

function useSignInMutation() {
  const nextRoute = useRouteParam("next");
  const router = useRouter();
  return useMutation(
    async (values: ISignInForm) =>
      await makePostRequest(`/api/auth/signin`, values),
    {
      onSuccess: (data: ISuccessfullAuthenticationResponse, formData) => {
        AuthService.setAuthToken(data.token, formData.rememberMe);
        router.push(
          nextRoute === SLUG_LOADING_VALUE || !nextRoute
            ? NAVIGATION_LINKS.DASHBOARD
            : nextRoute
        );
      },
      onError: (error: { message: string }) => {
        ToastService.error(error.message);
      },
    }
  );
}

const useGuestCheck = () => {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (AuthService.isAuthenticated()) {
        router.replace(NAVIGATION_LINKS.DASHBOARD);
        return;
      }
      setIsChecking(false);
    }
  }, [typeof window]);

  return isChecking;
};

export function SignIn() {
  const signInMutation = useSignInMutation();
  const guestCheck = useGuestCheck();
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

  if (setupCheck || guestCheck) {
    return <ComponentIsLoading />;
  }

  return (
    <AuthLayout title="Sign In" subTitle="Enter your credentials to continue">
      <SignInForm onSubmit={signInMutation.mutateAsync} />
    </AuthLayout>
  );
}
