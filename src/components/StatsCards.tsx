import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  TrendingDown,
  ArrowRight
} from "lucide-react"
import { useState } from "react"

const StatsCards = () => {
    const [statsData] = useState([
        {title: "Total Users", value: "1,235", change: "+14%", icon: Users},
        {title: "Revenue", value: "$92,256", change: "+23%", icon: DollarSign},
        {title: "New Orders", value: "345", change: "-5%", icon: ShoppingBag},
    ]);

    const isPositive = (change) => change.startsWith("+");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

            {statsData.map((stat, index) => {
                const Icon = stat.icon;
                const positive = isPositive(stat.change);

                return (
                    <div key={index} className="relative group">

                        <div
                            className={`absolute inset-0 bg-[#ece883] rounded-xl blur-xl opacity-0
                            group-hover:opacity-30 transition-opacity duration-500`}
                        />

                        <div className="relative bg-white dark:bg-gray-800/50 rounded-xl
                        p-4 border border-gray-100 dark:border-gray-700 hover:border-[#ece883]
                        dark:hover:border-[#ece883] transition-all duration-300">

                            <div className="flex items-center justify-between mb-3">

                                <div className="p-2 rounded-lg bg-[#ece883]/20">
                                    <Icon className="w-5 h-5 text-[#ece883]" />
                                </div>

                                <div
                                    className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs
                                    font-medium ${positive
                                        ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                                        : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                                    }`}
                                >
                                    {positive
                                        ? <TrendingUp className="w-3 h-3" />
                                        : <TrendingDown className="w-3 h-3" />
                                    }

                                    {stat.change}
                                </div>

                            </div>

                            <div className="space-y-1">

                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {stat.title}
                                </p>

                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                                    {stat.value}
                                </p>

                                <p className="text-[11px] text-gray-400 dark:text-gray-500">
                                    From last month
                                </p>

                            </div>

                        </div>

                    </div>
                );
            })}

            {/* View All Card */}
            <div className="relative group">

                <div
                    className={`absolute inset-0 bg-[#ece883] rounded-xl blur-xl opacity-0
                    group-hover:opacity-30 transition-opacity duration-500`}
                />

                <div className="relative bg-white dark:bg-gray-800/50 rounded-xl
                p-4 border border-gray-100 dark:border-gray-700 hover:border-[#ece883]
                dark:hover:border-[#ece883] transition-all duration-300 h-full flex flex-col
                items-center justify-center cursor-pointer hover:shadow-lg">

                    <div className="flex flex-col items-center gap-2">

                        <div className="p-2 rounded-full bg-[#ece883]/20 group-hover:bg-[#ece883]
                        transition-colors">

                            <ArrowRight className="w-5 h-5 text-[#ece883]" />

                        </div>

                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            View All
                        </p>

                        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center">
                            See all statistics
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default StatsCards