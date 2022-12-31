import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { wineData } from "../wineData";

export const Main = () => {
  let chart = useRef(null);

  useEffect(() => {
    let data = [];
    wineData.map((e) => {
      let arr = [e["Malic Acid"], e["Ash"]];
      data.push(arr);
    });

    let option = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: data,
          type: "scatter",
        },
      ],
    };

    let chartDom = chart.current;
    let myChart = echarts.init(chartDom);
    myChart.setOption(option);
  }, []);

  return (
    <>
      <div style={{ height: "1000px", width: "1000px" }} ref={chart}></div>
    </>
  );
};
