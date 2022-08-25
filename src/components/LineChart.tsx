import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Typography, Row, Col } from "antd";

Chart.register(...registerables);

type LineChartPropType = {
  coinName: string;
  coinHistory: any;
  currentPrice: any;
};

const LineChart = ({
  coinName,
  coinHistory,
  currentPrice,
}: LineChartPropType) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  console.log({ coinHistory });
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options: any = {
    scales: {
      y: { min: 0 },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2}>{coinName} Price Chart</Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
};

export default LineChart;
