import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ProjectForm from "../components/ProjectForm";

test("adds a new project when form is submitted", async () => {
  const mockAddProject = vi.fn();

  render(<ProjectForm addProject={mockAddProject} />);

  await userEvent.type(screen.getByPlaceholderText("Title"), "New Project");
  await userEvent.type(screen.getByPlaceholderText("Description"), "New Desc");

  await userEvent.click(screen.getByText("Add Project"));

  expect(mockAddProject).toHaveBeenCalledTimes(1);
});