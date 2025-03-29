import React from "react";
import ReactApexChart from "react-apexcharts";

type ChartProps = {
  chartData: any[];
  chartOptions: any;
};

type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class LineChart extends React.Component<ChartProps, ChartState> {
  constructor(props: ChartProps) {
    super(props);

    this.state = {
      // ✅ Toujours avoir une valeur par défaut
      chartData: props.chartData && props.chartData.length > 0 ? props.chartData : [{ name: "Data", data: [0] }],
      chartOptions: props.chartOptions || {},
    };
  }

  componentDidUpdate(prevProps: ChartProps) {
    // ✅ Vérifier si les props ont changé avant de mettre à jour l'état
    if (prevProps.chartData !== this.props.chartData) {
      this.setState({
        chartData: this.props.chartData.length > 0 ? this.props.chartData : [{ name: "Data", data: [0] }],
      });
    }
    if (prevProps.chartOptions !== this.props.chartOptions) {
      this.setState({
        chartOptions: this.props.chartOptions || {},
      });
    }
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;

