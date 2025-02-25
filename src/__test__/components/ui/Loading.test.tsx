import { render, screen } from "@testing-library/react";
import Loading from "../../../components/ui/Loading";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Create a mock store
const mockStore = configureStore([]);
const initialState = {
  loading: {
    isLoading: true,
  },
};
const store = mockStore(initialState);

describe("Loading Component", () => {
  test("renders the loading spinner", () => {
    render(
      <Provider store={store}>
        <Loading />
      </Provider>
    );

    // Check if the spinner is rendered
    const spinner = document.querySelector(".spinner"); // Assuming the spinner class is rendered
    expect(spinner).toBeInTheDocument();
  });
});
