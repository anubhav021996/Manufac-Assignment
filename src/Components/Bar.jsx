import * as echarts from "echarts";
import ecStat from "echarts-stat";
import { useEffect, useRef } from "react";
import { wineData } from "../wineData";
import styles from "./Charts.module.css";

const displayGraph = () => {
  let data = [];
  wineData.map((e) => {
    let arr = [e["Alcohol"], e["Malic Acid"]];
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
      text: '"Alcohol" vs "Malic Acid" Bar Chart',
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      name: "Alcohol",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "Malic Acid",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "bar",
        type: "bar",
        datasetIndex: 0,
      },
    ],
  };

  return option;
};

export const Bar = () => {
  let chart = useRef(null);

  useEffect(() => {
    let option = displayGraph();
    let chartDom = chart.current;
    let myChart = echarts.init(chartDom);
    myChart.setOption(option);
  }, []);

  return <div className={styles.graph} ref={chart}></div>;
};
