import {
  dataNotFoundMessage,
  ToastService,
  useStorageApi,
} from "@gothicgeeks/shared";
import { NAVIGATION_LINKS } from "frontend/lib/routing";
import { useRouter } from "next/router";
import {
  canRoleDoThisSync,
  IAuthenticatedUserBag,
  META_USER_PERMISSIONS,
  USER_PERMISSIONS,
} from "shared/types";

export const AUTHENTICATED_ACCOUNT_URL = "/api/account/mine";

export function useAuthenticatedUserBag() {
  return useStorageApi<IAuthenticatedUserBag>(AUTHENTICATED_ACCOUNT_URL, {
    errorMessage: dataNotFoundMessage("Your account details"),
  });
}

const doPermissionCheck = (
  requiredPermission: string,
  isLoadingUser: boolean,
  userData: IAuthenticatedUserBag
) => {
  if (requiredPermission === META_USER_PERMISSIONS.NO_PERMISSION_REQUIRED) {
    return true;
  }
  if (isLoadingUser) {
    return "loading";
  }
  const { role, permissions } = userData;

  return canRoleDoThisSync(role, requiredPermission, permissions);
};

export function useCanUser(permission: string): boolean | "loading" {
  const userProfile = useAuthenticatedUserBag();
  return doPermissionCheck(permission, userProfile.isLoading, userProfile.data);
}

export function useCanUserPermissions(
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
  const canUser = useCanUser(permission);
  if (canUser === "loading") {
    return "loading";
  }
  if (!canUser) {
    ToastService.error("You dont have the permission to view this page");
    router.replace(NAVIGATION_LINKS.DASHBOARD);
  }
}

export const useCanUserConfigureApp = () =>
  useCanUser(USER_PERMISSIONS.CAN_CONFIGURE_APP);
