# Manufacturing review data

`procurement-status.csv` is the curated part-resolution ledger. It complements the automatically generated `bom.csv` inside the Gerber archive, which currently carries values and JLCPCB IDs but omits custom-part manufacturer fields.

The ledger distinguishes:

- exact JLCPCB/EasyEDA imports already used by the source;
- manufacturer-defined custom footprints with no exact JLCPCB match;
- generic passives that still need voltage, tolerance, power, dielectric, polarity, and LCSC selections; and
- identity or mechanical blockers that must be resolved before fabrication.

Supplier inventory changes over time. Reconfirm every LCSC/JLCPCB part number and assembly tier immediately before ordering.
