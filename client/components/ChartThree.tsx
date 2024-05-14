import { ApexOptions } from "apexcharts";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: number[];
}

// const options: ApexOptions = {
//   chart: {
//     fontFamily: "Satoshi, sans-serif",
//     type: "donut",
//   },
//   colors: ["#39cc57", "#20222e",
//   //  "#8FD0EF", "#0FADCF"
//   ],
//   labels: ["Weight(in KG)", "Height(In CM)", "Mobile", "Unknown"],
//   legend: {
//     show: false,
//     position: "bottom",
//   },

//   plotOptions: {
//     pie: {
//       donut: {
//         size: "65%",
//         background: "transparent",
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   responsive: [
//     {
//       breakpoint: 2600,
//       options: {
//         chart: {
//           width: 380,
//         },
//       },
//     },
//     {
//       breakpoint: 640,
//       options: {
//         chart: {
//           width: 200,
//         },
//       },
//     },
//   ],
// };

const WeightChart: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65,23],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      // series: [65, 34, 12, 56],
      series: [65,23],
    }));
  };
  handleReset;
  const [username,setName] = useState('')
  const [message,setMessage] = useState('')
  useEffect(()=>{
    console.log("entered in setMessage")
    axios.get('http://localhost:9900/toke').then(res=>{
      if(res.data.Status === "Success"){
        setName(res.data.name)
      } else {
        setMessage(res.data.Message)
      }
    })
  },[])
  const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#39cc57", "#20222e",
  //  "#8FD0EF", "#0FADCF"
  ],
  labels: ["Weight(in KG)", "Height(In CM)", "Mobile", "Unknown"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Height and Weight of {username}
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      {/* <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Desktop </span>
              <span> 65% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Tablet </span>
              <span> 34% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Mobile </span>
              <span> 45% </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Unknown </span>
              <span> 12% </span>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WeightChart;
