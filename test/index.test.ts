import { describe, expect, it } from "vitest";
import { KellyCriterion } from "../src";

describe("should", () => {
  it("exported", () => {
    expect(1).toEqual(1);

    const kellyCalculator = new KellyCriterion();
    const winProbability = 0.5;
    const payoffRatio = 1;

    const kellyFraction = kellyCalculator.calKellyCriterion(winProbability, payoffRatio);
    const optimalFraction = kellyCalculator.calOptimalFraction(winProbability, payoffRatio);

    expect(kellyFraction).toEqual(0);
    expect(optimalFraction).toEqual(0);
  });
});
