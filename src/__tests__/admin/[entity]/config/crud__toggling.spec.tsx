import "@testing-library/jest-dom";
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { AppWrapper } from "@hadmean/chromista";
import userEvent from "@testing-library/user-event";
import EntityCrudSettings from "pages/admin/[entity]/config/crud";
import { rest } from "msw";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";
import { BASE_TEST_URL } from "__tests__/_/api-handlers/_utils";

const server = setupApiHandlers();

describe("pages/admin/[entity]/config/crud", () => {
  server.use(
    rest.get(
      BASE_TEST_URL("/api/entities/:entity/fields"),
      async (_, res, ctx) => {
        return res(
          ctx.json([
            {
              name: `field-1`,
              isRequired: true,
              type: "number",
            },
          ])
        );
      }
    )
  );

  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  it("should not have toggling functionality for tables", async () => {
    useRouter.mockImplementation(() => ({
      asPath: "/",
      query: {
        entity: "entity-1",
      },
    }));
    render(
      <AppWrapper>
        <EntityCrudSettings />
      </AppWrapper>
    );

    expect(
      await screen.findByRole("button", {
        name: `Disable Create Functionality`,
        hidden: true,
      })
    ).not.toBeVisible();

    expect(
      await screen.findByRole("tab", { selected: true })
    ).toHaveTextContent("Table");

    expect(
      screen.queryByRole("button", {
        name: `Disable Table Functionality`,
      })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", {
        name: `Enable Table Functionality`,
      })
    ).not.toBeInTheDocument();
  });

  describe.each([
    { tab: "Details" },
    { tab: "Create" },
    { tab: "Update" },
    { tab: "Delete" },
  ])("$tab feature", ({ tab }) => {
    beforeAll(() => {
      useRouter.mockImplementation(() => ({
        asPath: "/",
        query: {
          entity: "entity-1",
          tab,
        },
      }));
    });

    it("should toggle off functionality", async () => {
      render(
        <AppWrapper>
          <EntityCrudSettings />
        </AppWrapper>
      );

      const currentTab = screen.getByRole("tabpanel");

      if (tab !== "Delete" && tab !== "Update") {
        expect(
          await within(currentTab).findByRole("checkbox", { name: "Field 1" })
        ).toBeInTheDocument();
      }

      if(tab !== "Update") {
        await userEvent.click(
          await within(currentTab).findByRole("button", {
            name: `Disable ${tab} Functionality`,
          })
        );
      }

      if (tab !== "Delete") {
        expect(
          within(currentTab).queryByRole("checkbox", { name: "Field 1" })
        ).not.toBeInTheDocument();
      }

      expect((await screen.findAllByRole("status"))[0]).toHaveTextContent(
        "App Settings Saved Successfully"
      );

      expect(
        within(currentTab).queryByRole("button", {
          name: `Disable ${tab} Functionality`,
        })
      ).not.toBeInTheDocument();
    });

    it("should toggle on functionality", async () => {
      render(
        <AppWrapper>
          <EntityCrudSettings />
        </AppWrapper>
      );

      const currentTab = screen.getByRole("tabpanel");

      await userEvent.click(
        await within(currentTab).findByRole("button", {
          name: `Enable ${tab} Functionality`,
        })
      );
      if (tab !== "Delete") {
        expect(
          within(currentTab).getByRole("checkbox", { name: "Field 1" })
        ).toBeInTheDocument();
      }
      expect((await screen.findAllByRole("status"))[0]).toHaveTextContent(
        "App Settings Saved Successfully"
      );

      expect(
        within(currentTab).queryByRole("button", {
          name: `Enable ${tab} Functionality`,
        })
      ).not.toBeInTheDocument();
    });
  });
});
