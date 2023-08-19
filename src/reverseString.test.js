import reverseString from "./reverseString.js";

test("Is this test suite executing?", () => {
    expect(reverseString("hallo")).toBe("ollah");
})

test("normal string conversion", () => {
    expect(reverseString("hello")).toBe("olleh");
})

test("empty string input hould return empty string", ()=>{
    expect(reverseString("")).toBe("");
})