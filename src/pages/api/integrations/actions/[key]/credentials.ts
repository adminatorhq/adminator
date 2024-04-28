import { UserPermissions } from "shared/constants/user";
import { requestHandler } from "backend/lib/request";
import { integrationsApiService } from "backend/integrations/integrations.service";

const REQUEST_KEY_FIELD = "key";

export default requestHandler(
  {
    POST: async (getValidatedRequest) => {
      const validatedRequest = await getValidatedRequest([
        {
          _type: "requestQuery",
          options: REQUEST_KEY_FIELD,
        },
      ]);

      return await integrationsApiService.getIntegrationCredentials(
        validatedRequest.requestQuery
      );
    },
  },
  [
    {
      _type: "canUser",
      body: UserPermissions.CAN_MANAGE_APP_CREDENTIALS,
    },
    {
      _type: "withPassword",
    },
  ]
);
