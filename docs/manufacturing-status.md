# Manufacturing status

## What is resolved

- The electrical design is reconstructed from the complete two-page TI schematic in SNOU148A: 70 source components and 40 nets.
- U1, U2, D4/D5, L1/L2, and J1/J2 use exact JLCPCB/EasyEDA imports with downloaded 3D models.
- A1 is identified as Murata `IRS-B210ST01-R1` and has a custom five-terminal SMT footprint derived from the archived package drawing.
- J3/J4 are exact Molex `87898-0204` parts with the manufacturer's recommended two-pad SMT land pattern.
- The board uses the TI 40-pin BoosterPack 50.8 mm × 43.18 mm maximum envelope and 45.72-mm header-column spacing.
- Local autorouting completes every connection. The generated circuit JSON has zero tscircuit placement, routing, or connectivity errors.

## Must be resolved before fabrication

1. Identify U3 from physical board markings or an authoritative BOOSTXL BOM, verify its pinout and electrical limits, then replace `BUFFER_MPN_NOT_PUBLISHED`.
2. Measure a physical BoosterPack to confirm the four mounting-hole centers, hole diameters, chamfer geometry, exact board outline, and PIR/lens retention details.
3. Verify the reconstructed Murata footprint against the original PCB land pattern or a physical sensor. The package terminal locations are sourced, but the chosen solder-land dimensions are an engineering reconstruction.
4. Confirm passive and LED case sizes, voltage/power ratings, polarities, and procurement choices against hardware.
5. Review and optimize the two-layer autoroute, especially analog return paths, guard/keepout strategy around the PIR input, bottom GND-pour continuity, and the current 122-via count.
6. Run KiCad DRC with the intended PCB fabricator's constraints, inspect every Gerber/drill layer, and complete ERC, BOM, pick-and-place, assembly, and bring-up reviews.

The generated Gerbers are included to make review easier; their presence is not a fabrication release.
