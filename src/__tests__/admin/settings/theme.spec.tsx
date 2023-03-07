import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AppWrapper } from "@hadmean/chromista";
import userEvent from "@testing-library/user-event";
import ThemeSettings from "pages/admin/settings/theme";

import { setupApiHandlers } from "__tests__/_/setupApihandlers";

setupApiHandlers();

describe("pages/admin/settings/theme", () => {
  beforeAll(() => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    useRouter.mockImplementation(() => ({
      asPath: "/",
    }));
  });

  it("should display theme values", async () => {
    render(
      <AppWrapper>
        <ThemeSettings />
      </AppWrapper>
    );
    await waitFor(() => {
      expect(screen.getByLabelText("Dark Color Scheme")).toHaveValue("#111111");
    });

    expect(screen.getByRole("option", { selected: true })).toHaveTextContent(
      "Dark"
    );
  });

  it("should update theme settings successfully", async () => {
    render(
      <AppWrapper>
        <ThemeSettings />
      </AppWrapper>
    );

    fireEvent.input(screen.getByLabelText("Dark Color Scheme"), {
      target: { value: "#123456" },
    });

    await userEvent.click(screen.getByRole("button", { name: "Update Theme" }));

    expect((await screen.findAllByRole("status"))[1]).toHaveTextContent(
      "App Settings Saved Successfully"
    );
  });

  it("should display updated theme values", async () => {
    render(
      <AppWrapper>
        <ThemeSettings />
      </AppWrapper>
    );
    await waitFor(() => {
      expect(screen.getByLabelText("Dark Color Scheme")).toHaveValue("#123456");
    });
    expect(screen.getByRole("option", { selected: true })).toHaveTextContent(
      "Dark"
    );
  });

  it("should update user preference and switch color successfully", async () => {
    render(
      <AppWrapper>
        <ThemeSettings />
      </AppWrapper>
    );

    expect(screen.getByLabelText("Dark Color Scheme")).toBeInTheDocument();

    expect(
      screen.queryByLabelText("Light Color Scheme")
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("option", { name: "Light" }));

    expect(
      screen.queryByLabelText("Dark Color Scheme")
    ).not.toBeInTheDocument();

    expect(screen.getByLabelText("Light Color Scheme")).toHaveValue("#4b38b3");

    fireEvent.input(screen.getByLabelText("Light Color Scheme"), {
      target: { value: "#654321" },
    });

    await userEvent.click(screen.getByRole("button", { name: "Update Theme" }));

    expect((await screen.findAllByRole("status"))[2]).toHaveTextContent(
      "Preferences Updated Successfully"
    );

    expect((await screen.findAllByRole("status"))[3]).toHaveTextContent(
      "App Settings Saved Successfully"
    );
  });

  it("should display updated theme values", async () => {
    render(
      <AppWrapper>
        <ThemeSettings />
      </AppWrapper>
    );
    await waitFor(() => {
      expect(screen.getByLabelText("Light Color Scheme")).toHaveValue(
        "#654321"
      );
    });

    expect(
      screen.queryByLabelText("Dark Color Scheme")
    ).not.toBeInTheDocument();

    expect(screen.getByRole("option", { selected: true })).toHaveTextContent(
      "Light"
    );
  });

  it("should display not update the other scheme color", async () => {
    render(
      <AppWrapper>
        <ThemeSettings />
      </AppWrapper>
    );
    await userEvent.click(screen.getByRole("option", { name: "Dark" }));

    await userEvent.keyboard("{Enter}");

    expect(screen.getByLabelText("Dark Color Scheme")).toHaveValue("#123456");
  });
});
