import { CRUD_CONFIG_NOT_FOUND } from "frontend/lib/crud-config";
import {
  IFormAction,
  IIntegrationImplementationList,
} from "shared/types/actions";
import { useApiMutateOptimisticOptions } from "frontend/lib/data/useMutate/useApiMutateOptimisticOptions";
import { MutationHelpers } from "frontend/lib/data/useMutate/mutation-helpers";
import { ApiRequest } from "frontend/lib/data/makeRequest";
import { useWaitForResponseMutationOptions } from "frontend/lib/data/useMutate/useWaitForResponseMutationOptions";
import { useApi } from "frontend/lib/data/useApi";
import { FORM_ACTION_CRUD_CONFIG, FORM_ACTION_ENDPOINT } from "./constants";

const BASE_ACTIONS_ENDPOINT = `/api/integrations/actions`;

export const LIST_ENTITY_FORM_ACTIONS = (entity: string) => {
  return `${FORM_ACTION_ENDPOINT.LIST}/${entity}`;
};

export const useIntegrationImplementationsList = (integration: string) =>
  useApi<IIntegrationImplementationList[]>(
    `${BASE_ACTIONS_ENDPOINT}/${integration}/implementations`,
    {
      errorMessage: CRUD_CONFIG_NOT_FOUND(`Integration Implementations`),
      enabled: !!integration,
      defaultData: [],
    }
  );

export function useDeleteFormActionMutation(entity: string) {
  return useApiMutateOptimisticOptions<IFormAction[], string>({
    mutationFn: async (formActionId) =>
      await ApiRequest.DELETE(FORM_ACTION_ENDPOINT.DELETE(formActionId)),
    dataQueryPath: LIST_ENTITY_FORM_ACTIONS(entity),
    successMessage: FORM_ACTION_CRUD_CONFIG.MUTATION_LANG.DELETE,
    onMutate: MutationHelpers.deleteByKey("id") as unknown as (
      oldData: IFormAction[],
      form: string
    ) => IFormAction[],
  });
}

export function useCreateFormActionMutation(entity: string) {
  return useWaitForResponseMutationOptions<IFormAction>({
    mutationFn: async (configuration) => {
      return await ApiRequest.POST(FORM_ACTION_ENDPOINT.CREATE, configuration);
    },
    endpoints: [LIST_ENTITY_FORM_ACTIONS(entity)],
    successMessage: FORM_ACTION_CRUD_CONFIG.MUTATION_LANG.CREATE,
  });
}

export function useUpdateFormActionMutation(entity: string) {
  return useWaitForResponseMutationOptions<IFormAction>({
    mutationFn: async (formAction) =>
      await ApiRequest.PATCH(
        FORM_ACTION_ENDPOINT.UPDATE(formAction.id),
        formAction
      ),
    endpoints: [LIST_ENTITY_FORM_ACTIONS(entity)],
    successMessage: FORM_ACTION_CRUD_CONFIG.MUTATION_LANG.EDIT,
  });
}
