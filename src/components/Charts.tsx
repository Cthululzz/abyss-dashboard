import { CalendarIcon, CheckCircle, Circle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const Charts = () => {
  const [barChartKey, setBarChartKey] = useState(0);

  const hoursActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    datasets: [
      {
        label: "Active Hours",
        data: [6.5, 7.2, 8, 7.5, 6.8, 4.5, 3.2],
        backgroundColor: "#ece883",
        borderRadius: 10,
        barPercentage: 0.65,
        categoryPercentage: 0.8,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#111827",
        borderColor: "#334155",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: false,

        callbacks: {
          label: (context: any) => `${context.raw} hours`,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#64748b",

          font: {
            size: 10,
          },
        },
      },

      y: {
        grid: {
          color: "rgba(100,116,139,0.15)",
        },

        ticks: {
          color: "#64748b",
          stepSize: 2,

          font: {
            size: 10,
          },

          callback: (value: any) => `${value}h`,
        },
      },
    },
  };

  const scheduleItems = [
    { time: "08:00", activity: "Morning Run", completed: true },
    { time: "10:00", activity: "Team Meeting", completed: true },
    { time: "12:00", activity: "Lunch Break", completed: true },
    { time: "14:00", activity: "Design Review", completed: false },
    { time: "16:00", activity: "Call with Client", completed: false },
    { time: "18:00", activity: "Evening Exercise", completed: false },
  ];

    const currentDate = new Date();

  const currentMonth = currentDate.toLocaleString("default", {
    month: "long",
  });

  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(
    currentYear,
    currentDate.getMonth(),
    1
  );

  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const calendarDays: (number | null)[] = [];

  const today = currentDate.getDate();

  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  useEffect(() => {
    setBarChartKey((prev) => prev + 1);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

      {/* Hours Activity */}
<div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
  <div className="flex items-center justify-between mb-2">
    <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
      Hours Activity
    </h2>

    <Clock className="w-3.5 h-3.5 text-[#ece883]" />
  </div>

  {/* Summary */}
  <div className="mb-5">
    <div className="flex items-end justify-between">
      <div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          43.7h
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Weekly Activity
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-green-500">
          +12%
        </p>

        <p className="text-[10px] text-gray-500 dark:text-gray-400">
          vs last week
        </p>
      </div>
    </div>
  </div>

  {/* Chart */}
  <div className="h-44">
    <Bar
      key={barChartKey}
      data={hoursActivityData}
      options={barChartOptions}
    />
  </div>
</div>

{/* Daily Schedule */}
<div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
  <div className="flex items-center justify-between mb-2">
    <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
      Daily Schedule
    </h2>

    <span className="text-[10px] text-gray-500 dark:text-gray-400">
      {currentDate.toLocaleDateString()}
    </span>
  </div>

  <div className="space-y-1.5">
    {scheduleItems.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        {item.completed ? (
          <CheckCircle className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 shrink-0" />
        ) : (
          <Circle className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 shrink-0" />
        )}

        <div className="flex-1 min-w-0">
          <p
            className={`text-xs font-medium ${
              item.completed
                ? "text-gray-400 line-through dark:text-gray-500"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.activity}
          </p>

          <p className="text-[10px] text-gray-400 dark:text-gray-500">
            {item.time}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Calendar */}
<div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
  <div className="flex items-center justify-between mb-2">
    <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
      Calendar
    </h2>

    <CalendarIcon className="w-3.5 h-3.5 text-[#ece883]" />
  </div>

  <div className="text-center mb-4">
    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize">
      {currentMonth} {currentYear}
    </p>
  </div>

  <div className="grid grid-cols-7 gap-1 mb-2">
    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
      <div
        key={index}
        className="py-1 text-center text-[11px] font-semibold text-gray-400 dark:text-gray-500"
      >
        {day}
      </div>
    ))}
  </div>

  <div className="grid grid-cols-7 gap-1">
    {calendarDays.map((day, index) => (
      <div
        key={index}
        className={`
          flex items-center justify-center
          h-8
          text-xs
          rounded-lg
          transition-all
          ${
            day === null
              ? "text-transparent"
              : "text-gray-700 dark:text-gray-300"
          }
          ${
            day === today
              ? "bg-[#ece883] text-gray-900 font-semibold shadow-md"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }
        `}
      >
        {day}
      </div>
    ))}
  </div>

  {/* Upcoming Events */}
  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
    <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
      Upcoming
    </p>

    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ece883]" />

        <p className="text-[10px] text-gray-600 dark:text-gray-400">
          Design Meeting - Tomorrow
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ece883]" />

        <p className="text-[10px] text-gray-600 dark:text-gray-400">
          Project Deadline - June 15
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Charts;