import { AUTHENTICATED_ACCOUNT_URL } from "frontend/hooks/auth/user.store";
import { IChangePasswordForm } from "shared/form-schemas/profile/password";
import { IUpdateProfileForm } from "shared/form-schemas/profile/update";
import { ACCOUNT_PROFILE_CRUD_CONFIG } from "frontend/hooks/auth/constants";
import { useWaitForResponseMutationOptions } from "frontend/lib/data/useMutate/useWaitForResponseMutationOptions";
import { ApiRequest } from "frontend/lib/data/makeRequest";
import { msg } from "@lingui/macro";
import { PASSWORD_CRUD_CONFIG } from "./constants";

export function useUpdateProfileMutation() {
  return useWaitForResponseMutationOptions<IUpdateProfileForm>({
    mutationFn: async (data) =>
      await ApiRequest.PATCH(AUTHENTICATED_ACCOUNT_URL, data),
    endpoints: [AUTHENTICATED_ACCOUNT_URL],
    successMessage: ACCOUNT_PROFILE_CRUD_CONFIG.MUTATION_LANG.SAVED,
  });
}

export function useChangePasswordMutation() {
  return useWaitForResponseMutationOptions<IChangePasswordForm>({
    mutationFn: async (data) => {
      return await ApiRequest.PATCH(`/api/account/change-password`, data);
    },
    endpoints: [],
    successMessage: process.env.NEXT_PUBLIC_IS_DEMO
      ? msg`Password will not be changed on demo account`
      : PASSWORD_CRUD_CONFIG.MUTATION_LANG.EDIT,
  });
}
