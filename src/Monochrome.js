
import React from "react";
import ReactApexChart from "react-apexcharts";



class Monochrome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [25, 15, 44, 55, 41, 17],
            options: {
                chart: {
                    width: '100%',
                    type: 'pie',
                },
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                theme: {
                    monochrome: {
                        enabled: true
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5
                        }
                    }
                },
                title: {
                    text: "Monochrome Pie"
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + '%']
                    }
                },
                legend: {
                    show: false
                }
            },


        };
    }



    render() {
        return (


            <div id="chart" style={{ height: "400px", width: "400px" }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" />
            </div>


        );
    }
}

export default Monochrome

