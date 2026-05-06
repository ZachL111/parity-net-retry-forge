# Parity Net Retry Forge Walkthrough

I use this file as a small checklist before changing the TypeScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 226 | ship |
| stress | retry pressure | 199 | ship |
| edge | route drift | 218 | ship |
| recovery | socket risk | 213 | ship |
| stale | packet span | 194 | ship |

Start with `baseline` and `stale`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `packet span` against `packet span`, not the raw score alone.
