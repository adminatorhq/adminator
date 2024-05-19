import { NAVIGATION_LINKS } from "frontend/lib/routing/links";
import { useRouter } from "next/router";
import { IAuthenticatedUserBag } from "shared/types/user";
import { canRoleDoThisSync } from "shared/logic/permissions";
import { useCallback } from "react";
import { useApi } from "frontend/lib/data/useApi";
import { ToastService } from "frontend/lib/toast";
import { DataStates } from "frontend/lib/data/types";
import { useDomainMessages } from "frontend/lib/crud-config";
import { LANG_DOMAINS } from "frontend/lib/crud-config/lang-domains";
import { useIsGranularCheck } from "./portal";
import { useIsUserAutenticated } from "./auth.actions";

export const AUTHENTICATED_ACCOUNT_URL = "/api/account/mine";

export function useAuthenticatedUserBag() {
  const isUserAuthenticated = useIsUserAutenticated();
  const domainMessages = useDomainMessages(LANG_DOMAINS.ACCOUNT.PROFILE);
  return useApi<IAuthenticatedUserBag>(AUTHENTICATED_ACCOUNT_URL, {
    errorMessage: domainMessages.TEXT_LANG.NOT_FOUND,
    enabled: isUserAuthenticated,
    persist: true,
    defaultData: {
      name: "",
      permissions: [],
      role: "",
      username: "",
    },
  });
}

const doPermissionCheck = (
  requiredPermission: string,
  isLoadingUser: boolean,
  userData: IAuthenticatedUserBag,
  isGranularCheck: boolean
) => {
  if (isLoadingUser || !userData) {
    return DataStates.Loading;
  }

  const { role, permissions } = userData;

  return canRoleDoThisSync(
    role,
    requiredPermission,
    permissions,
    isGranularCheck
  );
};

export function useUserHasPermission(): (permision: string) => boolean {
  const userProfile = useAuthenticatedUserBag();
  const isGranularCheck = useIsGranularCheck();
  return useCallback(
    (permission: string): boolean => {
      return (
        doPermissionCheck(
          permission,
          userProfile.isLoading,
          userProfile.data,
          isGranularCheck
        ) === true
      );
    },
    [userProfile]
  );
}

function useUserPermission(): (
  permision: string
) => boolean | DataStates.Loading {
  const userProfile = useAuthenticatedUserBag();
  const isGranularCheck = useIsGranularCheck();
  return useCallback(
    (permission: string): boolean | DataStates.Loading => {
      return doPermissionCheck(
        permission,
        userProfile.isLoading,
        userProfile.data,
        isGranularCheck
      );
    },
    [userProfile.isLoading, userProfile.data]
  );
}

export function usePageRequiresPermission(
  permission: string
): DataStates.Loading | void {
  const router = useRouter();
  const canUser = useUserPermission();
  if (canUser(permission) === DataStates.Loading) {
    return DataStates.Loading;
  }
  if (!canUser(permission)) {
    ToastService.error("You dont have the permission to view this page");
    router.replace(NAVIGATION_LINKS.DASHBOARD.HOME);
  }
}
