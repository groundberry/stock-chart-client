import { getData } from "./utils";

describe("getData", () => {
  const obj = {
    change: 0.37,
    changeOverTime: 0,
    changePercent: 0.339,
    close: 109.45,
    date: "2018-12-13",
    high: 110.87,
    label: "Dec 13",
    low: 108.63,
    open: 109.58,
    unadjustedVolume: 31333362,
    volume: 31333362,
    vwap: 109.3687
  };
  const result = {
    Date: `/Date(${new Date(obj.date).getTime()})/`,
    Close: obj.close,
    Volume: obj.volume,
    Open: obj.open,
    High: obj.high,
    Low: obj.low
  };

  it("returns an object with the formatted data", () => {
    expect(getData(obj)).toEqual(result);
  });
});
