import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler
);

type TasksProps = {
  className?: string;
};

const Tasks = ({ className }: TasksProps) => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],

    datasets: [
      {
        label: "Completed",
        data: [12, 19, 15, 27, 32, 38],
        borderColor: "#ece883",
        backgroundColor: "rgba(236, 232, 131, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "#ece883",
        tension: 0.4,
        fill: true,
      },

      {
        label: "Pending",
        data: [8, 12, 10, 9, 6, 4],
        borderColor: "#ece883",
        borderWidth: 2,
        pointBackgroundColor: "#ece883",
        tension: 0.4,
        borderDash: [5, 5],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          label: (ctx: any) =>
            `${ctx.dataset.label}: ${ctx.raw} tasks`,
        },
      },
    },

    scales: {
      y: {
        ticks: {
          color: "#64748b",
        },

        grid: {
          color: "rgba(236, 232, 131, 0.1)",
        },
      },

      x: {
        ticks: {
          color: "#64748b",
        },

        grid: {
          display: false,
        },
      },
    },
  };

  const total = data.datasets[0].data.reduce(
    (a, b) => a + b,
    0
  );

  const pending = data.datasets[1].data.reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div
      className={`
        bg-base-100
        p-6
        mb-6
        rounded-xl
        shadow-md
        dark:bg-white/5
        ${className ?? ""}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Tasks Overview
        </h2>

        <div className="flex gap-6">
          <div>
            <p className="text-xs text-gray-500">
              Completed
            </p>

            <p className="text-lg font-bold text-[#ece883]">
              {total}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              Pending
            </p>

            <p className="text-lg font-bold text-[#ece883]">
              {pending}
            </p>
          </div>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[2px] bg-[#ece883]" />

          <span className="text-xs text-gray-400">
            Completed
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 border-t-2 border-dashed border-[#ece883]" />

          <span className="text-xs text-gray-400">
            Pending
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Tasks;