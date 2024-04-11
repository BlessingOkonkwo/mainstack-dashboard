"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import numbro from "numbro";
import Chart from "react-apexcharts";
import { useGetTransactionsQuery } from "@/redux/services/get-transactions.api-slice";

export const OVERVIEW_CHART_LEGEND = [{ label: "Deposit", color: "#CBD5E1" }];

const RevenueChart = () => {
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetTransactionsQuery();

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: true,
      },
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: 32,
    //     dataLabels: {
    //       total: {
    //         enabled: false,
    //       },
    //     },
    //   },
    // },
    grid: {
      show: false,
      borderColor: "#E2E8F0",
      strokeDashArray: 3,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#ff5403"],
    stroke: {
      width: [1, 1],
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "04/01/2022 GMT",
        "04/05/2022 GMT",
        "04/10/2022 GMT",
        "04/15/2022 GMT",
        "04/20/2022 GMT",
        "04/25/2022 GMT",
        "04/30/2022 GMT",
        // "04/07/2022 GMT",
        // "04/08/2022 GMT",
        // "04/09/2022 GMT",
        // "04/10/2022 GMT",
        // "04/11/2022 GMT",
        // "04/12/2022 GMT",
      ],
      position: "bottom",
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: true,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: "#7D8494",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: true,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
      title: {
        text: undefined,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 600,
        },
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "16px",
          fontFamily: "inherit",
        },
      },
    },
    yaxis: {
      show: false,
      logBase: 10,
      stepSize: 100,
      forceNiceScale: true,
      decimalsInFloat: 2,
      labels: {
        show: true,
        align: "left",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: "#7D8494",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
        formatter: (value: any) => {
          return numbro(value).format({
            thousandSeparated: true,
            spaceSeparated: true,
            average: true,
            totalLength: 2,
          });
        },
      },
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#FF1654",
      },
      title: {
        text: undefined,
        rotate: -90,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#7D8494",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    // tooltip: {
    //     style: {
    //       fontFamily: "inherit",
    //     },
    //   },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  const series = [
    {
      name: "Deposit",
      data: [160, 250, 500, 200, 400, 450, 150],
    },
  ];

  return (
    <div className="h-fit w-full max-w-[1200p]">
      <Chart
        options={options}
        series={series}
        type="line"
        width="700"
        height="257"
      />
    </div>
  );
};

export default RevenueChart;
