import { somaHorasExtras, calculaDescontos } from "../index";

test("should be return the sum from extra time", () => {
  const expectedValue = 2500;
  const returnValue = somaHorasExtras(2000, 500);

  expect(returnValue).toBe(expectedValue);
});

test("should be return the money with discount", () => {
  const expectedValue = 2300;
  const returnValue = calculaDescontos(2000, 200);

  expect(returnValue).toBe(expectedValue);
});
