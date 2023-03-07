import { queryObjectToQueryString } from "./queryObjectToQueryString";

export const NAVIGATION_LINKS = {
  DASHBOARD: "/admin",
  AUTH_SIGNIN: "/auth",
  ACCOUNT: {
    PROFILE: "/account/profile",
    PASSWORD: "/account/password",
    PREFERENCES: "/account/preferences",
  },
  INTEGRATIONS: {
    VARIABLES: "/integrations/variables",
    ACTIONS: (actionId: string) => `/integrations/actions/${actionId}`,
    STORAGE: (storageId: string) => `/integrations/storage/${storageId}`,
  },
  USERS: {
    LIST: "/users",
    CREATE: "/users/create",
    DETAILS: (username: string) => `/users/${username}`,
  },
  ROLES: {
    LIST: "/roles",
    CREATE: "/roles/create",
    DETAILS: (role: string) => `/roles/${role}`,
  },
  SETUP: {
    USER: "/setup/user",
    CREDENTIALS: "/setup/credentials",
  },
  SETTINGS: {
    DEFAULT: "/admin/settings/entities",
    DASHBOARD: "/admin/settings/dashboard",
    ENTITIES: "/admin/settings/entities",
    SYSTEM: "/admin/settings/system",
    DATE: "/admin/settings/date",
    SITE: "/admin/settings/site",
    THEME: "/admin/settings/theme",
    VARIABLES: "/admin/settings/variables",
    VERSIONS: "/admin/settings/versions",
  },
  ENTITY: {
    CREATE: (entity: string) => `/admin/${entity}/create`,
    TABLE: (entity: string) => `/admin/${entity}`,
    DETAILS: (entity: string, id: string) => `/admin/${entity}/${id}`,
    RELATION_DETAILS: (
      entity: string,
      id: string,
      childEntity: string,
      childId: string
    ) => `/admin/${entity}/${id}/relation/${childEntity}/${childId}`,
    RELATION_TABLE: (entity: string, id: string, childEntity: string) =>
      `/admin/${entity}/${id}/relation/${childEntity}`,
    UPDATE: (entity: string, id: string) => `/admin/${entity}/${id}/update`,
    CONFIG: {
      CRUD: (entity: string, query?: Record<string, string>) =>
        `/admin/${entity}/config/crud${queryObjectToQueryString(query)}`,
      FIELDS: (entity: string, query?: Record<string, string>) =>
        `/admin/${entity}/config/fields${queryObjectToQueryString(query)}`,
      DICTION: (entity: string) => `/admin/${entity}/config/diction`,
      FORM: (entity: string) => `/admin/${entity}/config/form`,
      VIEWS: (entity: string) => `/admin/${entity}/config/views`,
      RELATIONS: (entity: string) => `/admin/${entity}/config/relations`,
      FORM_INTEGRATIONS: (entity: string) => `/admin/${entity}/config/actions`,
    },
  },
};
