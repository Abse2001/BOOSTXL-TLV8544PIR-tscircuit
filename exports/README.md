# Generated exports

All files in this directory were regenerated from the same circuit state that passes `bun run release-check`.

| File | Contents |
| --- | --- |
| `BOOSTXL-TLV8544PIR-schematic.svg` | Current electrical schematic view. |
| `BOOSTXL-TLV8544PIR-routed-pcb.svg` | Courtyard-visible two-layer routed PCB preview. |
| `BOOSTXL-TLV8544PIR-assembly.svg` | Top assembly drawing with the exact three-lead A1 package. |
| `BOOSTXL-TLV8544PIR-readable-netlist.txt` | Human-readable 70-component/40-net report including selected MPNs. |
| `BOOSTXL-TLV8544PIR-circuit.json` | Complete release-check input/output: 131 PCB traces, 119 vias, zero error elements. |
| `BOOSTXL-TLV8544PIR-routed-kicad.zip` | KiCad schematic/PCB/project plus imported models for every non-resistor/non-capacitor electronic component, including J3/J4 and TP1/TP2. |
| `BOOSTXL-TLV8544PIR-gerbers.zip` | Gerber/drill manufacturing data for independent DFM review. |
| `BOOSTXL-TLV8544PIR.step` | Partial board-level STEP model. The standalone merger cannot parse several exact supplier STEP dialects, so use the KiCad ZIP for the separately bundled models. |
| `SHA256SUMS` | SHA-256 checksums for the generated deliverables. |

## Release warning

These files form an orderable **prototype release candidate**, not production-proven hardware. Complete the 1:1 overlay in `docs/mechanical-integration.md`, an independent fabricator-rule DRC/Gerber review, and the first-article tests in `docs/bring-up-plan.md` before a production quantity.
