import React, { useState, useEffect } from "react";
import CanvasJSReact from "../../canvasJs/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("customColorSet1", [
  //colorSet Array
  "#7524d8",
  "#36aeed",
  "#eb98cc",
]);

const LineChart = ({ values }) => {
  console.log("values are ", values);
  const [options, setOptions] = useState();

  useEffect(() => {
    setOptions({
      animationEnabled: true,
      backgroundColor: "#2e2b3e",
      width: "650",

      colorSet: "customColorSet1",
      axisX: {
        labelFontColor: "white",
        valueFormatString: "D MMM YYYY",
        labelAngle: 0,
        interval: 1,
        intervalType: "day",
      },
      axisY: {
        labelFontColor: "white",
      },
      title: {
        text: "Statistics",
        fontColor: "white",
        fontFamily: "Arial",
        padding: 10,
      },
      data: [
        {
          type: "line",
          //   xValueFormatString: "D MMM YYYY",
          dataPoints: values,
        },
      ],
    });
  }, []);

  return (
    <div className="row">
      <div className="">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default LineChart;