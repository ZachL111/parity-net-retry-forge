import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
