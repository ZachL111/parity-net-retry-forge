# parity-net-retry-forge

`parity-net-retry-forge` packages a practical networking exercise in TypeScript. The emphasis is on deterministic behavior, a small public API, and examples that explain the tradeoffs.

## How I Read Parity Net Retry Forge

The useful thing to inspect here is how the same score rule is represented in code, metadata, and examples. If those three pieces disagree, the audit script should make the drift visible.

## Main Behaviors

- Includes extended examples for retry behavior, including `surge` and `degraded`.
- Documents policy decisions tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.
- Stores project constants and verification metadata in `metadata/project.json`.
- Adds a repository audit script that checks structure before running the language verifier.

## Problem Shape

This is not a wrapper around a service. It is a self-contained project that shows how the model behaves when demand, capacity, latency, risk, and weight move in different directions.

## Repository Map

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Internal Model

The project is organized around a compact model rather than a large framework. Inputs are scored, classified, and checked against golden fixtures. The constants live in code and are mirrored in metadata so documentation drift is easy to catch. The TypeScript project keeps types close to the model and compiles before running its checks.

## How To Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Scenario Walkthrough

`surge` is the first example I would inspect because it lands on the `accept` path with a score of 210. The broader file also keeps `degraded` at -33 and `surge` at 210, which gives the model a useful low-to-high spread.

## Validation

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Known Edges

The examples cover useful edges, not every edge. A larger version would add malformed-input tests, richer reports, and deeper domain parsers.

## Follow-Up Work

- Split the scoring constants into a typed configuration object and validate it before use.
- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add one more networking fixture that focuses on a malformed or borderline input.

## Run It Locally

The only required setup is the local TypeScript toolchain. After cloning, stay in the repo root so fixture paths resolve correctly.
