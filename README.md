# BOOSTXL-TLV8544PIR tscircuit reconstruction

This project is an engineering reconstruction of Texas Instruments' `BOOSTXL-TLV8544PIR` PIR motion-detector BoosterPack in tscircuit.

## Current status

- The tscircuit project is initialized and its dependencies are installed.
- The entry point is `index.circuit.tsx`.
- TI's exact two-page BoosterPack schematic has been downloaded, rendered, and visually verified.
- TI's annotated top-view board rendering has also been extracted for placement and footprint research.
- A first-pass component/value inventory has been transcribed to `reference/boostxl-tlv8544pir/component-inventory.csv`.
- The 70-component, 40-net electrical reconstruction is implemented in `src/BoostxlTlv8544Pir.tsx`.
- Exact JLCPCB/EasyEDA footprints and 3D models are imported for U1, U2, D4/D5, L1/L2, and J1/J2; see `imports/README.md`.
- The PCB uses the 50.8 mm × 43.18 mm 40-pin BoosterPack envelope, 45.72 mm header spacing, chamfered corners, and a routed two-layer placement.
- A1 is identified as Murata `IRS-B210ST01-R1` and uses a custom five-pad footprint based on the archived Murata package drawing.
- J3/J4 use the exact Molex `87898-0204` 2.54-mm SMT land pattern from drawing `SD-87898-001`; the part is not available in JLCPCB's catalog.
- The local tscircuit autorouter completes 133 PCB connections with 122 vias and a bottom-side GND pour. The current circuit JSON contains zero placement, routing, or connectivity errors.
- Generated KiCad, SVG, and readable-netlist artifacts are described in `exports/README.md`.

## Engineering status

The project is routed and internally DRC-clean, but it is still a reconstruction rather than TI's original PCB source. Do not send it directly to fabrication: `U3` is not identified in TI's published schematic, the mounting-hole positions and corner chamfers are inferred from the BoosterPack grid and board imagery, and the lens/mechanical clearances require measurement against physical hardware. See `docs/manufacturing-status.md`.

## Reference data

See `reference/README.md` for the source inventory and the important distinction between the exact BoosterPack files and the related `TIDA-01398` reference design.

## Commands

```sh
bun install
bun run typecheck
bun run build
bun run dev
bunx tsci export index.circuit.tsx -f kicad_zip -o exports/BOOSTXL-TLV8544PIR-routed-kicad.zip --disable-parts-engine
```

The build output is written under `dist/`.
