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

- J3/J4: JLCPCB returned no exact result for Molex `87898-0204`; the circuit uses a provisional native 2-pin, 2.54-mm footprint.
- A1: TI does not print the PIR sensor MPN in SNOU148A; the circuit preserves all five schematic pins with a provisional inline footprint.
- U3: TI does not print the unity-gain buffer MPN; the circuit preserves the five-pin follower connection with a provisional SOT-23-5 footprint.
- H1: `IML-0669` is a mechanical PIR lens and is currently represented by a PCB annotation only.

Do not select a substitute for A1, U3, J3/J4, or H1 without checking the physical board or an authoritative BOM.
