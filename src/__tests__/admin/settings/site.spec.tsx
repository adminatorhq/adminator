import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { AppWrapper } from "@hadmean/chromista";
import userEvent from "@testing-library/user-event";
import SiteSettings from "pages/admin/settings/site";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";

setupApiHandlers();

describe("pages/admin/settings/site", () => {
  beforeAll(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockImplementation(() => ({
      asPath: "/",
    }));
  });

  it("should display site values", async () => {
    render(
      <AppWrapper>
        <SiteSettings />
      </AppWrapper>
    );
    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toHaveValue("Hadmean");
    });
    expect(screen.getByLabelText("Home Link")).toHaveValue("/");
    expect(screen.getByLabelText("Square Logo")).toHaveValue(
      "/assets/images/logo.png"
    );
    expect(screen.getByLabelText("Full Length Logo")).toHaveValue(
      "/assets/images/full-logo.png"
    );
  });

  it("should update site values successfully", async () => {
    render(
      <AppWrapper>
        <SiteSettings />
      </AppWrapper>
    );

    await userEvent.type(screen.getByLabelText("Name"), "Updated");
    await userEvent.type(screen.getByLabelText("Home Link"), "Updated");
    await userEvent.type(screen.getByLabelText("Square Logo"), "Updated");
    await userEvent.type(screen.getByLabelText("Full Length Logo"), "Updated");

    await userEvent.click(
      screen.getByRole("button", { name: "Update Site Settings" })
    );

    expect(await screen.findByRole("status")).toHaveTextContent(
      "App Settings Saved Successfully"
    );
  });

  it("should display site values", async () => {
    render(
      <AppWrapper>
        <SiteSettings />
      </AppWrapper>
    );
    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toHaveValue("HadmeanUpdated");
    });
    expect(screen.getByLabelText("Home Link")).toHaveValue("/Updated");
    expect(screen.getByLabelText("Square Logo")).toHaveValue(
      "/assets/images/logo.pngUpdated"
    );
    expect(screen.getByLabelText("Full Length Logo")).toHaveValue(
      "/assets/images/full-logo.pngUpdated"
    );
  });
});
