import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const chart =
[
    {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
        {
            label: "Sales",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(0, 217, 84,0.2)",
            borderColor: "rgba(0, 217, 84,1)"
        }
        ]
    },
    {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
        {
            label: "Leads",
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            borderColor: "#"
        }
        ]
    }

]
    

export default function Chart(props:any) {
  return (
    <div>
        <span className="flex flex-row items-center ml-2 mb-2 font-bold text-[14px] text-oceanblue">
            <CurrencyDollarIcon className="w-5 h-5 mr-2" color="rgba(0, 217, 84,1)" />
            Sales
        </span>
        <div className="flex object-scale-down">
            {chart.map((data) => (
                <div className="w-1/2">
                <Line data={data} />
            </div>
            ))}
        </div>
    </div>
  );
}
