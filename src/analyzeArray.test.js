import analyzeArray from "./analyzeArray.js";

test("Trial case", () =>{
    expect(typeof analyzeArray([1,2])).toBe('object');
})

test("normal array input", () => {
    expect(analyzeArray([1,2,3,4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
})

test("empty array arguement", () =>{
    expect(analyzeArray([])).toBe("Empty array passed");
})

test("Invalid array elements", () => {
    expect(analyzeArray(["a", 'b', {p: "?"}])).toBe("Bad array");
})