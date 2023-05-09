import { Box, Typography } from "@mui/material";
import Plot from 'react-plotly.js';
import graphData from '../../data/KNeighbors.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Gaussian = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const plotLayout = {
    ...graphData.layout,
    title: { text: 'Learning Curve', font: { size: 20 } },
    font: { family: 'Arial', color: 'white' },
    plot_bgcolor: colors.primary[400],
    paper_bgcolor: colors.primary[400],
    margin: { l: 50, r: 50, b: 50, t: 50 },
    width: 500,
    height: 500,
    autosize: true
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor={colors.primary[500]}
    >
      <Typography color={colors.grey[100]} variant="h2" fontWeight="600" mb={4} margin-left="auto" margin-right="auto">
        K-Nearest Neighbors
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
        <Box marginLeft={3}>
          <Plot data={graphData.data} layout={plotLayout}/>
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          borderRadius="8px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
          p={4}
          marginRight={3}
        >
          <Typography color={colors.grey[100]} variant="h6" fontWeight="600" mb={2}>
            Performance Analysis
          </Typography>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Metric</th>
              <th style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>Value</th>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Accuracy</td>
              <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.989</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Precision</td>
              <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.989</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Recall</td>
              <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.992</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>F1 score</td>
              <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>0.991</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '8px' }}>Running time</td>
              <td style={{ textAlign: 'right', borderBottom: '1px solid #ccc', padding: '8px' }}>401.435 seconds</td>
            </tr>
          </table>
          <Typography color={colors.grey[100]} variant="body1" mt={4}>
          Overfitting is a phenomenon that occurs when a machine learning model is trained too well on a particular dataset. In other words, the model becomes too complex and starts to fit the noise in the dataset, rather than the underlying patterns or relationships. This means that the model is not able to generalize well to new, unseen data. Based on our evaluation of each model's accuracy and overfitting plot, we concluded that the K-NN model was the best choice. Unlike the other models, K-NN did not exhibit significant overfitting and had the highest accuracy. Additionally, given that our dataset is relatively small compared to larger datasets that may contain millions or billions of data points, K-NN is better suited for making predictions compared to Naive Bayes.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Gaussian;
