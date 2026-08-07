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

## Known source gaps

- The exact PIR sensor part number is not printed on the published BoosterPack schematic.
- `U3` is shown as a five-pin unity-gain buffer, but its manufacturer part number/value is not printed.
- Package/footprint metadata is incomplete for many passives and LEDs; it must be recovered from board imagery or selected deliberately during reconstruction.
