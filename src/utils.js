const serverUrl = "https://stock-chart-proxy.herokuapp.com/";

export function fetchStocksData(companyName, range) {
  const url = `${serverUrl}?companyName=${companyName}&range=${range}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error("Could not fetch stock data", error);
    });
}

export function getData(obj) {
  return {
    Date: `/Date(${new Date(obj.date).getTime()})/`,
    Close: obj.close,
    Volume: obj.volume,
    Open: obj.open,
    High: obj.high,
    Low: obj.low
  };
}
