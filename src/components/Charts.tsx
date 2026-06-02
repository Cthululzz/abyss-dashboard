import { CalendarIcon, CheckCircle, Circle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Charts = () => {
  const [barChartKey, setBarChartKey] = useState(0);

  const hoursActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours Active",
        data: [2, 3, 4, 5, 6, 7, 8],
        backgroundColor: "#ece883",
        borderRadius: 6,
        barPercentage: 0.7,
        categoryPercentage: 0.95,
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
        callbacks: {
          label: function (context: any) {
            return `${context.raw} hours`;
          },
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
          color: "rgba(0, 0, 0, 0.5)",
        },

        ticks: {
          color: "#64748b",
          stepSize: 2,

          font: {
            size: 10,
          },

          callback: function (value: any) {
            return value + "h";
          },
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
      <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            Hours Activity
          </h2>

          <Clock className="w-3.5 h-3.5 text-[#ece883]" />
        </div>

        <div className="h-48">
          <Bar
            key={barChartKey}
            data={hoursActivityData}
            options={barChartOptions}
          />
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
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
      <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            Calendar
          </h2>

          <CalendarIcon className="w-3.5 h-3.5 text-[#ece883]" />
        </div>

        <div className="text-center mb-2">
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {currentMonth} {currentYear}
          </p>
        </div>

        <div className="grid grid-cols-7 gap-0.5 mb-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div
              key={index}
              className="text-center text-[10px] font-medium text-gray-500 dark:text-gray-400 py-0.5"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`text-center py-1 text-xs rounded-md transition-colors
                ${day === null ? "text-transparent" : "text-gray-700 dark:text-gray-300"}
                ${
                  day === today
                    ? "bg-[#ece883] text-gray-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }
                ${day === today ? "shadow-md" : "shadow-sm"}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
          <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">
            Upcoming
          </p>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#ece883]" />

              <p className="text-[10px] text-gray-600 dark:text-gray-400">
                Design Meeting - Tomorrow
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#ece883]" />

              <p className="text-[10px] text-gray-600 dark:text-gray-400">
                Project deadline - June 15
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Charts;