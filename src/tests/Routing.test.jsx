import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProjectDetailPage from "../pages/ProjectDetailPage";

const mockProjects = [
  { id: 1, title: "Routing Test", description: "Details here" },
];

test("renders project detail page from route", () => {
  render(
    <MemoryRouter initialEntries={["/project/1"]}>
      <Routes>
        <Route
          path="/project/:id"
          element={<ProjectDetailPage projects={mockProjects} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Routing Test")).toBeInTheDocument();
  expect(screen.getByText("Details here")).toBeInTheDocument();
});