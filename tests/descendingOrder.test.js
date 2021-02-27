const descendingOrder = require("../src/descendingOrder");

describe("descendingOrder", () => {
it("Takes an intiger and returns it with its digits in descending order.", () => { 
    expect(descendingOrder(42145)).toEqual(54421);
    expect(descendingOrder(145263)).toEqual(654321);
    expect(descendingOrder(123456789)).toEqual(987654321);
})
} ); 
