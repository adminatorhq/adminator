import { render, screen, waitFor, within } from "@testing-library/react";
import { ApplicationRoot } from "frontend/components/ApplicationRoot";
import userEvent from "@testing-library/user-event";
import EntityCrudSettings from "pages/admin/[entity]/config/crud";
import { rest } from "msw";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";
import { BASE_TEST_URL } from "__tests__/_/api-handlers/_utils";
import { USE_ROUTER_PARAMS } from "__tests__/_/constants";

const server = setupApiHandlers();

describe("pages/admin/[entity]/config/crud", () => {
  server.use(
    rest.get(
      BASE_TEST_URL("/api/entities/:entity/fields"),
      async (_, res, ctx) => {
        return res(
          ctx.json([
            {
              name: `primary`,
              isId: true,
              type: "number",
            },
            {
              name: `field-1`,
              isRequired: true,
              type: "number",
            },
            {
              name: `field-2`,
              isRequired: true,
              type: "string",
            },
            {
              name: `hidden-field-1`,
              type: "string",
            },
          ])
        );
      }
    )
  );

  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  describe.each([
    { tab: "Table", id: "table" },
    { tab: "Details", id: "details" },
    { tab: "Create", id: "create" },
    { tab: "Update", id: "update" },
  ])("$tab Tab", ({ tab, id }) => {
    beforeEach(() => {
      useRouter.mockImplementation(
        USE_ROUTER_PARAMS({
          replaceMock: jest.fn(),
          query: {
            entity: "entity-1",
            tab: id,
          },
        })
      );
    });

    it("should show current state correctly", async () => {
      render(
        <ApplicationRoot>
          <EntityCrudSettings />
        </ApplicationRoot>
      );

      const currentTab = await screen.findByRole("tabpanel", { name: tab });

      await waitFor(() => {
        expect(
          within(currentTab).getByRole("checkbox", {
            name: "Hidden Field 1",
          })
        ).not.toBeChecked();
      });

      expect(
        await within(currentTab).findByRole("checkbox", { name: "Field 1" })
      ).toBeChecked();

      expect(
        within(currentTab).getByRole("checkbox", {
          name: "Field 2",
        })
      ).toBeChecked();
    });

    it("should change state correctly", async () => {
      render(
        <ApplicationRoot>
          <EntityCrudSettings />
        </ApplicationRoot>
      );

      const currentTab = screen.getByRole("tabpanel", { name: tab });

      await userEvent.click(
        await within(currentTab).findByRole("button", { name: "Field 1" })
      );

      await userEvent.click(
        within(currentTab).getByRole("button", { name: "Field 2" })
      );
      await userEvent.click(
        within(currentTab).getByRole("button", { name: "Field 2" })
      );

      await userEvent.click(
        within(currentTab).getByRole("button", { name: "Hidden Field 1" })
      );

      expect((await screen.findAllByRole("status"))[0]).toHaveTextContent(
        `${tab} Columns Settings Saved Successfully`
      );
    });

    it("should show updated state correctly", async () => {
      render(
        <ApplicationRoot>
          <EntityCrudSettings />
        </ApplicationRoot>
      );

      const currentTab = screen.getByRole("tabpanel", { name: tab });

      await waitFor(async () => {
        expect(
          await within(currentTab).findByRole("checkbox", { name: "Field 1" })
        ).not.toBeChecked();
      });

      expect(
        await within(currentTab).findByRole("checkbox", {
          name: "Field 2",
        })
      ).toBeChecked();

      expect(
        within(currentTab).getByRole("checkbox", {
          name: "Hidden Field 1",
        })
      ).toBeChecked();
    });
  });

  it("should show hide id fields from selection", async () => {
    useRouter.mockImplementation(
      USE_ROUTER_PARAMS({
        replaceMock: jest.fn(),
        query: {
          entity: "entity-1",
        },
      })
    );

    render(
      <ApplicationRoot>
        <EntityCrudSettings />
      </ApplicationRoot>
    );

    expect(
      screen.queryByRole("checkbox", {
        name: "Primary",
      })
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("tab", { name: "Details" }));

    expect(
      screen.queryByRole("checkbox", {
        name: "Primary",
      })
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("tab", { name: "Create" }));

    expect(
      screen.queryByRole("checkbox", {
        name: "Primary",
      })
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("tab", { name: "Update" }));

    expect(
      screen.queryByRole("checkbox", {
        name: "Primary",
      })
    ).not.toBeInTheDocument();
  });

  it("should not have toggling functionality for delete", async () => {
    useRouter.mockImplementation(
      USE_ROUTER_PARAMS({
        replaceMock: jest.fn(),
        query: {
          entity: "entity-1",
          tab: "delete",
        },
      })
    );

    render(
      <ApplicationRoot>
        <EntityCrudSettings />
      </ApplicationRoot>
    );

    expect(
      await screen.findByRole("tab", { selected: true })
    ).toHaveTextContent("Delete");

    expect(
      screen.queryByRole("checkbox", {
        name: "Primary",
      })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("checkbox", {
        name: "Field 1",
      })
    ).not.toBeInTheDocument();
  });
});
