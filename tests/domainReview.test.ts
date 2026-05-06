function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 80, slack: 26, drag: 10, confidence: 70 };
equal(domainReviewScore(item), 226);
equal(domainReviewLane(item), "ship");
