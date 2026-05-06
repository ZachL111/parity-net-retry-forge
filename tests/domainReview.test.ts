import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 80, slack: 26, drag: 10, confidence: 70 };
assert.equal(domainReviewScore(item), 226);
assert.equal(domainReviewLane(item), "ship");
