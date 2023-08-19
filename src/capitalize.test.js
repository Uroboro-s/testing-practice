import capitalize from "./capitalize.js";

test("jest should be Jest", () =>{
    expect(capitalize("jest")).toBe("Jest");
})
test("12343534 should be 12343534", () =>{
    expect(capitalize("12343534")).toBe("12343534");
})
