import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    // fetch.mockResponse(
    //   JSON.stringify([
    //     { capital: "DC", name: "USA", region: "NA", population: 5 },
    //     { capital: "BC", name: "CAN", region: "NA", population: 5 },
    //   ])
    // );
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(
      "Where in the world?"
    );
  });
});
