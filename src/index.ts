/**
 * A class for calculating the Kelly Criterion.
 * 用于计算凯利准则的类。
 */
export class KellyCriterion {
  /**
   * Calculates the Kelly Criterion for a given win probability and payoff ratio.
   * 计算给定获胜概率和赔率比例的凯利准则。
   *
   * @param {number} winProbability - The probability of winning (between 0 and 1).
   * @param {number} payoffRatio - The ratio of the payoff (e.g., 2 for 2:1 odds).
   * @returns {number} Returns the calculated Kelly Criterion fraction.
   */
  calKellyCriterion(winProbability: number, payoffRatio: number): number {
    const kellyFraction = (winProbability * payoffRatio - (1 - winProbability)) / payoffRatio;
    return kellyFraction;
  }

  /**
   * Calculates the optimal fraction to bet based on the Kelly Criterion.
   * 根据凯利准则计算最优投注比例。
   *
   * @param {number} winProbability - The probability of winning (between 0 and 1).
   * @param {number} payoffRatio - The ratio of the payoff (e.g., 2 for 2:1 odds).
   * @returns {number} Returns the calculated optimal fraction to bet.
   */
  calOptimalFraction(winProbability: number, payoffRatio: number): number {
    const kellyFraction = this.calKellyCriterion(winProbability, payoffRatio);
    return kellyFraction >= 0 ? kellyFraction : 0;
  }
}
