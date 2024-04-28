import { render, fireEvent, screen } from "@testing-library/react";
import { fakeMessageDescriptor } from "translations/fake";
import { ApplicationRoot } from "frontend/components/ApplicationRoot";
import { USE_ROUTER_PARAMS } from "__tests__/_/constants";
import { Tabs } from ".";

const TAB_CONTENT = [
  {
    label: fakeMessageDescriptor(`Foo Label`),
    id: "foo",
    content: <>Foo Content</>,
  },
  {
    label: fakeMessageDescriptor(`Bar Label`),
    id: "bar",
    content: <>Bar Content</>,
  },
  {
    label: fakeMessageDescriptor(`Baz Label`),
    id: "baz",
    content: <>Baz Content</>,
  },
];

const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementation(USE_ROUTER_PARAMS({}));

describe("Tabs", () => {
  it("should render first tab by default", () => {
    render(
      <ApplicationRoot>
        <Tabs contents={TAB_CONTENT} />
      </ApplicationRoot>
    );

    expect(screen.getByText("Foo Content")).toBeVisible();
    expect(screen.getByText("Bar Content")).not.toBeVisible();
    expect(screen.getByText("Baz Content")).not.toBeVisible();
  });

  it("should render first tab when current tab is loading", () => {
    render(
      <ApplicationRoot>
        <Tabs currentTab={undefined} contents={TAB_CONTENT} />
      </ApplicationRoot>
    );

    expect(screen.getByText("Foo Content")).toBeVisible();
    expect(screen.getByText("Bar Content")).not.toBeVisible();
    expect(screen.getByText("Baz Content")).not.toBeVisible();
  });

  it("should render currentTab", () => {
    render(
      <ApplicationRoot>
        <Tabs currentTab="baz" contents={TAB_CONTENT} />
      </ApplicationRoot>
    );

    expect(screen.getByText("Foo Content")).not.toBeVisible();
    expect(screen.getByText("Bar Content")).not.toBeVisible();
    expect(screen.getByText("Baz Content")).toBeVisible();
  });

  it("should switch tab", async () => {
    const onChange = jest.fn();
    render(
      <ApplicationRoot>
        <Tabs onChange={onChange} currentTab="baz" contents={TAB_CONTENT} />
      </ApplicationRoot>
    );
    expect(screen.getByText("Foo Content")).not.toBeVisible();
    expect(screen.getByText("Bar Content")).not.toBeVisible();
    expect(screen.getByText("Baz Content")).toBeVisible();

    expect(
      screen.getByRole("tabpanel", { name: "Baz Label" })
    ).toHaveTextContent("Baz Content");

    fireEvent.click(screen.getByText("Bar Label"));

    expect(screen.getByText("Foo Content")).not.toBeVisible();
    expect(screen.getByText("Bar Content")).toBeVisible();
    expect(screen.getByText("Baz Content")).not.toBeVisible();

    expect(
      screen.getByRole("tabpanel", { name: "Bar Label" })
    ).toHaveTextContent("Bar Content");

    expect(onChange).toHaveBeenCalled();
  });

  it("should not call onChange if current tab is pressed", async () => {
    const onChange = jest.fn();
    render(
      <ApplicationRoot>
        <Tabs onChange={onChange} currentTab="baz" contents={TAB_CONTENT} />
      </ApplicationRoot>
    );
    expect(screen.getByText("Foo Content")).not.toBeVisible();
    expect(screen.getByText("Bar Content")).not.toBeVisible();
    expect(screen.getByText("Baz Content")).toBeVisible();

    fireEvent.click(screen.getByText("Baz Label"));

    expect(screen.getByText("Foo Content")).not.toBeVisible();
    expect(screen.getByText("Bar Content")).not.toBeVisible();
    expect(screen.getByText("Baz Content")).toBeVisible();

    expect(onChange).not.toHaveBeenCalled();
  });
});
