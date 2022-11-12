import {
  Breadcrumbs,
  ComponentIsLoading,
  DropDownMenu,
  DynamicLayout,
  IDropDownMenuItem,
  Spacer,
  Stack,
  Text,
} from "@hadmean/chromista";
import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import { AuthService } from "@hadmean/protozoa";
import { useRouter } from "next/router";
import { useNavigationStack } from "frontend/lib/routing";
import { usePageDetailsStore } from "frontend/lib/routing/usePageDetails";
import { usePageRequiresPermission } from "frontend/hooks/auth/user.store";
import { useUserAuthenticatedState } from "frontend/hooks/auth/useAuthenticateUser";
import { GitHub, Globe, Twitter, User, Users } from "react-feather";
import { useSiteConfig } from "../../hooks/app/site.config";
import { NAVIGATION_LINKS } from "../../lib/routing/links";
import { useSelectionViews } from "./useSelectionViews";
import { useAppTheme } from "../useAppTheme";
import { ROOT_LINKS_TO_CLEAR_BREADCRUMBS } from "./constants";

interface IProps {
  children: ReactNode;
  actionItems?: IDropDownMenuItem[];
  secondaryActionItems?: IDropDownMenuItem[];
}

const useUserAuthCheck = () => {
  const userAuthenticatedState = useUserAuthenticatedState();
  const router = useRouter();

  useEffect(() => {
    if (userAuthenticatedState === false) {
      AuthService.removeAuthToken();
      router.replace(NAVIGATION_LINKS.AUTH_SIGNIN);
    }
  }, [userAuthenticatedState]);

  return userAuthenticatedState;
};

export function AppLayout({
  children,
  actionItems = [],
  secondaryActionItems = [],
}: IProps) {
  useAppTheme();
  const siteConfig = useSiteConfig();
  const userAuthenticatedState = useUserAuthCheck();
  const { history, pushToStack, goToLinkIndex } = useNavigationStack();
  const router = useRouter();
  const [pageTitle, permission] = usePageDetailsStore((store) => [
    store.pageTitle,
    store.permission,
  ]);
  const selectionViews = useSelectionViews();

  usePageRequiresPermission(permission);

  useEffect(() => {
    pushToStack();
  }, [router.asPath, pageTitle]);

  const homedBreadcrumb = history.map((historyItem) => ({
    value: historyItem.link,
    label: historyItem.title,
  }));

  if (userAuthenticatedState !== true) {
    return <ComponentIsLoading />;
  }

  return (
    <DynamicLayout
      logo={siteConfig.logo}
      selectionView={selectionViews}
      secondarySelectionView={[
        {
          title: "Account",
          icon: User,
          action: ROOT_LINKS_TO_CLEAR_BREADCRUMBS.ACCOUNT,
        },
      ]}
    >
      <Head>
        <title>
          {pageTitle} - {siteConfig.name}
        </title>
      </Head>
      <Stack justify="space-between" align="center">
        <div>
          <Text>{pageTitle}</Text>
          <Breadcrumbs items={homedBreadcrumb} onCrumbClick={goToLinkIndex} />
        </div>
        <div>
          <Stack>
            {actionItems.length > 0 ? (
              <DropDownMenu menuItems={actionItems} />
            ) : null}
            {secondaryActionItems.length > 0 ? (
              <DropDownMenu menuItems={secondaryActionItems} />
            ) : null}
            {process.env.NEXT_PUBLIC_IS_DEMO && (
              <DropDownMenu
                menuItems={[
                  {
                    IconComponent: GitHub,
                    label: "Give Us A Star",
                    description: `Tell us Hadmean is a useful project by dropping us a star`,
                    onClick: () => {
                      window.open("https://github.com/hadmean/hadmean");
                    },
                  },
                  {
                    IconComponent: Twitter,
                    label: "Follow us on Twitter",
                    description: `Tweet at @hadmeanHQ if you know others will benefit using Hadmean`,
                    onClick: () => {
                      window.open("https://twitter.com/hadmeanHQ");
                    },
                  },
                  {
                    IconComponent: Users,
                    label: "Join our Discord community",
                    description: `Ask your questions here`,
                    onClick: () => {
                      window.open("https://discord.gg/aV6DxwXhzN");
                    },
                  },
                  {
                    IconComponent: Globe,
                    label: "Visit our website",
                    description: `For more links on documentation, roadmap, blog etc`,
                    onClick: () => {
                      window.open("https://hadmean.com");
                    },
                  },
                ]}
              />
            )}
          </Stack>
        </div>
      </Stack>
      <Spacer />
      <div data-testid="app-layout__content">{children}</div>
    </DynamicLayout>
  );
}
