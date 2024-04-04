import ApexChart from "~/components/data-visualization/barChart";

export default function ChartPage() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    series: [12, 19, 3, 5, 2, 3],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Data Visualization</h1>
      <ApexChart />
    </div>
  );
}
