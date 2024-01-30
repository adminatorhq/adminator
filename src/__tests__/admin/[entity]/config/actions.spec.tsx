import React from "react";
import { render, screen, within } from "@testing-library/react";
import { ApplicationRoot } from "frontend/components/ApplicationRoot";
import userEvent from "@testing-library/user-event";
import EntityFormActionsSettings from "pages/admin/[entity]/config/actions";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";
import { getTableRows } from "__tests__/_/utiis/getTableRows";

setupApiHandlers();

describe("pages/admin/[entity]/config/actions", () => {
  beforeAll(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockImplementation(() => ({
      asPath: "/",
      query: {
        entity: "test-entity",
      },
      isReady: true,
    }));
  });

  it.skip("should list entity form actions", async () => {
    render(
      <ApplicationRoot>
        <EntityFormActionsSettings />x
      </ApplicationRoot>
    );

    expect(await screen.findByRole("table")).toBeInTheDocument();

    expect(await getTableRows(screen.getByRole("table")))
      .toMatchInlineSnapshot(`
      [
        "Integration
                      
                    Trigger
                      
                    Action
                      
                    Action",
        "HttpCreatePost",
        "SmtpUpdateSend Mail",
        "SlackDeleteSend Message",
      ]
    `);
  });

  it("should create new form action successfully", async () => {
    render(
      <ApplicationRoot>
        <EntityFormActionsSettings />
      </ApplicationRoot>
    );

    await userEvent.click(
      await screen.findByRole("button", { name: "Add New Form Action" })
    );

    const dialog = screen.getByRole("dialog");

    await userEvent.type(within(dialog).getByLabelText("Trigger"), "On Create");
    await userEvent.keyboard("{Enter}");

    await userEvent.click(
      within(dialog).getByRole("option", { name: "Slack" })
    );

    expect(
      within(dialog).queryByRole("option", { name: "SMTP" })
    ).not.toBeInTheDocument();

    await userEvent.type(
      within(dialog).getByLabelText("Action"),
      "Send Message"
    );
    await userEvent.keyboard("{Enter}");

    await userEvent.type(
      await within(dialog).findByLabelText("Slack: Channel"),
      "{{ CONSTANTS.SLACK_CHANNEL }}"
    );

    await userEvent.type(
      within(dialog).getByLabelText("Slack: Message"),
      "Hello how are you"
    );

    await userEvent.type(
      within(dialog).getByLabelText("Slack: Message"),
      "Hello how are you"
    );

    await userEvent.click(screen.getByLabelText("Slack: Should Notify"));

    await userEvent.click(
      within(dialog).getByRole("button", { name: "Create Form Action" })
    );

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Form Action Created Successfully"
    );

    expect(
      screen.queryByRole("button", { name: "Create Form Action" })
    ).not.toBeInTheDocument();
  });

  //   it("should display updated diction values", async () => {
  //     render(
  //       <ApplicationRoot>
  //         <EntityDictionSettings />
  //       </ApplicationRoot>
  //     );
  //     await waitFor(() => {
  //       expect(screen.getByLabelText("Plural")).toHaveValue(
  //         "Plural entity-1Updated"
  //       );
  //     });
  //     expect(screen.getByLabelText("Singular")).toHaveValue(
  //       "Singular entity-1Updated"
  //     );
  //   });
});
