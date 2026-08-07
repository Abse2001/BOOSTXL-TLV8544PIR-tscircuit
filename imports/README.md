# JLCPCB / EasyEDA imports

These components were imported with `tsci import --jlcpcb --download --use-exact-footprint`.

| Designator(s) | Manufacturer part number | JLCPCB/LCSC ID | Status |
| --- | --- | --- | --- |
| U1 | TLV8544PWR | C2867322 | Exact schematic part; footprint and STEP/OBJ imported. |
| U2 | INA226AIDGSR | C49851 | Exact schematic part; footprint and STEP/OBJ imported. |
| D4, D5 | 1N4148X-TP | C507292 | Exact schematic part; footprint and STEP/OBJ imported. |
| L1, L2 | BLM18HE152SN1D | C82155 | Exact schematic part; footprint and STEP/OBJ imported. |
| J1, J2 | SSQ-110-03-G-D | C3323139 | Exact schematic part; exact `G-D` result was selected manually. |

## Parts without an exact import

- J3/J4: JLCPCB returned no exact result for Molex `87898-0204`; the circuit uses a custom 2.54-mm SMT footprint with 1.27 mm × 2.96 mm lands from Molex drawing `SD-87898-001`.
- A1: Cross-reference evidence from TI's related TIDA-01398 BOM and TI E2E identifies the sensor as Murata `IRS-B210ST01-R1`. It is obsolete and has no exact JLCPCB result, so the circuit uses a custom five-pad footprint based on the archived Murata package drawing.
- U3: TI does not print the unity-gain buffer MPN; the circuit preserves the five-pin follower connection with a provisional SOT-23-5 footprint.
- H1: `IML-0669` is a mechanical PIR lens; its nominal 12-mm envelope is represented on silkscreen, but its physical retention features are not modeled.

Do not select a substitute for U3, A1, J3/J4, or H1 without checking electrical compatibility, mechanical fit, and current availability.
