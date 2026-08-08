# Mechanical integration

## Reconstructed board datum

The source uses millimetres with the board centered at `(0, 0)`:

- outline: 60.96 mm × 50.8 mm with 2.54-mm corner chamfers;
- J1 center: `(-17.78, 5.08)`;
- J2 center: `(25.40, 5.08)`;
- header-center separation: 43.18 mm; the two-row headers therefore span the standard 45.72-mm outer-column spacing;
- mounting holes: `(-27.94, 22.86)`, `(-27.94, -22.86)`, and `(27.94, -22.86)`, all 3.0-mm diameter; and
- PIR/lens center: `(20.50, -17.00)`.

The outline and placements are scaled from TI's official top view using the known 2.54-mm header grid. The TI BoosterPack standard defines the connector grid, but this particular board visibly extends asymmetrically beyond the basic BoosterPack envelope. Because no exact native board CAD was published, the numbers above are controlled reconstruction dimensions—not metrology of an original unit.

## J3/J4 current jumpers

TI's rendering and Molex's catalog show `87898-0204` as a 1×2, 2.54-mm vertical SMT header fitted with a removable shunt. JLCPCB lists that exact Molex part as C3331260 for pre-order, but it is not available through the current tscircuit/EasyEDA importer. The board therefore uses the stocked, exactly imported DEALON `DZ254S-11-02-48`, JLCPCB C5160785. It preserves the electrical function, pitch, row count, vertical SMT mounting, 6-mm upright pins, and removable-shunt interface.

J3 is placed just inside the left edge with its two upright pins running left-to-right, matching TI's top view; J4 uses the same vertical header rotated 90 degrees near the top edge. Fit 2.54-mm shunts such as JLCPCB C5305 for normal operation. Remove a shunt only when inserting an ammeter across that header. Confirm header and shunt clearance on the 1:1 overlay.

## A1 sensor

Murata `IRA-S210ST01` is a lead-type dual-element PIR sensor. Its manufacturer drawing specifies a 9.2-mm-diameter, 4.7-mm-high can, 0.45-mm leads, and drain/source/ground functions. The exact JLCPCB C152563 import supplies three 0.9144-mm drilled plated holes on its nonrectangular lead pattern and the manufacturer-scale courtyard/model.

This package change is deliberate: TI support reported that the obsolete `IRS-B210ST01-R1` and `IRA-S210ST01` should have similar or equal performance, with package being the difference. Sensitivity still requires first-article qualification.

## H1 lens and housing

Murata `IML-0688` is specified for `IRA-S210ST01`. Its drawing gives:

- 10.8 mm × 10.8 mm maximum plan envelope;
- 10.3-mm nominal circular base;
- 8.55-mm overall height; and
- keyed tabs that must align with the sensor/lens orientation.

Murata also states that the lens and sensor should be press-fit and that the equipment must include housing or other retention to prevent lens dislocation. The PCB silkscreen shows the 10.8-mm envelope for inspection, but silkscreen is not retention. The enclosure must locate the lens axially, preserve the tab orientation, avoid touching the sensor can, and exclude direct drafts/sunlight from the optical path.

## Mandatory 1:1 check

Before fabrication, export the PCB SVG/PDF at 100% scale and verify with calipers:

1. both header rows mate without force;
2. the three mounting holes align and do not clash with the LaunchPad;
3. the asymmetric outline clears USB connectors, jumpers, antennas, and enclosure walls;
4. J3/J4 bodies and removable shunts match the required access direction without colliding with nearby parts;
5. the A1 body and leads fit the exact holes; and
6. the IML-0688/housing stack centers over A1 without covering solderable parts or colliding with MH3.

Record the measured deviations in the hardware revision notes before ordering more than the first-article quantity.

Sources:

- `reference/boosterpack-standard/launchpad-boosterpack-design-guide-SLAA542.pdf`
- `reference/boostxl-tlv8544pir/BOOSTXL-TLV8544PIR-user-guide-SNOU148A.pdf`
- `reference/datasheets/IRA-S210ST01-datasheet.pdf`
- `reference/datasheets/IML-0688-datasheet.pdf`
- [Murata PIR selection guide](https://www.murata.com/en-global/products/sensor/infrared/products-search/selectionguide)
- [TI E2E obsolete-sensor response](https://e2e.ti.com/support/tools/simulation-hardware-system-design-tools-group/sim-hw-system-design/f/simulation-hardware-system-design-tools-forum/932724/tida-01398-irs-b210st01-r1-obsolete)
