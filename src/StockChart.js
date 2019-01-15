import React from "react";

import {
  StockChart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem
} from "@progress/kendo-react-charts";
import "@progress/kendo-theme-default/dist/all.css";
import "hammerjs";
import { getData } from "./utils";

const CustomStockChart = props => {
  const { stockData } = props;
  const processedStockData = stockData.map(getData);

  const from = new Date(stockData[0].date);
  const to = new Date(stockData[stockData.length - 1].date);

  return (
    <StockChart>
      <ChartTitle text={`${props.company} - ${props.symbol}`} />
      <ChartSeries>
        <ChartSeriesItem
          data={processedStockData}
          type="candlestick"
          openField="Open"
          closeField="Close"
          lowField="Low"
          highField="High"
          categoryField="Date"
        />
      </ChartSeries>
      <ChartNavigator>
        <ChartNavigatorSelect from={from} to={to} />
        <ChartNavigatorSeries>
          <ChartNavigatorSeriesItem
            data={processedStockData}
            type="area"
            field="Close"
            categoryField="Date"
          />
        </ChartNavigatorSeries>
      </ChartNavigator>
    </StockChart>
  );
};

export default CustomStockChart;
