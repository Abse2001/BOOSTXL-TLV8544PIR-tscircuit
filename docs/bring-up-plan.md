# First-article bring-up and acceptance plan

Use a current-limited bench supply and an ESD-safe bench. Do not fit the board to an expensive LaunchPad until the standalone resistance and current checks pass.

## Before power

- Inspect Gerbers independently and run the fabricator-rule KiCad DRC.
- Verify all polarized/oriented parts: A1 drain/source/ground, U1/U2/U3 pin 1, D1-D5, J1/J2, and the IML-0688 tab direction.
- Check every rail to ground with an ohmmeter; reject an unexplained low resistance.
- Confirm J3 and J4 shunts are installed for normal operation or replaced by ammeters for current measurement.
- Inspect the 15-MΩ network for contamination and flux residue; clean/dry the analog section because surface leakage is comparable to its intended currents.

## Controlled power-up

1. Apply 3.3 V and 5 V from current-limited supplies through the matching header pins. Start with conservative current limits and stop on unexpected current or heating.
2. Confirm `V3P3_FILTERED`, `V3P3_TLV`, `V3P3_REF`, and `V3P3_INA` are approximately 3.3 V; confirm `V5_FILTERED` is approximately 5 V.
3. Measure the equal-resistor ladder: `REF_HIGH` 2.475 V, `REF_MID` 1.650 V, `REF_LOW` 0.825 V. Use tolerance-aware limits and investigate any meaningful ratio error.
4. Confirm U3 has 5 V at pin 5, ground at pin 2, and follower output within the expected offset of `V_POS_TLV`.
5. Read INA226 over I²C, confirm its address pins are grounded, and compare its shunt reading with a calibrated ammeter substituted for J4. Check zero and at least two known loads within the 5.461-µA measurement range.

## Analog/PIR verification

1. With A1 shielded from motion, allow the PIR sensor and high-value networks to settle. Record `PIR_VOUT_RAW`, `PIR_VO`, `U1A_OUT`, `U1B_OUT`, and both comparator outputs.
2. Inject a small isolated signal at `PIR_VO` before relying on the sensor. Verify the approximately 0.708-Hz to 10.61-Hz band and staged gain without driving either op-amp into saturation.
3. Install and align IML-0688 in its retaining housing. Move a warm human target across the designed field of view; verify analog response plus `PIR_OUT_HI`/`PIR_OUT_LO` transitions.
4. Repeat no-motion observation for false triggers while cycling nearby digital activity, radio, lighting, airflow, and supply conditions.
5. Test across the intended temperature and distance range. Tune gain only through a documented revision if the IRA-S210/IML-0688 combination differs materially from the obsolete original sensor.

## Acceptance record

Record board serial/revision, assembly supplier, BOM substitutions, supply currents, all voltage checkpoints, INA226-versus-ammeter error, detection distance/angle, false-trigger duration, temperature, and photos of lens alignment. Production release requires reproducible passing results from the chosen sample size, not just one successful motion event.
