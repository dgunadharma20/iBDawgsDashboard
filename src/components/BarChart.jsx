import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { mockBarData as data } from "../data/bardata";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();

  // sort the data array in descending order based on the values
  data.sort((a, b) => b.value - a.value);

  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    theme.palette.info.main,
    theme.palette.success.main,
  ];

  const getColor = (bar) => {
    return colors[bar.index % colors.length];
  };

  return (
    <ResponsiveBar
      data={data}
<<<<<<< HEAD
      keys={["value"]}
      indexBy="key"
      margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
=======
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["DDoS", "DDoS_GoldenEye", "DDoS_Hulk", "DDoS_Slowhttotest", "DDoS_Slowloris", "DDoS_SlowPost"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
>>>>>>> 24a4df5c9f1bb73090af5f489fce862e3de1ad03
      padding={0.3}
      layout="vertical"
      colors={getColor}
      enableGridX={false}
      enableGridY={true}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Feature",
        legendPosition: "middle",
        legendOffset: 40,
        format: (value) => value,
        style: {
          fontSize: 12,
          fill: theme.palette.text.primary, // Added this line
        },
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Percentage",
        legendPosition: "middle",
        legendOffset: -50,
        format: (value) => `${value}%`,
        style: {
          fontSize: 12,
          fill: theme.palette.text.primary, // Added this line
        },
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      role="application"
      barAriaLabel={(e) => `${e.data.key}: ${e.data.value}%`}
      // other props
    />
  );
};

export default BarChart;