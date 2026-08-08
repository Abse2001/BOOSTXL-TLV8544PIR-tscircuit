# Footprint conversion decisions

`index.circuit.tsx` uses native tscircuit elements with a footprinter string when a package-correct `tsci convert <source> --footprinter --json` comparison reaches at least 0.95 copper intersection-over-union (IoU). Below that threshold, the exact JLCPCB import is retained.

| Designator(s) | Compared geometry | Best package-correct copper IoU | Decision |
| --- | --- | ---: | --- |
| U1 | C2867322 / TLV8544PWR | 1.0000 | Native `chip`; `dfn14_p0.65mm_w7.3002mm_pw0.4mm_pl1.7mm`. |
| U2 | C49851 / INA226AIDGSR | 0.9623 | Native `chip`; `vssop10_p0.4999mm_pw0.28mm_pl1.62mm`. |
| U3 | C473369 / TLV333IDBVR | 0.959821 | Native `chip`; `sot25_w2.2157mm_pl1.0276mm_pin1location(leftside,bottom)`. |
| D4, D5 | C507292 / 1N4148X-TP | 1.0000 | Native `diode`; `res_p1.4224mm_pw0.6096mm_ph0.4826mm`. |
| L1, L2 | C82155 / BLM18HE152SN1D | 1.0000 | Native `chip`; `res_p1.3998mm_pw0.8mm_ph0.864mm`. |
| J1, J2 | C3323139 / SSQ-110-03-G-D | 0.1484 | Below threshold; exact generated JLCPCB component retained. |
| J3, J4 | Molex SD-87898-001 land pattern | 1.0000 | Native `pinheader`; `res_p2.54mm_pw1.27mm_ph2.96mm`. |
| A1 | C152563 / IRA-S210ST01 | 0.1387 copper; 0.0131 holes | Below threshold; exact generated JLCPCB component retained. |

For U2, unconstrained search also returned generic DFN/SOIC shapes with higher scores. They were rejected because the physical package is VSSOP-10. Likewise, U3 uses the highest package-correct SOT-23-5 result rather than an unrelated 99.11% generic DFN result.

U1 and U2 omit a converter-proposed `pin1location` modifier and use component rotation because the pinned core otherwise preserved pad copper while shifting routed pin ownership. Explicit pin-coordinate/connectivity review and the zero-error release build validate the selected mapping.
