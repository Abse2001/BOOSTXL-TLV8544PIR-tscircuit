# Manufacturing status

## Resolved engineering blockers

- The 70-component/40-net electrical design is transcribed from TI SNOU148A Figures 27 and 28.
- C22 is across R21 between `3.3VTLV` and `V+_TLV`; it is not a ground bypass. NT2 and NT3 branch from `3.3VTLV`, matching TI's functional rail split.
- U3 is no longer an unidentified placeholder. `TLV333IDBVR` is documented as a qualified substitute with correct SOT-23-5 pinout, 5-V operation, common-mode range, unity-gain stability, offset, imported model, and JLCPCB ID.
- The obsolete five-pad PIR reconstruction is removed. A1 is Murata `IRA-S210ST01` C152563 using the exact three-lead JLCPCB footprint and model; H1 is its matching `IML-0688` lens.
- Every electrical component has a fixed value, manufacturer part number, and JLCPCB/LCSC ID. All non-resistor/non-capacitor electronic parts are instantiated from exact JLCPCB imports.
- J3/J4 use imported JLCPCB C5371819, a 1×2, 2.54-mm right-angle SMT header oriented like TI's current jumpers; the removable shunts remain separate assembly items.
- The 60.96 mm × 50.8 mm two-layer board routes completely: 131 PCB traces, 119 vias, bottom GND pour, and zero generated circuit error elements.
- `bun run release-check` fails if critical topology, MPN coverage, board geometry, routing, error status, or the Gerber-mode `tsci check shorts` result regresses.
- Registry release `1.0.8` is published at `https://tscircuit.com/abse/boostxl-tlv8544pir`. Its online 3D views use the exact imported OBJ models because the registry upload can time out on larger STEP files; the full STEP files remain in GitHub and the manufacturing exports.

## Prototype release gates

These are evidence-producing checks, not missing design decisions:

1. Print/export the PCB at exactly 1:1 and overlay it on the target LaunchPad or physical TI board. Confirm both 2×10 header rows, three hole centers/diameters, outline/chamfers, USB/antenna clearances, sensor center, and 10.8-mm lens envelope. The outline is image/grid-derived because TI did not publish the original CAD.
2. Design or select a housing that keeps `IML-0688` aligned and retained over `IRA-S210ST01`. Murata explicitly requires tab alignment and external retention against dislocation.
3. Reconfirm live supplier inventory and the JLCPCB assembly process immediately before ordering. A1 is an extended, wave-soldered part and may require a fixture or manual installation.
4. Run the generated KiCad PCB through the chosen fabricator's DRC and inspect copper, solder mask, silkscreen, outline, plated holes, and drill files in an independent Gerber viewer.
5. Order a small first article, then execute `docs/bring-up-plan.md`. In particular, qualify motion sensitivity/false triggers with the substituted PIR/lens and compare INA226 current readings against a calibrated ammeter.

Passing those checks promotes the board from prototype release candidate to a validated hardware revision. Generated Gerbers are provided for review, not as an unconditional production release.
