# Footprint and import decisions

The current project rule is simple: resistors and capacitors may use native tscircuit elements; every other populated electronic component must be instantiated from an exact JLCPCB import.

Earlier footprinter comparisons remain useful geometry evidence, but they no longer cause a non-passive part to be converted to a native element.

| Designator(s) | JLCPCB source | Recorded best package-correct IoU | Current decision |
| --- | --- | ---: | --- |
| U1 | C2867322 / TLV8544PWR | 1.0000 | Exact JLCPCB import. |
| U2 | C49851 / INA226AIDGSR | 0.9623 | Exact JLCPCB import. |
| U3 | C473369 / TLV333IDBVR | 0.959821 | Exact JLCPCB import with corrected pin aliases. |
| D4, D5 | C507292 / 1N4148X-TP | 1.0000 | Exact JLCPCB import. |
| L1, L2 | C82155 / BLM18HE152SN1D | 1.0000 | Exact JLCPCB import. |
| J1, J2 | C3323139 / SSQ-110-03-G-D | 0.1484 | Exact JLCPCB import. |
| A1 | C152563 / IRA-S210ST01 | 0.1387 copper; 0.0131 holes | Exact JLCPCB import. |
| D1-D3 | C72044, C72038, C2986030 | Not required | Exact JLCPCB imports. |
| J3, J4 | C5160785 / DZ254S-11-02-48 | Not required | Exact vertical SMT JLCPCB import; upright pins match TI's top view. |
| TP1, TP2 | C238122 / Keystone 5001 | Not required | Exact through-hole JLCPCB import. |

The release verifier rejects native `<chip>`, `<diode>`, `<led>`, `<pinheader>`, `<testpoint>`, or `<inductor>` instantiations in `index.circuit.tsx` so this policy cannot silently regress.
