const serverUrl = "https://stock-chart-proxy.herokuapp.com/";

export function fetchData(symbol, range) {
  const url = `${serverUrl}?symbol=${symbol}&range=${range}`;

  return fetch(url).then(response => response.json());
}

export function massageData(obj) {
  return {
    Date: `/Date(${new Date(obj.date).getTime()})/`,
    Close: obj.close,
    Volume: obj.volume,
    Open: obj.open,
    High: obj.high,
    Low: obj.low
  };
}
