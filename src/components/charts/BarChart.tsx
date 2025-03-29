import React from "react";
import Chart from "react-apexcharts";

type ChartProps = {
  chartData: { name: string; data: number[] }[];
  chartOptions: any;
};

type ChartState = {
  chartData: { name: string; data: number[] }[];
  chartOptions: any;
};

class BarChart extends React.Component<ChartProps, ChartState> {
  constructor(props: ChartProps) {
    super(props);

    this.state = {
      // ✅ Assure que chartData a une valeur correcte au chargement
      chartData: props.chartData && props.chartData.length > 0 ? props.chartData : [{ name: "Default", data: [0] }],
      chartOptions: props.chartOptions || {},
    };
  }

  componentDidUpdate(prevProps: ChartProps) {
    // ✅ Vérifie si les props ont changé avant de mettre à jour l'état
    if (prevProps.chartData !== this.props.chartData) {
      this.setState({
        chartData: this.props.chartData.length > 0 ? this.props.chartData : [{ name: "Default", data: [0] }],
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
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BarChart;
