import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "../pages/HomePage";

const mockProjects = [
  { id: 1, title: "React App", description: "A React project" },
  { id: 2, title: "Vue App", description: "A Vue project" },
];

test("filters projects based on search input", async () => {
  render(
    <MemoryRouter>
      <HomePage projects={mockProjects} />
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText("Search projects...");

  await userEvent.type(input, "React");

  expect(screen.getByText("React App")).toBeInTheDocument();
  expect(screen.queryByText("Vue App")).not.toBeInTheDocument();
});