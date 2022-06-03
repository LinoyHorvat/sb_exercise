import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

// default props
const picture = "image0.png";
const name = "Lou Gardner";
const age = 61;
const address = "888 Thatford Avenue, Chalfant, Alabama, 2716";
const phone_number = "(053) 8589246";

describe("Card Component", () => {
  test("should render Card cmp properly for default props", () => {
    const { queryByTestId } = render(
      <Card
        picture={picture}
        name={name}
        age={age}
        address={address}
        phone_number={phone_number}
      />
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
  test("should not render Card cmp for props eq to null", () => {
    const { queryByTestId } = render(
      <Card
        picture={null}
        name={null}
        age={null}
        address={null}
        phone_number={null}
      />
    );
    expect(screen.queryByTestId("card")).toBeNull();
  });
  test("should not render Card cmp for props eq to undefined", () => {
    const { queryByTestId } = render(
      <Card
        picture={undefined}
        name={undefined}
        age={undefined}
        address={undefined}
        phone_number={undefined}
      />
    );
    expect(screen.queryByTestId("card")).toBeNull();
  });
  test("should not render Card cmp when no props are given", () => {
    const { queryByTestId } = render(
      <Card
      />
    );
    expect(screen.queryByTestId("card")).toBeNull();
  });
});
