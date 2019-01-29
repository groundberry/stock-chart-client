const serverUrl = "https://stock-chart-proxy.herokuapp.com/";

export async function fetchData(symbol, range) {
  const url = `${serverUrl}?symbol=${symbol}&range=${range}`;

  const response = await fetch(url);
  return response.json();
}

export function massageData(obj) {
  return {
    Date: new Date(obj.date),
    Open: obj.open,
    Close: obj.close,
    Low: obj.low,
    High: obj.high,
  };
}
