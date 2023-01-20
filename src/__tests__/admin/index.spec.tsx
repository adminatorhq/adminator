import "@testing-library/jest-dom";
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { AppWrapper } from "@hadmean/chromista";

import Dashboard from "pages/admin";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";
import userEvent from "@testing-library/user-event";

setupApiHandlers();

const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementation(() => ({
  query: {},
  asPath: "/",
}));

describe("pages/admin", () => {
  it("should render table dashboard widget correctly", async () => {
    render(
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    );

    const firstWidget = await screen.findByLabelText("Latest Entity 1 Widget");

    expect(
      await within(firstWidget).findByText("Latest Entity 1")
    ).toBeInTheDocument();

    const allRoles = await within(firstWidget).findAllByRole("row");

    expect(
      allRoles.map((row) =>
        row.textContent
          .replace("-06T23:00:00.000Z", "")
          .replace("-07T00:00:00.000Z", "")
      )
    ).toMatchInlineSnapshot(`
      [
        "Entity 1 Id FieldEntity 1 Reference FieldEntity 1 String FieldEntity 1 Number FieldEntity 1 Boolean FieldEntity 1 Date FieldEntity 1 Enum Field",
        "12hello342022-05foo",
        "23there212021-05foo",
        "32today182022-02bar",
      ]
    `);
  });

  it("should render summary card widget correctly", async () => {
    render(
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    );

    const widget = await screen.findByLabelText("Total Entity 1 Widget");

    expect(
      await within(widget).findByText("Total Entity 1")
    ).toBeInTheDocument();
    expect(
      within(widget).getByLabelText("Total Entity 1 Icon")
    ).toHaveTextContent("Some SVG Here");
    expect(
      within(widget).getByLabelText("Total Entity 1 Icon")
    ).toHaveAttribute("color", "#FF165D");
    expect(within(widget).getByLabelText("Total Count")).toHaveTextContent(
      "113"
    );
    expect(within(widget).getByRole("link", { name: "View" })).toHaveAttribute(
      "href",
      "/admin/entity-1"
    );
  });

  it("should render correct buttons for table widget", async () => {
    render(
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    );

    const widget = await screen.findByLabelText("Latest Entity 1 Widget");

    expect(within(widget).getByRole("link", { name: "View" })).toHaveAttribute(
      "href",
      "/admin/entity-1"
    );
    expect(
      within(widget).queryByRole("button", { name: "Delete Button" })
    ).not.toBeInTheDocument();
    expect(
      within(widget).queryByRole("button", { name: "Edit Widget" })
    ).not.toBeInTheDocument();
  });

  it("should render correct buttons for summary card widget", async () => {
    render(
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    );

    const widget = await screen.findByLabelText("Total Entity 1 Widget");

    expect(
      within(widget).queryByRole("button", { name: "Delete Button" })
    ).not.toBeInTheDocument();
    expect(
      within(widget).queryByRole("button", { name: "Edit Widget" })
    ).not.toBeInTheDocument();
  });

  describe("Action Button", () => {
    it("should go to settings page on 'Manage Dashboard'", async () => {
      const replaceMock = jest.fn();
      useRouter.mockImplementation(() => ({
        replace: replaceMock,
        query: {},
        asPath: "/",
      }));

      render(
        <AppWrapper>
          <Dashboard />
        </AppWrapper>
      );

      await userEvent.click(
        await screen.findByRole("button", { name: "Manage Dashboard" })
      );

      expect(replaceMock).toHaveBeenCalledWith("/admin/settings/dashboard");
    });
  });
});
