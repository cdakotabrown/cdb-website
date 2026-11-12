import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LabReference from "./LabReference";

function renderDirectory(entry = "/lab-reference") {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route path="/lab-reference" element={<LabReference />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("Laboratory order directory", () => {
  it("browses into a panel and its linked tests", async () => {
    const user = userEvent.setup();
    renderDirectory();
    await user.click(
      screen.getByRole("button", { name: /Chemistry.*Metabolism/i })
    );
    await user.click(
      screen.getByRole("button", { name: /Lipids.*Cholesterol/i })
    );
    await user.click(
      screen.getByRole("button", { name: /Lipid panel.*Groups several/i })
    );
    expect(screen.getByRole("heading", { name: "Lipid panel" })).toHaveFocus();
    await user.click(
      screen.getByRole("button", { name: /^HDL cholesterol$/i })
    );
    expect(
      screen.getByRole("heading", { name: "HDL cholesterol" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Linked panels" })
    ).toBeInTheDocument();
  });

  it("searches aliases and recovers from an empty result", async () => {
    const user = userEvent.setup();
    renderDirectory();
    const input = screen.getByRole("searchbox");
    await user.type(input, "PLT");
    await user.click(
      screen.getByRole("button", { name: /Platelet count.*Measures/i })
    );
    expect(
      screen.getByRole("heading", { name: "Platelet count" })
    ).toBeInTheDocument();
    await user.clear(input);
    await user.type(input, "zzzzzzzzzz");
    expect(screen.getByRole("status")).toHaveTextContent("No matching orders");
    await user.click(screen.getByRole("button", { name: "Clear search" }));
    expect(
      screen.getByRole("button", { name: /Complete blood count.*A group/i })
    ).toBeInTheDocument();
  });

  it("restores a shared selection and handles unknown record IDs", () => {
    const { unmount } = renderDirectory("/lab-reference?test=lipid-panel");
    expect(
      screen.getByRole("heading", { name: "Lipid panel" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Directory breadcrumb" })
    ).toHaveTextContent("Chemistry");
    unmount();
    renderDirectory("/lab-reference?test=missing");
    expect(screen.getByRole("status")).toHaveTextContent(
      "not in the demo catalog"
    );
    expect(
      screen.getByRole("heading", { name: "Browse by discipline" })
    ).toBeInTheDocument();
  });
});
