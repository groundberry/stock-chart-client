// const serverUrl = "https://stock-chart-proxy.herokuapp.com/";
const serverUrl = "http://localhost:3001";

export function fetchStocksData(companyName) {
  const url = `${serverUrl}?companyName=${companyName}`;

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
