import { ClientOnly } from "remix-utils/client-only";
import ChartComponent from "~/components/data-visualization/barChart.client";
import ChartOne from "~/components/data-visualization/barChart.client";
import ChartWrapper from "~/components/data-visualization/chartWrapper";

export default function ChartExample() {
  return (
    <ChartWrapper>
      <ChartComponent />
    </ChartWrapper>
  );
}
