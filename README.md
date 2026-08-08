# BOOSTXL-TLV8544PIR tscircuit reconstruction

This is an engineering reconstruction of Texas Instruments' `BOOSTXL-TLV8544PIR` PIR motion-detector BoosterPack.

## Current status

- The complete 70-component, 40-net design is written directly in `index.circuit.tsx`. There is no secondary board file and no project-local component wrapper layer.
- Resistors and capacitors use native tscircuit elements. Every other populated electronic part is instantiated from an exact JLCPCB import: J1-J4, U1-U3, A1, D1-D5, L1/L2, and TP1/TP2.
- TI's two-page schematic was transcribed from SNOU148A Figures 27 and 28 and laid out as two native tscircuit sheets. U1 is projected as U1A-U1D op-amp units, the LaunchPad connectors/LEDs sit below the PIR signal chain, and the power/current-monitor circuit occupies sheet 2. C22 is correctly placed across R21, and NT1/NT2/NT3 preserve TI's rail split.
- The unpublished original U3 identity is not guessed. `TLV333IDBVR` is explicitly selected as a qualified, orderable unity-gain-buffer substitute and uses its exact JLCPCB C473369 import with corrected data-sheet pin labels.
- The obsolete SMT PIR is replaced by Murata `IRA-S210ST01` (JLCPCB C152563), using its exact imported three-lead through-hole footprint. The matching lens is Murata `IML-0688`.
- Every populated electrical component has a manufacturer part number and a JLCPCB/LCSC part number. J3/J4 use imported DEALON DZ254S-11-02-48 C5160785 vertical SMT headers, and TP1/TP2 use imported Keystone 5001 C238122.
- The reconstructed board is 60.96 mm × 50.8 mm. Its 43.18-mm header-center spacing (45.72 mm between outer header columns), asymmetric overhang, three holes, and outline are inferred from TI's scale image and BoosterPack grid because TI did not publish native PCB CAD for this board.
- The local v6 router completes 131 PCB traces with 118 vias and a bottom GND pour. The circuit JSON contains zero placement, routing, or connectivity errors.
- `bun run release-check` enforces 70 physical components plus the five schematic-only U1/U3 projections, net count, routing, zero circuit errors, critical MPNs, supplier coverage, the corrected C22/NT/U3/A1 topology, and a Gerber-mode `tsci check shorts` pass.

## Release status

This is an **orderable prototype release candidate**, not a production-proven clone. The electrical values, topology, MPNs, footprints, and supplier IDs are now traceable. Before paying for assembly, print the 1:1 mechanical overlay and confirm the reconstructed outline/header/hole/lens geometry against the intended LaunchPad. After assembly, execute `docs/bring-up-plan.md`; the IRA-S210 substitution and lens housing require first-article qualification.

- Public source and manufacturing package: <https://github.com/Abse2001/BOOSTXL-TLV8544PIR-tscircuit>
- Published tscircuit package: <https://tscircuit.com/abse/boostxl-tlv8544pir> (`1.0.10`)

The registry build uses the exact OBJ models for J1/J2 and U1 because its per-file upload limit rejects their larger STEP files. The complete STEP models remain in this repository and in the manufacturing exports; electrical and PCB geometry are unchanged.

See:

- `docs/design-verification.md` for value provenance and calculated checkpoints;
- `docs/manufacturing-status.md` for the remaining release gates;
- `docs/mechanical-integration.md` for the board/sensor/lens fit evidence;
- `manufacturing/procurement-status.csv` for exact purchasing selections; and
- `exports/README.md` for generated deliverables.

## Commands

```sh
bun install
bun run release-check
bun run dev
bunx tsci export index.circuit.tsx -f kicad_zip -o exports/BOOSTXL-TLV8544PIR-routed-kicad.zip --disable-parts-engine
```

The build output is written under `dist/`.
