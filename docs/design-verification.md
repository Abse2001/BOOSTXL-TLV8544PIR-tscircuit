# Design verification basis

## Evidence hierarchy

1. **Electrical topology and values:** exact `BOOSTXL-TLV8544PIR` user guide SNOU148A, Figures 27 and 28.
2. **Package and operating limits:** each selected manufacturer's data sheet.
3. **Purchasing identity and imported geometry:** the recorded JLCPCB/LCSC IDs and exact EasyEDA imports.
4. **Supporting selection evidence:** the related TIDA-01398 BOM and TI E2E engineering response. TIDA-01398 is not treated as native CAD or an exact BOM for this BoosterPack.
5. **Mechanical placement:** TI's official top image scaled from the 2.54-mm BoosterPack header grid. This is explicitly an inference pending a 1:1 physical overlay.

The source uses the exact values printed by TI. Manufacturer part numbers for passives are frozen production selections meeting or exceeding the printed package/rating/dielectric requirements; they are not represented as TI's unpublished original brands.

## Calculated analog checkpoints

| Function | Components | Calculated result | Bring-up use |
| --- | --- | ---: | --- |
| First-stage AC gain | R9 = 1.50 MΩ; R6 = 6.81 kΩ | `1 + R9/R6 = 221.26 V/V` | Verify gain below clipping with a small injected signal. |
| First-stage lower corner | R6 = 6.81 kΩ; C5 = 33 µF | `1/(2πRC) = 0.708 Hz` | Slow motion should pass; DC drift should be rejected. |
| First-stage upper corner | R9 = 1.50 MΩ; C6 = 0.01 µF | `10.61 Hz` | High-frequency noise should roll off. |
| Second-stage midband gain magnitude | R7 = 15.0 MΩ; R13 = 68.1 kΩ | `220.26 V/V` | Verify with signal centered at `REF_MID`. |
| Second-stage lower corner | R13 = 68.1 kΩ; C9 = 3.3 µF | `0.708 Hz` | Matches the first stage. |
| Second-stage upper corner | R7 = 15.0 MΩ; C7 = 1000 pF | `10.61 Hz` | Matches the first stage. |
| Ideal combined midband gain magnitude | both stages | `48,736.6 V/V` | Explains why microvolt PIR changes reach comparator scale and why clean layout matters. |
| Comparator ladder at 3.3 V | four equal 15.0-MΩ resistors | `REF_HIGH = 2.475 V`; `REF_MID = 1.650 V`; `REF_LOW = 0.825 V` | Direct DMM acceptance points. |
| INA226 full-scale current through R21 | R21 = 15.0 kΩ; ±81.92-mV shunt range | `5.461 µA` | Confirms the intended measurement range. |
| TLV333 25 °C max-offset equivalent | 15 µV / 15.0 kΩ | `1.0 nA` | Bound for the U3 substitute's input-referred error. |
| INA226 shunt LSB equivalent | 2.5 µV / 15.0 kΩ | `0.167 nA/LSB` | Resolution checkpoint for current readback. |

The two cascaded stages will clip on normal motion; the ideal combined gain is a small-signal design check, not an expectation of linear full-scale output.

## Critical topology assertions

The automated release check verifies these error-prone details in the generated circuit JSON:

- C22 is connected from `V3P3_TLV` to `V_POS_TLV`, in parallel with R21.
- NT1 feeds `V3P3_TLV`; NT2 and NT3 then feed `V3P3_REF` and `V3P3_INA` from that rail.
- U3 is a 5-V-powered TLV333 follower sensing `V_POS_TLV` and driving INA226 `VIN-`.
- A1 drain, source, and ground map to `PIR_VIN1`, `PIR_VOUT_RAW`, and ground.
- All 70 source components carry MPNs and all automatically assembled parts carry supplier IDs.

## Source files

- `reference/boostxl-tlv8544pir/BOOSTXL-TLV8544PIR-user-guide-SNOU148A.pdf`
- `reference/tida-01398/TIDA-01398-BOM-TIDRQ45.pdf`
- `reference/datasheets/TLV8544-datasheet.pdf`
- `reference/datasheets/INA226-datasheet.pdf`
- `reference/datasheets/IRA-S210ST01-datasheet.pdf`
- `reference/datasheets/IML-0688-datasheet.pdf`
- [TI TLV333 data sheet](https://www.ti.com/lit/ds/symlink/tlv333.pdf)
