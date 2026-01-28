import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders the headline", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /cdb-website is live/i })
    ).toBeInTheDocument();
  });
});
