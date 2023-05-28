import {
  dataNotFoundMessage,
  makeDeleteRequest,
  makePatchRequest,
  makePostRequest,
  useApi,
  useApiMutateOptitmisticOptions,
  useWaitForResponseMutationOptions,
} from "@hadmean/protozoa";
import { isRouterParamEnabled } from "frontend/hooks";
import { NAVIGATION_LINKS } from "frontend/lib/routing/links";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { ICreateUserForm } from "shared/form-schemas/users/create";
import { IResetPasswordForm } from "shared/form-schemas/users/reset-password";
import { IAccountProfile } from "shared/types/user";
import { deleteByKey } from "frontend/lib/mutation/helpers";
import { MAKE_CRUD_CONFIG } from "frontend/lib/makeCrudConfig";
import { useUsernameFromRouteParam } from "./hooks";

export const ADMIN_USERS_CRUD_CONFIG = MAKE_CRUD_CONFIG({
  path: "/api/account",
  plural: "Users",
  singular: "User",
});

export function useUserDetails(username: string) {
  return useApi<IAccountProfile>(
    ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.DETAILS(username),
    {
      enabled: isRouterParamEnabled(username),
      errorMessage: dataNotFoundMessage(
        ADMIN_USERS_CRUD_CONFIG.TEXT_LANG.NOT_FOUND
      ),
    }
  );
}

export function useUserDeletionMutation() {
  const router = useRouter();
  const apiMutateOptions = useApiMutateOptitmisticOptions<
    IAccountProfile[],
    string
  >({
    dataQueryPath: ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.LIST,
    onSuccessActionWithFormData: () => {
      router.replace(NAVIGATION_LINKS.USERS.LIST);
    },
    onMutate: deleteByKey("username"),
    successMessage: ADMIN_USERS_CRUD_CONFIG.MUTATION_LANG.DELETE,
  });

  return useMutation(
    async (username: string) =>
      await makeDeleteRequest(
        ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.DELETE(username)
      ),
    apiMutateOptions
  );
}

export function useUpdateUserMutation() {
  const username = useUsernameFromRouteParam();
  const apiMutateOptions = useWaitForResponseMutationOptions<void>({
    endpoints: [
      ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.LIST,
      ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.DETAILS(username),
    ],
    successMessage: ADMIN_USERS_CRUD_CONFIG.MUTATION_LANG.EDIT,
  });

  return useMutation(
    async (data: Partial<IAccountProfile>) =>
      await makePatchRequest(
        ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.UPDATE(username),
        data
      ),
    apiMutateOptions
  );
}

export function useResetUserPasswordMutation() {
  const username = useUsernameFromRouteParam();
  const apiMutateOptions = useWaitForResponseMutationOptions<void>({
    endpoints: [],
    successMessage: "Password Reset Successfully",
  });

  return useMutation(
    async (data: IResetPasswordForm) =>
      await makePatchRequest(
        ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.CUSTOM(username, "reset-password"),
        data
      ),
    apiMutateOptions
  );
}

export function useCreateUserMutation() {
  const router = useRouter();
  const apiMutateOptions = useWaitForResponseMutationOptions<ICreateUserForm>({
    endpoints: [ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.LIST],
    smartSuccessMessage: ({ username }) => ({
      message: ADMIN_USERS_CRUD_CONFIG.MUTATION_LANG.CREATE,
      action: {
        label: ADMIN_USERS_CRUD_CONFIG.MUTATION_LANG.VIEW_DETAILS,
        action: () => router.push(NAVIGATION_LINKS.USERS.DETAILS(username)),
      },
    }),
  });

  return useMutation(async (data: ICreateUserForm) => {
    await makePostRequest(ADMIN_USERS_CRUD_CONFIG.ENDPOINTS.CREATE, data);
    return data;
  }, apiMutateOptions);
}
