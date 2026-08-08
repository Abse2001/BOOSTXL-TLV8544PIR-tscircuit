# JLCPCB / EasyEDA imports

These files were generated with `tsci import --jlcpcb --download --use-exact-footprint` and preserve exact supplier geometry and 3D-model provenance. `index.circuit.tsx` converts them to native elements only when a package-correct footprinter candidate reaches the project's 95% copper-IoU threshold.

| Designator(s) | Manufacturer part number | JLCPCB/LCSC ID | Source usage |
| --- | --- | --- | --- |
| U1 | TLV8544PWR | C2867322 | Native `chip`; 100% IoU; imported STEP/OBJ. |
| U2 | INA226AIDGSR | C49851 | Native `chip`; 96.23% VSSOP candidate; imported STEP/OBJ. |
| U3 | TLV333IDBVR | C473369 | Native `chip`; 95.9821% SOT-23-5 candidate; imported STEP/OBJ. |
| D4, D5 | 1N4148X-TP | C507292 | Native `diode`; 100% IoU; imported STEP/OBJ. |
| L1, L2 | BLM18HE152SN1D | C82155 | Native `chip`; 100% IoU; imported STEP/OBJ. |
| J1, J2 | SSQ-110-03-G-D | C3323139 | Exact imported JSX retained; 14.84% best relevant IoU. |
| A1 | IRA-S210ST01 | C152563 | Exact imported JSX retained; 13.87% copper and 1.31% hole IoU. |

## Separately sourced parts

- J3/J4 are Molex `87898-0204`. JLCPCB had no exact catalog result, so native `pinheader` elements represent the manufacturer land pattern from SD-87898-001. Source and fit these separately.
- TP1/TP2 are Keystone `5001` through-hole test points and are intended for hand installation.
- H1 is the Murata `IML-0688` Fresnel lens. It is mechanical rather than an electrical source component; its 10.8-mm envelope is shown on board silkscreen and its housing requirements are documented separately.

See `docs/footprint-conversion.md` for the comparison record.
