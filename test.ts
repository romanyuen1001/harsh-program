let rawData = '[["[[\"Request\",\"do111DayEnd\"],[\"RequestID\",\"HKLT130-17110725.499\"],[\"RequestTime\",\"T20240917110725.499\"],[\"ReturnTo\",\"API\"],[\"Message\",\"[[\\\"ValDate\\\",\\\"2024-07-11\\\"],[\\\"ValuationType\\\",\\\"PRICE\\\"],[\\\"Trades\\\",\\\"[[\\\\\\\"idInstrument\\\\\\\",\\\\\\\"code\\\\\\\",\\\\\\\"exTicker\\\\\\\",\\\\\\\"name\\\\\\\",\\\\\\\"multiplier\\\\\\\",\\\\\\\"mainType\\\\\\\",\\\\\\\"riskType\\\\\\\",\\\\\\\"subType\\\\\\\",\\\\\\\"instruType\\\\\\\",\\\\\\\"assetClass\\\\\\\",\\\\\\\"curncy\\\\\\\",\\\\\\\"clearingHouse\\\\\\\",\\\\\\\"underlying\\\\\\\",\\\\\\\"riskRef\\\\\\\",\\\\\\\"lastUpdate\\\\\\\",\\\\\\\"FXgroup\\\\\\\",\\\\\\\"expiryDate\\\\\\\",\\\\\\\"valueDate\\\\\\\",\\\\\\\"payNotional\\\\\\\",\\\\\\\"payEff\\\\\\\",\\\\\\\"payExpiry\\\\\\\",\\\\\\\"payRollDate\\\\\\\",\\\\\\\"payCurncy\\\\\\\",\\\\\\\"payFreq\\\\\\\",\\\\\\\"paySpread\\\\\\\",\\\\\\\"payRate\\\\\\\",\\\\\\\"payRef\\\\\\\",\\\\\\\"pay_fixed_float\\\\\\\",\\\\\\\"pay_day_count\\\\\\\",\\\\\\\"pay_calc_basis\\\\\\\",\\\\\\\"payIndex\\\\\\\",\\\\\\\"payResetFreq\\\\\\\",\\\\\\\"pay_reset_delay\\\\\\\",\\\\\\\"pay_pay_delay\\\\\\\",\\\\\\\"pay_pay_calendar\\\\\\\",\\\\\\\"pay_fixing_calendar\\\\\\\",\\\\\\\"recNotional\\\\\\\",\\\\\\\"recEff\\\\\\\",\\\\\\\"recExpiry\\\\\\\",\\\\\\\"recRollDate\\\\\\\",\\\\\\\"recCurncy\\\\\\\",\\\\\\\"recFreq\\\\\\\",\\\\\\\"recSpread\\\\\\\",\\\\\\\"recRate\\\\\\\",\\\\\\\"recRef\\\\\\\",\\\\\\\"rec_fixed_float\\\\\\\",\\\\\\\"rec_day_count\\\\\\\",\\\\\\\"rec_calc_basis\\\\\\\",\\\\\\\"recIndex\\\\\\\",\\\\\\\"recResetFreq\\\\\\\",\\\\\\\"rec_reset_delay\\\\\\\",\\\\\\\"rec_pay_delay\\\\\\\",\\\\\\\"rec_pay_calendar\\\\\\\",\\\\\\\"rec_fixing_calendar\\\\\\\",\\\\\\\"pay_forward_curve_cp\\\\\\\",\\\\\\\"rec_forward_curve_cp\\\\\\\",\\\\\\\"pay_interpolation\\\\\\\",\\\\\\\"rec_interpolation\\\\\\\",\\\\\\\"pay_compounding_freq\\\\\\\",\\\\\\\"rec_compounding_freq\\\\\\\"],[138806,\\\\\\\"IR.IRS.NDIRS\\\\\\\",\\\\\\\"SL3H6Q28 Corp\\\\\\\",\\\\\\\"KRW Rec Fixed @ 1.895% Eff 21-Jun-2023 Exp 21-Jun-2025(Fixed  v CD 3M, Q v Q)\\\\\\\",1.00000000,\\\\\\\"IRS\\\\\\\",\\\\\\\"IRS\\\\\\\",\\\\\\\"IRS\\\\\\\",\\\\\\\"IRS\\\\\\\",\\\\\\\"IRR\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"LCH-SCM\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"2021-06-28T16:22:51\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",118690000000.00000000,\\\\\\\"2023-06-21\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",\\\\\\\"21\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"Q\\\\\\\",0E-8,0E-8,\\\\\\\"KWCDC  Index\\\\\\\",\\\\\\\"Float\\\\\\\",\\\\\\\"ACT/365.FIXED\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"CD\\\\\\\",\\\\\\\"Q\\\\\\\",1,0,\\\\\\\"SK, US\\\\\\\",\\\\\\\"SK\\\\\\\",118690000000.00000000,\\\\\\\"2023-06-21\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",\\\\\\\"21\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"Q\\\\\\\",0E-8,0.01895000,\\\\\\\"\\\\\\\",\\\\\\\"Fixed\\\\\\\",\\\\\\\"ACT/365.FIXED\\\\\\\",\\\\\\\"No Adj\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",0,0,\\\\\\\"SK, US\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"KRW.CTMS.Live.IRS.Offshore.3M.CD.MID\\\\\\\",null,\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\"],[\\\\\\\"idInstrument\\\\\\\",\\\\\\\"code\\\\\\\",\\\\\\\"exTicker\\\\\\\",\\\\\\\"name\\\\\\\",\\\\\\\"multiplier\\\\\\\",\\\\\\\"mainType\\\\\\\",\\\\\\\"riskType\\\\\\\",\\\\\\\"subType\\\\\\\",\\\\\\\"instruType\\\\\\\",\\\\\\\"assetClass\\\\\\\",\\\\\\\"curncy\\\\\\\",\\\\\\\"clearingHouse\\\\\\\",\\\\\\\"underlying\\\\\\\",\\\\\\\"riskRef\\\\\\\",\\\\\\\"lastUpdate\\\\\\\",\\\\\\\"FXgroup\\\\\\\",\\\\\\\"expiryDate\\\\\\\",\\\\\\\"valueDate\\\\\\\",\\\\\\\"payNotional\\\\\\\",\\\\\\\"payEff\\\\\\\",\\\\\\\"payExpiry\\\\\\\",\\\\\\\"payRollDate\\\\\\\",\\\\\\\"payCurncy\\\\\\\",\\\\\\\"payFreq\\\\\\\",\\\\\\\"paySpread\\\\\\\",\\\\\\\"payRate\\\\\\\",\\\\\\\"payRef\\\\\\\",\\\\\\\"pay_fixed_float\\\\\\\",\\\\\\\"pay_day_count\\\\\\\",\\\\\\\"pay_calc_basis\\\\\\\",\\\\\\\"payIndex\\\\\\\",\\\\\\\"payResetFreq\\\\\\\",\\\\\\\"pay_reset_delay\\\\\\\",\\\\\\\"pay_pay_delay\\\\\\\",\\\\\\\"pay_pay_calendar\\\\\\\",\\\\\\\"pay_fixing_calendar\\\\\\\",\\\\\\\"recNotional\\\\\\\",\\\\\\\"recEff\\\\\\\",\\\\\\\"recExpiry\\\\\\\",\\\\\\\"recRollDate\\\\\\\",\\\\\\\"recCurncy\\\\\\\",\\\\\\\"recFreq\\\\\\\",\\\\\\\"recSpread\\\\\\\",\\\\\\\"recRate\\\\\\\",\\\\\\\"recRef\\\\\\\",\\\\\\\"rec_fixed_float\\\\\\\",\\\\\\\"rec_day_count\\\\\\\",\\\\\\\"rec_calc_basis\\\\\\\",\\\\\\\"recIndex\\\\\\\",\\\\\\\"recResetFreq\\\\\\\",\\\\\\\"rec_reset_delay\\\\\\\",\\\\\\\"rec_pay_delay\\\\\\\",\\\\\\\"rec_pay_calendar\\\\\\\",\\\\\\\"rec_fixing_calendar\\\\\\\",\\\\\\\"pay_forward_curve_cp\\\\\\\",\\\\\\\"rec_forward_curve_cp\\\\\\\",\\\\\\\"pay_interpolation\\\\\\\",\\\\\\\"rec_interpolation\\\\\\\",\\\\\\\"pay_compounding_freq\\\\\\\",\\\\\\\"rec_compounding_freq\\\\\\\"],[138805,\\\\\\\"IR.IRS.NDIRS\\\\\\\",\\\\\\\"SL3H6Q28 Corp\\\\\\\",\\\\\\\"KRW Rec Fixed @ 1.895% Eff 21-Jun-2023 Exp 21-Jun-2025(Fixed  v CD 3M, Q v Q)\\\\\\\",1.00000000,\\\\\\\"IRS\\\\\\\",\\\\\\\"IRS\\\\\\\",\\\\\\\"IRS\\\\\\\",\\\\\\\"IRS\\\\\\\",\\\\\\\"IRR\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"LCH-SCM\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"2021-06-28T16:22:51\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",118690000000.00000000,\\\\\\\"2023-06-21\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",\\\\\\\"21\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"Q\\\\\\\",0E-8,0E-8,\\\\\\\"KWCDC  Index\\\\\\\",\\\\\\\"Float\\\\\\\",\\\\\\\"ACT/365.FIXED\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"CD\\\\\\\",\\\\\\\"Q\\\\\\\",1,0,\\\\\\\"SK, US\\\\\\\",\\\\\\\"SK\\\\\\\",118690000000.00000000,\\\\\\\"2023-06-21\\\\\\\",\\\\\\\"2025-06-21\\\\\\\",\\\\\\\"21\\\\\\\",\\\\\\\"KRW\\\\\\\",\\\\\\\"Q\\\\\\\",0E-8,0.01895000,\\\\\\\"\\\\\\\",\\\\\\\"Fixed\\\\\\\",\\\\\\\"ACT/365.FIXED\\\\\\\",\\\\\\\"No Adj\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",0,0,\\\\\\\"SK, US\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"KRW.CTMS.Live.IRS.Offshore.3M.CD.MID\\\\\\\",null,\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\",\\\\\\\"\\\\\\\"]]\\\"]]\"]]"]]';

 test(rawData);
export function test(data: any) {
// Step 1: Clean up double backslashes
let cleanedData = rawData.replace(/\\\\/g, '\\');
console.log("Step 1 - After removing double backslashes: ", cleanedData);

// Step 2: Replace escaped quotes
cleanedData = cleanedData.replace(/\\"/g, '"');
console.log("Step 2 - After replacing escaped quotes: ", cleanedData);

// Step 3: Log cleaned data to examine structure before parsing
console.log("Cleaned Data to parse: ", cleanedData);

// Step 4: Attempt to parse cleaned JSON string
try {
    let jsonData = JSON.parse(cleanedData);
    console.log(jsonData);
} catch (e) {
    console.error("Parsing error: ", e.message);
}
}