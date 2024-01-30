import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StaticRoutingMovedPage from "../../pages/section33/33-05-jes-unit-test-mocking";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

it("Test registering the board contents", async () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://mock.com/graphql", fetch }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <StaticRoutingMovedPage />
    </ApolloProvider>,
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "IU" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "Hello!" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "Nice to meet you!" },
  });

  fireEvent.click(screen.getByRole("submit-button"));
  await waitFor(() => {
    expect(mockRouter.asPath).toEqual("/boards/address");
  });
});
