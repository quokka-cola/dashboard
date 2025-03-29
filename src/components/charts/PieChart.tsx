import React from "react";
import ReactApexChart from "react-apexcharts";

type ChartProps = {
  chartData: any[];  // ✅ Assurer que chartData est bien un tableau
  chartOptions: any;
};
type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class PieChart extends React.Component<ChartProps, ChartState> {
  constructor(props: ChartProps) {
    super(props);

    this.state = {
      // ✅ Ajout d'une valeur par défaut pour éviter l'erreur
      chartData: props.chartData && props.chartData.length > 0 ? props.chartData : [0],
      chartOptions: props.chartOptions || {},
    };
  }

  componentDidUpdate(prevProps: ChartProps) {
    // ✅ Vérifier si les props ont changé avant de mettre à jour le state
    if (prevProps.chartData !== this.props.chartData) {
      this.setState({
        chartData: this.props.chartData.length > 0 ? this.props.chartData : [0],
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
        type="pie"
        width="100%"
        height="100%"
      />
    );
  }
}

export default PieChart;

