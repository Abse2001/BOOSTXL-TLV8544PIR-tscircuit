# Autorouting investigation

The checked-in design pins tscircuit's local capacity autorouter to `v6`, uses `2x` effort, a 0.20-mm nominal trace width, 0.15-mm trace clearance, 0.30-mm minimum via drills, and 0.45-mm minimum via pads. A fresh route of the direct `index.circuit.tsx` implementation with exact JLCPCB imports completes 131 PCB traces with 117 vias and zero generated circuit-JSON error elements.

Two lower-via experiments were rejected on 2026-08-07:

- A dedicated GND `fanout` phase targeting the bottom copper plane reached a tscircuit follow-up-stage error (`Autorouting follow-up stage is missing the preceding stage output`).
- Whole-board `fanout` rejected intentionally single-ended LaunchPad nets such as `I2C_CS` because they have no second on-board target.

An uncached `v1` router run also failed to converge within the bounded benchmark window. With the larger manufacturing-safe via constraints, the retained `v6` route completes in roughly eight minutes on the same workstation. No failed experiment is retained in the source or generated exports.

The 117-via route is reproducible and useful for connectivity review, but it still needs an independent human/fabricator-rule review before production. That review should share local GND returns where practical, reduce unnecessary layer changes, preserve a continuous return plane, and give special attention to the high-impedance PIR input and the R21/U3/INA226 measurement loop.
