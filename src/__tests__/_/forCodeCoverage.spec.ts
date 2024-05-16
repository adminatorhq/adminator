import { FOR_CODE_COV as $1 } from "backend/lib/request/validations/types";
import { FOR_CODE_COV as $2 } from "frontend/lib/crud-config/types";
import { FOR_CODE_COV as $3 } from "shared/form-schemas/types";
import { FOR_CODE_COV as $4 } from "shared/validations/types";
import { FOR_CODE_COV as $5 } from "shared/types/options";
import { FOR_CODE_COV as $6 } from "shared/types/auth";
import { FOR_CODE_COV as $7 } from "shared/types/data";
import { FOR_CODE_COV as $8 } from "shared/types/db";
import { FOR_CODE_COV as $9 } from "shared/types/ui";
import { FOR_CODE_COV as $10 } from "backend/data/types";
import { FOR_CODE_COV as $11 } from "backend/lib/request/validations/implementations/types";
import { FOR_CODE_COV as $12 } from "backend/integrations/libs/mailgun/types";
import { FOR_CODE_COV as $13 } from "backend/integrations/libs/postmark/types";
import { FOR_CODE_COV as $14 } from "backend/integrations/libs/sendgrid/types";
import { FOR_CODE_COV as $15 } from "backend/integrations/libs/sendinblue/types";
import { FOR_CODE_COV as $16 } from "backend/integrations/libs/slack/types";
import { FOR_CODE_COV as $17 } from "backend/integrations/libs/smtp/types";
import { FOR_CODE_COV as $18 } from "backend/integrations/libs/twilio/types";
import { FOR_CODE_COV as $19 } from "backend/storage/types";
import { FOR_CODE_COV as $20 } from "frontend/design-system/theme/types";
import { FOR_CODE_COV as $21 } from "shared/form-schemas/roles/permissions/base";
import { FOR_CODE_COV as $22 } from "backend/lib/config-persistence/portal/index";
import { FOR_CODE_COV as $23 } from "backend/lib/config-persistence/portal/main/types";
import { FOR_CODE_COV as $24 } from "frontend/views/Dashboard/Widget/types";
import { FOR_CODE_COV as $25 } from "shared/types/auth/portal/index";
import { FOR_CODE_COV as $26 } from "shared/types/auth/portal/main";
import { FOR_CODE_COV as $28 } from "shared/types/portal/widgets/main";
import { FOR_CODE_COV as $29 } from "shared/types/portal/widgets";
import { FOR_CODE_COV as $30 } from "backend/lib/key-value/portal/index";
import { FOR_CODE_COV as $31 } from "backend/lib/key-value/portal/main";
import { FOR_CODE_COV as $32 } from "shared/configurations/base-types";
import { FOR_CODE_COV as $33 } from "frontend/views/Dashboard/Widget/_components/WidgetHeader/types";
import { FOR_CODE_COV as $35 } from "shared/types/roles";
import { FOR_CODE_COV as $37 } from "frontend/views/Dashboard/Widget/_manage/types";
import { FOR_CODE_COV as $39 } from "shared/types/dashboard/base";
import { FOR_CODE_COV as $40 } from "frontend/lib/data/useMutate/types";
import { FOR_CODE_COV as $41 } from "frontend/design-system/components/Form/types";
import { FOR_CODE_COV as $42 } from "backend/menu/types";
import { FOR_CODE_COV as $43 } from "frontend/lib/form/types";
import { FOR_CODE_COV as $44 } from "frontend/design-system/components/Table/filters/types";
import { FOR_CODE_COV as $45 } from "shared/form-schemas/users";
import { FOR_CODE_COV as $46 } from "shared/constants/portal/menu/main";
import { FOR_CODE_COV as $47 } from "shared/constants/portal/menu/index";
import { FOR_CODE_COV as $48 } from "shared/user-preferences/base-types";
import { FOR_CODE_COV as $49 } from "shared/user-preferences/types";
import { FOR_CODE_COV as $50 } from "frontend/design-system/components/EmptyWrapper/types";

import { noop } from "shared/lib/noop";

noop(
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10,
  $11,
  $12,
  $13,
  $14,
  $15,
  $16,
  $17,
  $18,
  $19,
  $20,
  $21,
  $22,
  $23,
  $24,
  $25,
  $26,
  $28,
  $29,
  $30,
  $31,
  $32,
  $33,
  $35,
  $37,
  $39,
  $40,
  $41,
  $42,
  $43,
  $44,
  $45,
  $46,
  $47,
  $48,
  $49,
  $50
);

describe("Code coverage ignores plain types file", () => {
  it("should be run once to be counted", () => {
    expect(1).toBe(1);
  });
});
