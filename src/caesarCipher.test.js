import caesarCipher from "./caesarCipher.js";

test("Trial case", () => {
    expect(typeof caesarCipher("testing", 0)).toBe('string');
})

test("normal case", () => {
    expect(caesarCipher("barnabus", 1)).toBe("cbsobcvt");
})

test("reverse case", () => {
    expect(caesarCipher("barnabus", -2)).toBe("zyplyzsq");
})

test("string includes numbers/symbols", () =>{
    expect(caesarCipher("42hj2t#", 1)).toBe("42ik2u#");
})

test("check normal for uppercase", () => {
    expect(caesarCipher("BARNABUS", 1)).toBe("CBSOBCVT");
})

test("check reverse for uppercase", () => {
    expect(caesarCipher("BARNABUS", -2)).toBe("ZYPLYZSQ");
})

test("for mixed case", () => {
    expect(caesarCipher("unExpeCTed", 2)).toBe("wpGzrgEVgf");
})