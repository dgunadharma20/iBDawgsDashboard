import { Box } from "@mui/material";
import Header from "../../components/Header";
import Plot from 'react-plotly.js';
import graphData from '../../data/RandomForest.json';

const RandomForest = () => {
  return (
    <div>
      <Plot data={graphData.data} layout={graphData.layout} />
    </div>
  );
};

export default RandomForest;
