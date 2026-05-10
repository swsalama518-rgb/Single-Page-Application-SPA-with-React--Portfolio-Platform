import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const mockProjects = [
  { id: 1, title: "Test Project", description: "Test desc" },
];

test("renders project titles on homepage", () => {
  render(
    <MemoryRouter>
      <HomePage projects={mockProjects} />
    </MemoryRouter>
  );

  expect(screen.getByText("Test Project")).toBeInTheDocument();
});