function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 90,
    "capacity": 104,
    "latency": 26,
    "risk": 14,
    "weight": 9,
    "score": 160,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 74,
    "capacity": 107,
    "latency": 20,
    "risk": 6,
    "weight": 12,
    "score": 199,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 90,
    "capacity": 72,
    "latency": 15,
    "risk": 14,
    "weight": 4,
    "score": 152,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
