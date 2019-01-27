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
import "hammerjs";
import { massageData } from "./utils";

const CustomStockChart = props => {
  const { data } = props;
  const massagedData = data.map(massageData);

  const from = new Date(data[0].date);
  const to = new Date(data[data.length - 1].date);

  return (
    <StockChart>
      <ChartTitle text={`${props.company} - ${props.symbol}`} />
      <ChartSeries>
        <ChartSeriesItem
          data={massagedData}
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
            data={massagedData}
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
