import calculator from "./calculator.js";

test("is module running1?", () =>{
    expect(calculator.add(1, 2)).toBe(3);
})

test("checking subtraction", () =>{
    expect(calculator.subtract(1, 2)).toBe(-1);
})

test("Checking multiplication", () =>{
    expect(calculator.multiply(1, 2)).toBe(2);
})

test("checking division", () =>{
    expect(calculator.divide(1, 2)).toBe(0.5);
})

test("checking for 'invalid arguements' case", () =>{
    expect(calculator.divide("twenty", "ten")).toBe("Invalid arguements");
})


