# JLCPCB / EasyEDA imports

These components were imported with `tsci import --jlcpcb --download --use-exact-footprint`. The generated files are retained as exact geometry/model provenance. Production usage in `index.circuit.tsx` follows the project's 95% copper-IoU rule: native tscircuit elements use a footprinter string when conversion clears the threshold, while a generated JLCPCB component is used when it does not.

| Designator(s) | Manufacturer part number | JLCPCB/LCSC ID | Status |
| --- | --- | --- | --- |
| U1 | TLV8544PWR | C2867322 | Native `chip`; 100% copper-IoU footprinter string; imported STEP/OBJ. |
| U2 | INA226AIDGSR | C49851 | Native `chip`; 96.23% package-correct VSSOP string; imported STEP/OBJ. |
| D4, D5 | 1N4148X-TP | C507292 | Native `diode`; 100% copper-IoU string; imported STEP/OBJ. |
| L1, L2 | BLM18HE152SN1D | C82155 | Native `chip`; 100% copper-IoU string; imported STEP/OBJ. |
| J1, J2 | SSQ-110-03-G-D | C3323139 | Exact generated JLCPCB component retained; best conversion was only 14.84% copper IoU. |

## Parts without an exact import

- J3/J4: JLCPCB returned no exact result for Molex `87898-0204`; native `pinheader` elements use a 100%-IoU footprinter representation of the land pattern from Molex drawing `SD-87898-001`.
- A1: Cross-reference evidence from TI's related TIDA-01398 BOM and TI E2E identifies the sensor as Murata `IRS-B210ST01-R1`. It is obsolete and has no exact JLCPCB result, so the circuit uses a custom five-pad footprint based on the archived Murata package drawing.
- U3: TI does not print the unity-gain buffer MPN; the circuit preserves the five-pin follower connection with a provisional SOT-23-5 footprint.
- H1: `IML-0669` is a mechanical PIR lens; its nominal 12-mm envelope is represented on silkscreen, but its physical retention features are not modeled.

Do not select a substitute for U3, A1, J3/J4, or H1 without checking electrical compatibility, mechanical fit, and current availability.

The complete conversion evidence and chosen strings are recorded in `docs/footprint-conversion.md`.
