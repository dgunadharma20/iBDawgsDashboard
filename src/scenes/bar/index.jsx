import { Box } from "@mui/material";
import Header from "../../components/Header";
import Plot from 'react-plotly.js';
import graphData from '../../scripts/graph.json';

const Bar = () => {
  return (
    <div>
      <Plot data={graphData.data} layout={graphData.layout} />
    </div>
  );
};

export default Bar;
