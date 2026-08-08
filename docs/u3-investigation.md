# U3 investigation and substitute qualification

## What TI publishes

SNOU148A Figure 28 defines U3 electrically but does not identify its manufacturer part number. The schematic and official board image establish a single op-amp in the standard SOT-23-5 pinout:

- pin 1 `OUT`, pin 2 `V-`, pin 3 `IN+`, pin 4 `IN-`, pin 5 `V+`;
- `OUT` tied to `IN-` as a unity-gain follower;
- 5-V supply and ground;
- `IN+` sensing `V+_TLV`; and
- `OUT` buffering the low side of R21 into INA226 `VIN-` while INA226 `VIN+` senses `3.3VTLV`.

TI's published material does not provide enough evidence to claim the exact original U3 identity.

## Selected production substitute

The reconstruction explicitly selects Texas Instruments `TLV333IDBVR`, JLCPCB/LCSC C473369. This is a substitute selection, not a claim about the original BOM.

The TI data sheet qualifies it for this follower:

- 1.8-V to 5.5-V operation, so a 5-V supply is valid;
- unity-gain stable;
- rail-to-rail input/output and common-mode range 0.1 V beyond both rails, covering the approximately 3.3-V sense node;
- standard DBV SOT-23-5 pinout matching Figure 28;
- 15-µV maximum input offset at 25 °C; and
- input bias current in the picoamp range.

At R21 = 15.0 kΩ, 15 µV corresponds to 1 nA of worst-case 25 °C input-referred current error. The INA226 shunt-voltage LSB of 2.5 µV corresponds to 0.167 nA through R21, so U3 offset is measurable but small relative to the board's microamp-scale current measurement.

## Footprint decision

`tsci import C473369 --jlcpcb --download --use-exact-footprint` supplies exact model provenance. The package-correct footprinter comparison produced 95.9821% copper IoU for:

`sot25_w2.2157mm_pl1.0276mm_pin1location(leftside,bottom)`

That clears the project's 95% rule, so `index.circuit.tsx` uses a native `chip` with explicit correct pin labels and the imported OBJ/STEP files. The generated import JSX is retained only as provenance because its automatically inferred aliases incorrectly combined pin functions.

## Remaining validation

The substitute is electrically and geometrically qualified on paper. First-article bring-up must still compare the INA226 reading with a calibrated series ammeter at room temperature and across the expected operating range. That test validates the complete signal chain, soldering, and actual offset rather than only the data-sheet limits.

Sources:

- [TI BOOSTXL-TLV8544PIR user guide](https://www.ti.com/lit/ug/snou148a/snou148a.pdf)
- [TI TLV333 data sheet](https://www.ti.com/lit/ds/symlink/tlv333.pdf)
- [JLCPCB TLV333IDBVR C473369](https://jlcpcb.com/partdetail/TexasInstruments-TLV333IDBVR/C473369)
