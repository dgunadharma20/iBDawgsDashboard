import { Box } from "@mui/material";
import Header from "../../components/Header";
import Plot from 'react-plotly.js';
import graphData from '../../data/GaussianNB.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


const Gaussian = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const customStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const plotLayout = {
    ...graphData.layout,  // spread the layout object from the JSON file
    title: { text: 'My Plotly Graph', font: { size: 20 } }, // add custom title font size
    font: { family: 'Arial', color: 'white' },  // set font family and color
    plot_bgcolor: colors.primary[400],  
    paper_bgcolor: colors.primary[400],
    margin: { l: 50, r: 50, b: 50, t: 50 },  // set plot margins
    width: 500,  // set plot width
    height: 500,  // set plot height
    autosize: true // set autosize to true
  };

  return (
    <div>
      <Header title="Gaussian Plot" />
      <div style={customStyle}>
        <Plot data={graphData.data} layout={plotLayout} />
      </div>
    </div>
  );
};

export default Gaussian;

