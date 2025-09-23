import React from "react";

const Charts = () => {
  return (
    <div>
      <div className="container">
        <div className="page-inner">
          <h3 className="fw-bold mb-3">Chart.js</h3>
          <div className="page-category">
            Simple yet flexible JavaScript charting for designers & developers.
            Please checkout their
            <a href="http://www.chartjs.org/" target="_blank">
              full documentation
            </a>
            .
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Line Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bar Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="barChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Pie Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas
                      id="pieChart"
                      style="width: 50%; height: 50%"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Doughnut Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas
                      id="doughnutChart"
                      style="width: 50%; height: 50%"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Radar Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="radarChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bubble Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="bubbleChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Multiple Line Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="multipleLineChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Multiple Bar Chart</div>
                </div>
                <div className="card-body">
                  <div className="chart-container">
                    <canvas id="multipleBarChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Chart with HTML Legends</div>
                </div>
                <div className="card-body">
                  <div className="card-sub">
                    Sometimes you need a very complex legend. In these cases, it
                    makes sense to generate an HTML legend. Charts provide a
                    generateLegend() method on their prototype that returns an
                    HTML string for the legend.
                  </div>
                  <div className="chart-container">
                    <canvas id="htmlLegendsChart"></canvas>
                  </div>
                  <div id="myChartLegend"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
