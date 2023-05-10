import { Box, Typography } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/geo_map.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const plotLayout = {
    ...graphData.layout,
    title: { text: 'Learning Curve', font: { size: 20 } },
    font: { family: 'Arial', color: 'white' },
    plot_bgcolor: colors.primary[400],
    paper_bgcolor: colors.primary[400],
    margin: { l: 50, r: 50, b: 50, t: 50 },
    width: "auto",
    height: "auto",
    autosize: true
  };

  return (
    <Box margin={3}>
          <Plot data={graphData.data} layout={plotLayout} />
    </Box>
  );
};

export default Map;
