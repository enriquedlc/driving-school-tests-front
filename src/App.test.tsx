import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("should render the app", async () => {
    render(<App />);
    userEvent.click(screen.getByText("count is 0"));
    await waitFor(() => expect(screen.getByText("count is 1")));
  });
});
