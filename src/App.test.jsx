import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders the homepage", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /dakota brown/i })
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<App />);

    // Multiple links exist (header nav + homepage terminal nav)
    const projectLinks = screen.getAllByRole("link", { name: /projects/i });
    const blogLinks = screen.getAllByRole("link", { name: /blog/i });
    const aboutLinks = screen.getAllByRole("link", { name: /about/i });

    expect(projectLinks.length).toBeGreaterThanOrEqual(1);
    expect(blogLinks.length).toBeGreaterThanOrEqual(1);
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
  });
});
