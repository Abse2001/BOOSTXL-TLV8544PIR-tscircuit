# Generated exports

| File | Contents |
| --- | --- |
| `BOOSTXL-TLV8544PIR-schematic.svg` | Generated schematic view of the current electrical reconstruction. |
| `BOOSTXL-TLV8544PIR-routed-pcb.svg` | Courtyard-visible, two-layer routed PCB preview. |
| `BOOSTXL-TLV8544PIR-assembly.svg` | Generated top assembly drawing. |
| `BOOSTXL-TLV8544PIR-readable-netlist.txt` | Human-readable 70-component, 40-net connectivity report. |
| `BOOSTXL-TLV8544PIR-circuit.json` | Complete tscircuit circuit JSON for downstream tooling and validation. |
| `BOOSTXL-TLV8544PIR-routed-kicad.zip` | KiCad project with schematic, routed PCB, project file, exact imported STEP models, and stock passive/LED STEP models. The model service has no `sot23_5` or plated-testpoint file, so U3 and TP1/TP2 remain unmodeled. |
| `BOOSTXL-TLV8544PIR-gerbers.zip` | Generated Gerber/drill manufacturing data for review only. |
| `BOOSTXL-TLV8544PIR.step` | Partial board-level STEP model. The standalone STEP merger cannot parse the exact imported JLC models, so this is not a complete assembly model; use the KiCad ZIP for the separately bundled models. |
| `SHA256SUMS` | SHA-256 checksums for every generated deliverable above. |

## Important manufacturing status

The pinned tscircuit v6 build is placement- and routing-DRC clean, with 133 PCB traces, 100 vias, and a bottom GND pour. These exports are still **review artifacts, not released manufacturing files**. The U3 identity, mounting-hole positions, board-corner geometry, PIR lens retention, and physical fit must be verified before fabrication. A human PCB review should also optimize the autorouted topology and via count for this nanopower analog design.
