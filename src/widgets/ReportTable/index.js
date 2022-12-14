import React from "react";
import { Pie } from "@ant-design/plots";

import { useOrlogo } from "./Modal/useOrlogo";
import { useZarlaga } from "./Modal/useZarlaga";

const ReportTable = () => {
  const { dataO, loadingO } = useOrlogo();
  const { dataZ, loadingZ } = useZarlaga();

  const config = {
    appendPadding: 10,
    dataO,
    angleField: "sold",
    colorField: "sex",
    radius: 0.8,
    legend: false,
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        fill: "#fff",
        fontSize: 18,
        textAlign: "center",
      },
    },
    pieStyle: ({ sex }) => {
      if (sex === "男") {
        return {
          fill: "p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png",
        };
      }

      return {
        fill: "p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png",
      };
    },
    tooltip: false,
    interactions: [
      {
        type: "element-single-selected",
      },
    ],
  };
  return <div>{/*<Pie {...config} />*/}</div>;
};

export default ReportTable;
