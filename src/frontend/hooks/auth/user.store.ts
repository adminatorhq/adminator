import {
  dataNotFoundMessage,
  ToastService,
  useStorageApi,
} from "@hadmean/protozoa";
import { NAVIGATION_LINKS } from "frontend/lib/routing";
import { useRouter } from "next/router";
import {
  IAuthenticatedUserBag,
  IUserPreferences,
  META_USER_PERMISSIONS,
  USER_PERMISSIONS,
} from "shared/types/user";
import { canRoleDoThisSync } from "shared/logic/permissions";
import { useIsAuthenticatedStore } from "./useAuthenticateUser";

export const AUTHENTICATED_ACCOUNT_URL = "/api/account/mine";

export function useAuthenticatedUserBag() {
  const isAuthenticated = useIsAuthenticatedStore(
    (store) => store.isAuthenticated
  );
  return useStorageApi<IAuthenticatedUserBag>(AUTHENTICATED_ACCOUNT_URL, {
    errorMessage: dataNotFoundMessage("Your account details"),
    enabled: isAuthenticated === true,
  });
}

export function useAuthenticatedUserPreferences() {
  const isAuthenticated = useIsAuthenticatedStore(
    (store) => store.isAuthenticated
  );
  return useStorageApi<IUserPreferences>(AUTHENTICATED_ACCOUNT_URL, {
    returnUndefinedOnError: true,
    enabled: isAuthenticated === true,
    selector: (data: IAuthenticatedUserBag) => {
      return data.preferences
        ? JSON.parse(data.preferences)
        : { theme: "light" };
    },
  });
}

const doPermissionCheck = (
  requiredPermission: string,
  isLoadingUser: boolean,
  userData: IAuthenticatedUserBag
) => {
  if (isLoadingUser || !userData) {
    return "loading";
  }
  if (requiredPermission === META_USER_PERMISSIONS.NO_PERMISSION_REQUIRED) {
    return true;
  }
  const { role, permissions } = userData;

  return canRoleDoThisSync(role, requiredPermission, permissions);
};

export function useUserHasPermission(permission: string): boolean | "loading" {
  const userProfile = useAuthenticatedUserBag();
  return doPermissionCheck(permission, userProfile.isLoading, userProfile.data);
}

export function useUserHasPermissions(
  permissions: string[]
): (permision: string) => boolean {
  const userProfile = useAuthenticatedUserBag();

  const permissionCheck: Record<string, boolean | "loading"> =
    Object.fromEntries(
      permissions.map((permission) => [
        permission,
        doPermissionCheck(permission, userProfile.isLoading, userProfile.data),
      ])
    );

  return (permission: string): boolean => {
    if (permissionCheck[permission] === undefined) {
      throw new Error("Looks like a requested permission is not passed in");
    }
    return permissionCheck[permission] === true;
  };
}

export function usePageRequiresPermission(
  permission: string
): "loading" | void {
  const router = useRouter();
  const canUser = useUserHasPermission(permission);
  if (canUser === "loading") {
    return "loading";
  }
  if (!canUser) {
    ToastService.error("You dont have the permission to view this page");
    router.replace(NAVIGATION_LINKS.DASHBOARD);
  }
}

export const useCanUserConfigureApp = () =>
  useUserHasPermission(USER_PERMISSIONS.CAN_CONFIGURE_APP);
