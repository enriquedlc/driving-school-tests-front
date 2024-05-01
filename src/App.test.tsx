import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("render driving tests text", async () => {
    render(<App />);

    const text = await screen.findByText(/driving tests/i);

    expect(text).toBeInTheDocument();
  });
});
