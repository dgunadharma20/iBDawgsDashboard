import { Box } from "@mui/material";
import Header from "../../components/Header";
import Plot from 'react-plotly.js';
import graphData from '../../data/KNeighbors.json';

const KNeighbors = () => {
  return (
    <div>
      <Plot data={graphData.data} layout={graphData.layout} />
    </div>
  );
};

export default KNeighbors;
