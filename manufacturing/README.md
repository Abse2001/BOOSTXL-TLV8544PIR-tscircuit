# Manufacturing review data

`procurement-status.csv` is the curated, frozen part-resolution ledger. It complements the automatically generated BOM inside the Gerber archive and records the selected electrical ratings, package, MPN, supplier ID, and validation action.

The ledger distinguishes exact imported parts, paper-qualified substitutes, fixed passives/LEDs, separately sourced hardware, and first-article validation actions. There are no remaining `TBD` electrical components.

Supplier inventory changes over time. Reconfirm every LCSC/JLCPCB part number and assembly tier immediately before ordering.
