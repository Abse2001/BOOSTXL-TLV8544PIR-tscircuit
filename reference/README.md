# TI reference-data inventory

Collected on 2026-08-07 from official Texas Instruments pages.

## Exact BOOSTXL-TLV8544PIR sources

| Local file | TI document | Contents |
| --- | --- | --- |
| `boostxl-tlv8544pir/BOOSTXL-TLV8544PIR-user-guide-SNOU148A.pdf` | [SNOU148A](https://www.ti.com/lit/pdf/snou148a) | Exact board guide; Figures 27 and 28 are the complete published two-page schematic. |
| `boostxl-tlv8544pir/ultra-low-power-PIR-design-SNAA301.pdf` | [SNAA301](https://www.ti.com/lit/pdf/snaa301) | Application note explaining the low-power PIR analog front end. |
| `rendered-schematics/boostxl-tlv8544pir-schematic-22.png` | SNOU148A page 22 | Verified rendering of schematic page 1. |
| `rendered-schematics/boostxl-tlv8544pir-schematic-23.png` | SNOU148A page 23 | Verified rendering of schematic page 2. |
| `rendered-board/boostxl-tlv8544pir-top-view-04.png` | SNOU148A page 4 | Verified annotated top-view rendering for placement and footprint research. |
| `boostxl-tlv8544pir/component-inventory.csv` | Transcribed from Figures 27-28 | Initial designator/value inventory for reconstruction. |
| `datasheets/TLV8544-datasheet.pdf` | [TLV8544](https://www.ti.com/lit/ds/symlink/tlv8544.pdf) | Quad nanopower op-amp datasheet. |
| `datasheets/INA226-datasheet.pdf` | [INA226](https://www.ti.com/lit/ds/symlink/ina226.pdf) | I2C current/power monitor datasheet. |
| `boosterpack-standard/launchpad-boosterpack-design-guide-SLAA542.pdf` | [SLAA542](https://www.ti.com/lit/pdf/slaa542) | LaunchPad/BoosterPack mechanical and electrical design guidance. |
| `datasheets/IRA-S210ST01-datasheet.pdf` | [Murata IRA-S210ST01](https://www.murata.com/en-global/products/sensor/infrared/products-search/selectionguide) | Selected supported lead-type PIR sensor package and pin data. |
| `datasheets/IML-0688-datasheet.pdf` | [Murata IML-0688](https://www.murata.com/~/media/webrenewal/products/sensor/infrared/lens/iml_spec_0688_en.pdf) | Matching Fresnel-lens dimensions and retention requirements. |

## Additional component evidence

- [Molex 87898-0204 product page](https://www.molex.com/en-us/products/part-detail/0878980204) and [SD-87898-001 drawing](https://www.molex.com/content/dam/molex/molex-dot-com/products/automated/en-us/salesdrawingpdf/878/87898/878980654_sd.pdf): exact J3/J4 series, two circuits, 2.54-mm pitch, and the recommended 1.27 mm × 2.96 mm SMT lands.
- [JLCPCB C3331260](https://jlcpcb.com/partdetail/MOLEX-0878980204/C3331260): exact TI J3/J4 Molex part, listed for pre-order but absent from the current tscircuit/EasyEDA importer.
- [JLCPCB C5160785](https://jlcpcb.com/partdetail/DEALON-DZ254S_11_0248/C5160785): selected stocked J3/J4 replacement; 1×2, 2.54-mm vertical SMT header with 6-mm upright pins.
- [JLCPCB C238122](https://jlcpcb.com/partdetail/Keystone-5001/C238122): exact Keystone 5001 through-hole test point used for TP1/TP2.
- TI's TIDA-01398 BOM identifies the obsolete SMT A1 as `IRS-B210ST01-R1`. A TI engineering response says `IRA-S210ST01` performance should be similar or equal and identifies package as the difference. This supports the project's explicit substitute; it is not treated as an exact BOOSTXL BOM.
- [TI TLV333 data sheet](https://www.ti.com/lit/ds/symlink/tlv333.pdf): operating limits and pinout for the explicit U3 substitute.

TI's current product page does **not** publish native KiCad, Altium, Gerber, pick-and-place, or BOM files for the exact `BOOSTXL-TLV8544PIR`. A public web and GitHub search also found no trustworthy community-native CAD mirror for this exact board. The published electrical source is the schematic embedded in SNOU148A. The exact PCB layout will therefore need to be reconstructed from the schematic, board photographs, and BoosterPack header standard.

## Related TIDA-01398 files

`TIDA-01398` uses the same TLV8544-based low-power PIR concept but is a different wireless reference-design PCB. Do not use its layout, BOM, or CAD files as though they were the BoosterPack.

The directory `tida-01398/` contains TI's public design guide, schematic, BOM, assembly drawing, PCB layer plots, and the original Altium project. The archive was also extracted to `tida-01398/altium-source/`; it contains `.PrjPcb`, `.SchDoc`, and `.PcbDoc` files that recent KiCad versions may import as an Altium project.

## TI downloads requiring login/export approval

These have not been copied into the project because TI gates them behind myTI/export approval:

- [SPRCAG5 - BOOSTXL-TLV8544PIR firmware](https://www.ti.com/tool/download/SPRCAG5)
- [SNOC036 - BOOSTXL-TLV8544PIR Windows GUI](https://www.ti.com/tool/download/SNOC036)
- [TIDCD86 - TIDA-01398 Gerbers](https://www.ti.com/lit/zip/tidcd86)
- [TIDCD87 - TIDA-01398 firmware](https://www.ti.com/tool/download/TIDCD87)

## Original-source gaps and project disposition

- The PIR sensor part number is not printed on the published BoosterPack schematic. The project records the evidence for the obsolete `IRS-B210ST01-R1` and deliberately substitutes exact-import `IRA-S210ST01` plus its matching `IML-0688` lens.
- `U3` is shown electrically but its MPN is not printed. The project deliberately selects and qualifies `TLV333IDBVR`; it does not claim this was TI's original device.
- TI does not publish brands for the passives/LEDs. The project freezes deliberate production selections meeting the printed values and ratings in `manufacturing/procurement-status.csv`.
- SLAA542 defines the connector grid but not this board's expanded outline, three hole positions, chamfers, or lens retention. Those image-derived details still require a 1:1 physical overlay.
