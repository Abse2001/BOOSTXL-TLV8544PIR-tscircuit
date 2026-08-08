# JLCPCB / EasyEDA imports

All populated electronic parts other than resistors and capacitors are instantiated directly from components generated with `tsci import --jlcpcb --download --use-exact-footprint`. The exact supplier geometry and downloaded 3D models are retained.

| Designator(s) | Manufacturer part number | JLCPCB/LCSC ID |
| --- | --- | --- |
| U1 | TLV8544PWR | C2867322 |
| U2 | INA226AIDGSR | C49851 |
| U3 | TLV333IDBVR | C473369 |
| D1 | 19-217/R6C-AL1M2VY/3T | C72044 |
| D2 | 19-213/Y2C-CQ2R2L/3T(CY) | C72038 |
| D3 | 19-217/G7C-AN1P2/6T | C2986030 |
| D4, D5 | 1N4148X-TP | C507292 |
| L1, L2 | BLM18HE152SN1D | C82155 |
| J1, J2 | SSQ-110-03-G-D | C3323139 |
| J3, J4 | DZ254S-11-02-48 | C5160785 |
| A1 | IRA-S210ST01 | C152563 |
| TP1, TP2 | Keystone 5001 | C238122 |

The importer sanitized punctuation in several generated TypeScript identifiers and MPN strings. Component identifiers remain valid TypeScript, while the `manufacturerPartNumber` metadata was restored to the supplier's real MPN. The TLV333 import's generated pin aliases were also corrected against the data sheet: pin 2 is `V_NEG` and pin 4 is `IN_NEG`.

H1 is the Murata `IML-0688` Fresnel lens. It is mechanical rather than an electrical source component; its 10.8-mm envelope is shown on board silkscreen and its housing requirements are documented separately.
