# BOOSTXL-TLV8544PIR tscircuit reconstruction

This project will recreate Texas Instruments' `BOOSTXL-TLV8544PIR` PIR motion-detector BoosterPack in tscircuit.

## Current status

- The tscircuit project is initialized and its dependencies are installed.
- The entry point is `index.circuit.tsx`.
- TI's exact two-page BoosterPack schematic has been downloaded, rendered, and visually verified.
- TI's annotated top-view board rendering has also been extracted for placement and footprint research.
- A first-pass component/value inventory has been transcribed to `reference/boostxl-tlv8544pir/component-inventory.csv`.
- The 70-component, 40-net electrical reconstruction is implemented in `src/BoostxlTlv8544Pir.tsx`.
- Exact JLCPCB/EasyEDA footprints and 3D models are imported for U1, U2, D4/D5, L1/L2, and J1/J2; see `imports/README.md`.
- A provisional, overlap-free PCB placement is implemented on a 58 mm × 50 mm outline.
- Routing is intentionally disabled. The current KiCad PCB is a placement/netlist draft, not fabrication-ready.
- Generated KiCad, SVG, and readable-netlist artifacts are described in `exports/README.md`.

## Reference data

See `reference/README.md` for the source inventory and the important distinction between the exact BoosterPack files and the related `TIDA-01398` reference design.

## Commands

```sh
bun install
bun run build
bun run dev
bunx tsci export index.circuit.tsx -f kicad_zip -o exports/BOOSTXL-TLV8544PIR-draft-unrouted-kicad.zip --disable-parts-engine
```

The build output is written under `dist/`.
