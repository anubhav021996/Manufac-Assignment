import * as echarts from "echarts";
import ecStat from "echarts-stat";
import { useEffect, useRef } from "react";
import { wineData } from "../wineData";
import styles from "./Charts.module.css";

const displayGraph = () => {
  let data = [];
  wineData.map((e) => {
    let arr = [e["Color intensity"], e["Hue"]];
    data.push(arr);
  });

  echarts.registerTransform(ecStat.transform.regression);
  let option = {
    dataset: [
      {
        source: data,
      },
      {
        transform: {
          type: "ecStat:regression",
          config: {
            method: "exponential",
          },
        },
      },
    ],
    title: {
      text: '"Color Intensity" vs "Hue" Scatter Plot',
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      name: "Color Intensity",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "Hue",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "scatter",
        type: "scatter",
        datasetIndex: 0,
      },
    ],
  };

  return option;
};

export const Scatter = () => {
  let chart = useRef(null);

  useEffect(() => {
    let option = displayGraph();
    let chartDom = chart.current;
    let myChart = echarts.init(chartDom);
    myChart.setOption(option);
  }, []);

  return <div className={styles.graph} ref={chart}></div>;
};
