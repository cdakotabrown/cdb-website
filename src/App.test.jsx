import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

afterEach(() => window.history.pushState({}, "", "/"));

describe("App", () => {
  it("renders the single-page home with its sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /dakota brown/i })
    ).toBeInTheDocument();
    for (const name of [/about/i, /projects/i]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
  });

  it("links project cards and hides the lab reference", () => {
    render(<App />);

    expect(
      screen.queryByRole("link", { name: /Laboratory Order Reference/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /FGC Roster/i })).toHaveAttribute(
      "href",
      "/fgc"
    );
  });

  it("shows only the hat on unknown URLs", () => {
    window.history.pushState({}, "", "/does-not-exist");
    render(<App />);

    expect(screen.getByRole("link", { name: /go home/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
