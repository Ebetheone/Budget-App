import React from "react";
import { Pie } from "@ant-design/plots";

import { useOrlogo } from "./Modal/useOrlogo";
import { useZarlaga } from "./Modal/useZarlaga";

const ReportTable = () => {
  const { dataO, loadingO } = useOrlogo();
  const { dataZ, loadingZ } = useZarlaga();

  const pieData = [
    {
      type: "Нийт орлого",
      value: dataO.orlogo || 0,
    },
    {
      type: "Нийт зарлага",
      value: dataZ.zarlaga || 0,
    },
  ];

  const config = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v || 0}`,
      },
    },
    legend: {
      layout: "vertical",
      position: "bottom",
      itemName: true,
      label: true,
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
      interactions: [
        {
          type: "element-selected",
        },
        {
          type: "element-active",
        },
        {
          type: "pie-statistic-active",
        },
      ],
    },
  };

  return (
    <div>
      <h1>Санхүү</h1>
      <Pie autoFit {...config} />
    </div>
  );
};

export default ReportTable;
