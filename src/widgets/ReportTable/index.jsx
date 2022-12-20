import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineController,
  LineElement,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-moment";
import { useOrlogo } from "../../widgets/HomeTable/Modal/useOrlogo";
import { useZarlaga } from "../../widgets/HomeTable/Modal/useZarlaga";
import { Pie, Line } from "react-chartjs-2";
import { Empty } from "antd";
import { useState } from "react";
import { useEffect } from "react";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  LineController,
  BarElement,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const ReportTable = () => {
  const { dataO } = useOrlogo();
  const { dataZ } = useZarlaga();

  // SUMS
  const orlogoSum = dataO?.reduce((acc, obj) => {
    return acc + parseInt(obj.orlogo, 10);
  }, 0);

  const zarlagaSum = dataZ?.reduce((acc, obj) => {
    return acc + parseInt(obj.zarlaga, 10);
  }, 0);

  // DATES
  const dateOrlogo = dataO.map((item) => {
    return {
      x: new Date(item["date"]),
      y: parseInt(item["orlogo"], 10),
    };
  });

  const dateZarlaga = dataZ.map((item) => {
    return {
      x: new Date(item["date"]).toDateString(),
      y: parseInt(item["zarlaga"], 10),
    };
  });

  // SORT DATES ASC
  const sortedOrlogo = dateOrlogo.sort(
    (objA, objB) => Number(objA.x) - Number(objB.x)
  );
  const sortedZarlaga = dateZarlaga.sort(
    (objA, objB) => Number(objA.x) - Number(objB.x)
  );

  const dateData = sortedOrlogo.filter(
    (item) => item.x.getFullYear().toString() === "2022"
  );

  const lineData = {
    datasets: [
      {
        label: "Orlogo",
        data: dateData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Zarlaga",
        data: sortedZarlaga,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      },
    ],
  };

  const pieData = {
    labels: ["Орлого", "Зарлага"],
    datasets: [
      {
        label: `Нийт ${orlogoSum + zarlagaSum}`,
        data: [orlogoSum, zarlagaSum],
        borderColor: "#742774",
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      },
    ],
  };

  return (
    <div className="Border">
      <div className="flex">
        <div className="pie">
          {pieData ? (
            <Pie
              width={400}
              height={400}
              data={pieData}
              options={{ maintainAspectRatio: false }}
            />
          ) : (
            <Empty />
          )}
        </div>
        <div className="line">
          <Line
            data={lineData}
            width={400}
            height={400}
            options={{
              maintainAspectRatio: false,
              responsive: true,

              scales: {
                x: {
                  type: "time",
                  time: {
                    unit: "day",
                    displayFormats: {
                      day: "M/D",
                    },
                    tooltipFormat: "Y/M/D H:M:S",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ReportTable;
