import React from "react";
import { ThemeContext, TodoContext, UserContext } from "./Context";

describe("ThemeContext", () => {
  it("exists", () => {
    expect(ThemeContext).toBeDefined();
  });

  it("has a context provider", () => {
    expect(ThemeContext.Provider).toBeDefined();
  });
});

describe("TodoContext", () => {
  it("exists", () => {
    expect(TodoContext).toBeDefined();
  });

  it("has a context provider", () => {
    expect(TodoContext.Provider).toBeDefined();
  });
});

describe("UserContext", () => {
  it("exists", () => {
    expect(UserContext).toBeDefined();
  });

  it("has a context provider", () => {
    expect(UserContext.Provider).toBeDefined();
  });
});
