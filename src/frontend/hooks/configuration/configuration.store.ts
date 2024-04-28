import {
  APP_CONFIGURATION_CONFIG,
  AppConfigurationKeys,
} from "shared/configurations";
import { ApiRequest } from "frontend/lib/data/makeRequest";
import { useStorageApi } from "frontend/lib/data/useApi";
import { useWaitForResponseMutationOptions } from "frontend/lib/data/useMutate/useWaitForResponseMutationOptions";
import { AppStorage } from "frontend/lib/storage/app";
import { AppConfigurationValueType } from "shared/configurations/constants";
import { useApiQueries } from "frontend/lib/data/useApi/useApiQueries";
import { MAKE_APP_CONFIGURATION_CRUD_CONFIG } from "./configuration.constant";

export const configurationApiPath = (
  key: AppConfigurationKeys,
  entity?: string,
  method: "GET" | "PUT" = "GET"
) => {
  if (entity) {
    return `/api/config/${key}/${entity}`;
  }

  if (method === "PUT") {
    return `/api/config/${key}`;
  }

  const config = APP_CONFIGURATION_CONFIG[key];

  if ("guest" in config && config.guest) {
    return `/api/config/${key}/__guest`;
  }

  return `/api/config/${key}`;
};

export function useAppConfiguration<T extends AppConfigurationKeys>(key: T) {
  return useStorageApi<AppConfigurationValueType<T>>(
    configurationApiPath(key),
    {
      errorMessage: MAKE_APP_CONFIGURATION_CRUD_CONFIG(key).TEXT_LANG.NOT_FOUND,
      defaultData: APP_CONFIGURATION_CONFIG[key].defaultValue,
    }
  );
}

export function useEntityConfiguration<T extends AppConfigurationKeys>(
  key: T,
  entity: string,
  forceDefaultValue?: AppConfigurationValueType<T>
) {
  return useStorageApi<AppConfigurationValueType<T>>(
    configurationApiPath(key, entity),
    {
      enabled:
        !!entity /* It is possible to not have the entity at the point of call */,
      errorMessage: MAKE_APP_CONFIGURATION_CRUD_CONFIG(key).TEXT_LANG.NOT_FOUND,
      defaultData:
        forceDefaultValue || (APP_CONFIGURATION_CONFIG[key].defaultValue as T),
    }
  );
}

export const useMultipleEntityConfiguration = <T extends AppConfigurationKeys>(
  entities: string[],
  key: T
) => {
  return useApiQueries<{ entity: string }, AppConfigurationValueType<T>>({
    input: entities.map((entity) => ({ entity })),
    accessor: "entity",
    pathFn: (entity) => configurationApiPath(key, entity),
    placeholderDataFn: (entity) =>
      AppStorage.get(configurationApiPath(key, entity as unknown as string)),
  });
};

interface IUpsertConfigMutationOptions {
  otherEndpoints?: string[];
}

export function useUpsertConfigurationMutation<T extends AppConfigurationKeys>(
  key: T,
  entity?: string,
  mutationOptions?: IUpsertConfigMutationOptions
) {
  return useWaitForResponseMutationOptions<
    AppConfigurationValueType<T>,
    AppConfigurationValueType<T>
  >({
    mutationFn: async (values) => {
      await ApiRequest.PUT(configurationApiPath(key, entity, "PUT"), {
        data: values,
      });
      return values;
    },
    endpoints: [
      configurationApiPath(key, entity),
      ...(mutationOptions?.otherEndpoints || []),
    ],
    onSuccessActionWithFormData: (data) => {
      AppStorage.set(configurationApiPath(key, entity), data);
    },
    successMessage: MAKE_APP_CONFIGURATION_CRUD_CONFIG(key).MUTATION_LANG.SAVED,
  });
}
