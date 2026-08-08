# Footprint conversion decisions

The project uses native tscircuit elements in `index.circuit.tsx` and accepts a footprinter string when `tsci convert <source> --footprinter --json` reports copper intersection-over-union (IoU) of at least 0.95. Below that threshold, exact generated or inline geometry is retained.

| Designator(s) | Compared geometry | Best relevant copper IoU | Production decision |
| --- | --- | ---: | --- |
| U1 | JLCPCB C2867322 / TLV8544PWR | 1.0000 | Native `chip`; `dfn14_p0.65mm_w7.3002mm_pw0.4mm_pl1.7mm`, rotated 90° at component level. |
| U2 | JLCPCB C49851 / INA226AIDGSR | 0.9623 | Native `chip`; package-correct `vssop10_p0.4999mm_pw0.28mm_pl1.62mm`, rotated 90° at component level. |
| D4, D5 | JLCPCB C507292 / 1N4148X-TP | 1.0000 | Native `diode`; `res_p1.4224mm_pw0.6096mm_ph0.4826mm`. |
| L1, L2 | JLCPCB C82155 / BLM18HE152SN1D | 1.0000 | Native `chip`; `res_p1.3998mm_pw0.8mm_ph0.864mm`. |
| J1, J2 | JLCPCB C3323139 / SSQ-110-03-G-D | 0.1484 | Below threshold; exact generated JLCPCB component retained. |
| J3, J4 | Molex drawing SD-87898-001 land pattern | 1.0000 | Native `pinheader`; `res_p2.54mm_pw1.27mm_ph2.96mm`. |
| A1 | Murata IRS-B210ST01-R1 reconstructed land pattern | 0.7321 | Below threshold; exact custom pads remain inline on the native `chip`. |

For U2, the unconstrained geometric search also found generic DFN/SOIC strings at 1.0000. They were not selected because INA226AIDGSR is a VSSOP-10 package and the 0.9623 VSSOP candidate is above the required threshold.

The converter initially emitted `pin1location(leftside,bottom)` for U1/U2. In the pinned tscircuit core this preserved copper geometry but shifted routed trace ownership by one pin. Removing that modifier and applying `pcbRotation={90}` to the native component produces the same pad coordinates with correct pin connectivity. A clean uncached build confirms 133 routed traces and zero circuit-JSON error elements.

U3 is not listed because TI's published BoosterPack material does not identify its manufacturer part number; its SOT-23-5 footprint remains explicitly provisional.
