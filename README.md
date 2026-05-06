# parity-net-retry-forge

`parity-net-retry-forge` keeps a focused TypeScript implementation around networking. The project goal is to design a TypeScript verification harness for retry systems, covering simulation kernel, seeded input scenarios, and failure-oriented tests.

## Project Rationale

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Parity Net Retry Forge Review Notes

The first comparison I would make is `packet span` against `packet span` because it shows where the rule is most opinionated.

## Feature Set

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/parity-net-retry-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The TypeScript addition stays small enough to inspect in one sitting.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Next Improvements

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
