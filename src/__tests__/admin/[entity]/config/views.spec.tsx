import "@testing-library/jest-dom";
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { AppWrapper } from "@hadmean/chromista";
import EntityViewsSettings from "pages/admin/[entity]/config/views";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";
import userEvent from "@testing-library/user-event";

setupApiHandlers();

describe("pages/admin/[entity]/config/views", () => {
  beforeAll(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockImplementation(() => ({
      asPath: "/",
      query: {
        entity: "entity-1",
      },
    }));
  });

  it("should display views settings", async () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );
    expect(
      await screen.findByRole("tab", { name: "Foo Entity View" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: "Bar Entity View" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: "Baz Entity View" })
    ).toBeInTheDocument();
  });

  it("should tab through views", async () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );
    expect(
      await screen.findByRole("tab", { name: "Foo Entity View" })
    ).toBeInTheDocument();

    expect(
      within(screen.getByRole("tabpanel")).getByLabelText("Title")
    ).toHaveValue("Foo Entity View");

    await userEvent.click(screen.getByRole("tab", { name: "Bar Entity View" }));

    expect(
      await within(screen.getByRole("tabpanel")).findByLabelText("Title")
    ).toHaveValue("Bar Entity View");

    await userEvent.click(screen.getByRole("tab", { name: "Baz Entity View" }));

    expect(
      await within(screen.getByRole("tabpanel")).findByLabelText("Title")
    ).toHaveValue("Baz Entity View");
  });

  it("should delete tabs", async () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );
    expect(
      await screen.findByRole("tab", { name: "Foo Entity View" })
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("tab", { name: "Baz Entity View" }));

    await userEvent.click(screen.getByRole("button", { name: "Delete Tab" }));

    expect(
      screen.queryByRole("tab", { name: "Baz Entity View" })
    ).not.toBeInTheDocument();

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Bar Entity View"
    );

    await userEvent.click(screen.getByRole("button", { name: "Delete Tab" }));

    expect(
      screen.queryByRole("tab", { name: "Bar Entity View" })
    ).not.toBeInTheDocument();

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Foo Entity View"
    );

    await userEvent.click(screen.getByRole("button", { name: "Delete Tab" }));

    expect(
      screen.queryByRole("button", { name: "Delete Tab" })
    ).not.toBeInTheDocument();

    expect(screen.queryAllByRole("tab")).toHaveLength(0);

    expect(screen.queryByRole("table")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Title")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Save Changes" }));

    expect(await screen.findByRole("status")).toHaveTextContent(
      "App Settings Saved Successfully"
    );
  });

  it("should display delete changes", () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );
    expect(screen.queryAllByRole("tab")).toHaveLength(0);
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Title")).not.toBeInTheDocument();
  });

  it("should add new tab", async () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );

    await userEvent.click(screen.getByRole("button", { name: "Add New Tab" }));

    expect(
      await within(screen.getByRole("tabpanel")).findByLabelText("Title")
    ).toHaveValue("Tab 1");

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Tab 1"
    );

    await userEvent.click(screen.getByRole("button", { name: "Add New Tab" }));

    expect(
      await within(screen.getByRole("tabpanel")).findByLabelText("Title")
    ).toHaveValue("Tab 2");

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Tab 2"
    );

    await userEvent.click(screen.getByRole("button", { name: "Save Changes" }));

    expect((await screen.findAllByRole("status"))[0]).toHaveTextContent(
      "App Settings Saved Successfully"
    );
  });

  it("should edit existing tabs", async () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );
    expect(
      await screen.findByRole("tab", { name: "Tab 1" })
    ).toBeInTheDocument();

    await userEvent.type(
      within(screen.getByRole("tabpanel")).getByLabelText("Title"),
      "Updated"
    );

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Tab 1Updated"
    );

    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Save Changes" }));

    expect((await screen.findAllByRole("status"))[0]).toHaveTextContent(
      "App Settings Saved Successfully"
    );
  });

  it("should save edit changes", async () => {
    render(
      <AppWrapper>
        <EntityViewsSettings />
      </AppWrapper>
    );
    expect(
      await screen.findByRole("tab", { name: "Tab 1Updated" })
    ).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();

    await userEvent.type(
      within(screen.getByRole("tabpanel")).getByLabelText("Title"),
      "Updated"
    );
  });
});

// add to these test when the sort and filters are accessible
