// const serverUrl = "https://stock-chart-proxy.herokuapp.com/";
const serverUrl = "http://localhost:3001"

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
