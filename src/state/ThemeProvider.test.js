import React, { useContext } from "react";

import { ThemeContext } from "./Context";
import ThemeProvider from "./ThemeProvider";

// Enzyme
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ThemeProvider", () => {
  it("exists", () => {
    expect(ThemeProvider).toBeDefined();
  });

  const TestComponent = () => {
    const [t, sT] = useContext(ThemeContext);

    return (
      <button onClick={() => sT({ ...t, backgroundColor: "#000" })}>
        {t.backgroundColor}
      </button>
    );
  };

  it("children can set the theme", () => {
    const wrapper = mount(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(wrapper.find(TestComponent).find("button").text()).toEqual("#FFF");

    wrapper.find(TestComponent).find("button").simulate("click");

    expect(wrapper.find(TestComponent).find("button").text()).toEqual("#000");
  });
});
