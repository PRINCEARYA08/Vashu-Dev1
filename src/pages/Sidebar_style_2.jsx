import React from 'react'

const Sidebar_style_2 = () => {
  return (
    <div>
      <div className="wrapper sidebar_minimize">
      {/* <!-- Sidebar --> */}
       
      {/* <!-- End Sidebar --> */}

      <div className="main-panel">
        

        <div className="container">
          <div className="page-inner">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
              <div>
                <h3 className="fw-bold mb-3">Dashboard</h3>
                <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
              </div>
              <div className="ms-md-auto py-2 py-md-0">
                <a href="#" className="btn btn-label-info btn-round me-2">
                  Manage
                </a>
                <a href="#" className="btn btn-primary btn-round">
                  Add Customer
                </a>
              </div>
            </div>
            <div className="row row-card-no-pd">
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>
                          <b>Todays Income</b>
                        </h6>
                        <p className="text-muted">All Customs Value</p>
                      </div>
                      <h4 className="text-info fw-bold">$170</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-info w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">75%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>
                          <b>Total Revenue</b>
                        </h6>
                        <p className="text-muted">All Customs Value</p>
                      </div>
                      <h4 className="text-success fw-bold">$120</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-success w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">25%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>
                          <b>New Orders</b>
                        </h6>
                        <p className="text-muted">Fresh Order Amount</p>
                      </div>
                      <h4 className="text-danger fw-bold">15</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-danger w-50"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">50%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6>
                          <b>New Users</b>
                        </h6>
                        <p className="text-muted">Joined New User</p>
                      </div>
                      <h4 className="text-secondary fw-bold">12</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-secondary w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">25%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">User Statistics</div>
                      <div className="card-tools">
                        <a
                          href="#"
                          className="btn btn-label-success btn-round btn-sm me-2"
                        >
                          <span className="btn-label">
                            <i className="fa fa-pencil"></i>
                          </span>
                          Export
                        </a>
                        <a href="#" className="btn btn-label-info btn-round btn-sm">
                          <span className="btn-label">
                            <i className="fa fa-print"></i>
                          </span>
                          Print
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container" style={{minHeight: 375}}>
                      <canvas id="statisticsChart"></canvas>
                    </div>
                    <div id="myChartLegend"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-primary">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">Daily Sales</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-label-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Export
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-category">March 25 - April 02</div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="mb-4 mt-2">
                      <h1>$4,578.58</h1>
                    </div>
                    <div className="pull-in">
                      <canvas id="dailySalesChart"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-primary">+5%</div>
                    <h2 className="mb-2">17</h2>
                    <p className="text-muted">Users online</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-primary">+5%</div>
                    <h2 className="mb-2">17</h2>
                    <p className="text-muted">Users online</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-danger">-3%</div>
                    <h2 className="mb-2">27</h2>
                    <p className="text-muted">New Users</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="h1 fw-bold float-end text-warning">+7%</div>
                    <h2 className="mb-2">213</h2>
                    <p className="text-muted">Transactions</p>
                    <div className="pull-in sparkline-fix">
                      <div id="lineChart3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Top Products</div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src="assets/img/logoproduct.svg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex-1 pt-1 ms-2">
                        <h6 className="fw-bold mb-1">CSS</h6>
                        <small className="text-muted">Cascading Style Sheets</small>
                      </div>
                      <div className="d-flex ms-auto align-items-center">
                        <h4 className="text-info fw-bold">+$17</h4>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src="assets/img/logoproduct.svg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex-1 pt-1 ms-2">
                        <h6 className="fw-bold mb-1">J.CO Donuts</h6>
                        <small className="text-muted">The Best Donuts</small>
                      </div>
                      <div className="d-flex ms-auto align-items-center">
                        <h4 className="text-info fw-bold">+$300</h4>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src="assets/img/logoproduct3.svg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex-1 pt-1 ms-2">
                        <h6 className="fw-bold mb-1">Ready Pro</h6>
                        <small className="text-muted">
                          Bootstrap 5 Admin Dashboard
                        </small>
                      </div>
                      <div className="d-flex ms-auto align-items-center">
                        <h4 className="text-info fw-bold">+$350</h4>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="pull-in">
                      <canvas id="topProductsChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title fw-mediumbold">Suggested People</div>
                    <div className="card-list">
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/jm_denis.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Jimmy Denis</div>
                          <div className="status">Graphic Designer</div>
                        </div>
                        <button className="btn btn-icon btn-primary btn-round btn-xs">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/chadengle.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Chad</div>
                          <div className="status">CEO Zeleaf</div>
                        </div>
                        <button className="btn btn-icon btn-primary btn-round btn-xs">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/talha.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Talha</div>
                          <div className="status">Front End Designer</div>
                        </div>
                        <button className="btn btn-icon btn-primary btn-round btn-xs">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/mlane.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">John Doe</div>
                          <div className="status">Back End Developer</div>
                        </div>
                        <button className="btn btn-icon btn-primary btn-round btn-xs">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/talha.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Talha</div>
                          <div className="status">Front End Designer</div>
                        </div>
                        <button className="btn btn-icon btn-primary btn-round btn-xs">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-list">
                        <div className="avatar">
                          <img
                            src="assets/img/jm_denis.jpg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="info-user ms-3">
                          <div className="username">Jimmy Denis</div>
                          <div className="status">Graphic Designer</div>
                        </div>
                        <button className="btn btn-icon btn-primary btn-round btn-xs">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-primary bg-primary-gradient">
                  <div className="card-body">
                    <h5 className="mt-3 b-b1 pb-2 mb-4 fw-bold">
                      Active user right now
                    </h5>
                    <h1 className="mb-4 fw-bold">17</h1>
                    <h5 className="mt-3 b-b1 pb-2 mb-5 fw-bold">
                      Page view per minutes
                    </h5>
                    <div id="activeUsersChart"></div>
                    <h5 className="mt-5 pb-3 mb-0 fw-bold">Top active pages</h5>
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between pb-1 pt-1">
                        <small>/product/readypro/index.html</small>{" "}
                        <span>7</span>
                      </li>
                      <li className="d-flex justify-content-between pb-1 pt-1">
                        <small>/product/kaiadmin/demo.html</small>{" "}
                        <span>10</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Page visits</div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      {/* <!-- Projects table  */}
                      <table className="table align-items-center mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Page name</th>
                            <th scope="col">Visitors</th>
                            <th scope="col">Unique users</th>
                            <th scope="col">Bounce rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">/kaiadmin/</th>
                            <td>4,569</td>
                            <td>340</td>
                            <td>
                              <i className="fas fa-arrow-up text-success me-3"></i>
                              46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/kaiadmin/index.html</th>
                            <td>3,985</td>
                            <td>319</td>
                            <td>
                              <i className="fas fa-arrow-down text-warning me-3"></i>
                              46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/kaiadmin/charts.html</th>
                            <td>3,513</td>
                            <td>294</td>
                            <td>
                              <i className="fas fa-arrow-down text-warning me-3"></i>
                              36,49%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/kaiadmin/tables.html</th>
                            <td>2,050</td>
                            <td>147</td>
                            <td>
                              <i className="fas fa-arrow-up text-success me-3"></i>
                              50,87%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/kaiadmin/profile.html</th>
                            <td>1,795</td>
                            <td>190</td>
                            <td>
                              <i className="fas fa-arrow-down text-danger me-3"></i>
                              46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/kaiadmin/</th>
                            <td>4,569</td>
                            <td>340</td>
                            <td>
                              <i className="fas fa-arrow-up text-success me-3"></i>
                              46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">/kaiadmin/index.html</th>
                            <td>3,985</td>
                            <td>319</td>
                            <td>
                              <i className="fas fa-arrow-down text-warning me-3"></i>
                              46,53%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Top Products</div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src="assets/img/logoproduct.svg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex-1 pt-1 ms-2">
                        <h6 className="fw-bold mb-1">CSS</h6>
                        <small className="text-muted">Cascading Style Sheets</small>
                      </div>
                      <div className="d-flex ms-auto align-items-center">
                        <h4 className="text-info fw-bold">+$17</h4>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src="assets/img/logoproduct.svg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex-1 pt-1 ms-2">
                        <h6 className="fw-bold mb-1">J.CO Donuts</h6>
                        <small className="text-muted">The Best Donuts</small>
                      </div>
                      <div className="d-flex ms-auto align-items-center">
                        <h4 className="text-info fw-bold">+$300</h4>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          src="assets/img/logoproduct3.svg"
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="flex-1 pt-1 ms-2">
                        <h6 className="fw-bold mb-1">Ready Pro</h6>
                        <small className="text-muted">
                          Bootstrap 5 Admin Dashboard
                        </small>
                      </div>
                      <div className="d-flex ms-auto align-items-center">
                        <h4 className="text-info fw-bold">+$350</h4>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="pull-in">
                      <canvas id="topProductsChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-card-no-pd">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <h4 className="card-title">Users Geolocation</h4>
                      <div className="card-tools">
                        <button className="btn btn-icon btn-link btn-primary btn-xs">
                          <span className="fa fa-angle-down"></span>
                        </button>
                        <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                          <span className="fa fa-sync-alt"></span>
                        </button>
                        <button className="btn btn-icon btn-link btn-primary btn-xs">
                          <span className="fa fa-times"></span>
                        </button>
                      </div>
                    </div>
                    <p className="card-category">
                      Map of the distribution of users around the world
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="table-responsive table-hover table-sales">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/id.png"
                                      alt="indonesia"
                                    />
                                  </div>
                                </td>
                                <td>Indonesia</td>
                                <td className="text-end">2.320</td>
                                <td className="text-end">42.18%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/us.png"
                                      alt="united states"
                                    />
                                  </div>
                                </td>
                                <td>USA</td>
                                <td className="text-end">240</td>
                                <td className="text-end">4.36%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/au.png"
                                      alt="australia"
                                    />
                                  </div>
                                </td>
                                <td>Australia</td>
                                <td className="text-end">119</td>
                                <td className="text-end">2.16%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/ru.png"
                                      alt="russia"
                                    />
                                  </div>
                                </td>
                                <td>Russia</td>
                                <td className="text-end">1.081</td>
                                <td className="text-end">19.65%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/cn.png"
                                      alt="china"
                                    />
                                  </div>
                                </td>
                                <td>China</td>
                                <td className="text-end">1.100</td>
                                <td className="text-end">20%</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="flag">
                                    <img
                                      src="assets/img/flags/br.png"
                                      alt="brazil"
                                    />
                                  </div>
                                </td>
                                <td>Brasil</td>
                                <td className="text-end">640</td>
                                <td className="text-end">11.63%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mapcontainer">
                          <div
                            id="world-map"
                            className="w-100"
                            style={{height: 300}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-head-row card-tools-still-right">
                      <div className="card-title">Recent Activity</div>
                      <div className="card-tools">
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-clean"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ol className="activity-feed">
                      <li className="feed-item feed-item-secondary">
                        <time className="date" datetime="9-25">
                          Sep 25
                        </time>
                        <span className="text">
                          Responded to need
                          <a href="#">"Volunteer opportunity"</a>
                        </span>
                      </li>
                      <li className="feed-item feed-item-success">
                        <time className="date" datetime="9-24">
                          Sep 24
                        </time>
                        <span className="text">
                          Added an interest
                          <a href="#">"Volunteer Activities"</a>
                        </span>
                      </li>
                      <li className="feed-item feed-item-info">
                        <time className="date" datetime="9-23">
                          Sep 23
                        </time>
                        <span className="text">
                          Joined the group
                          <a href="single-group.php">"Boardsmanship Forum"</a>
                        </span>
                      </li>
                      <li className="feed-item feed-item-warning">
                        <time className="date" datetime="9-21">
                          Sep 21
                        </time>
                        <span className="text">
                          Responded to need
                          <a href="#">"In-Kind Opportunity"</a>
                        </span>
                      </li>
                      <li className="feed-item feed-item-danger">
                        <time className="date" datetime="9-18">
                          Sep 18
                        </time>
                        <span className="text">
                          Created need
                          <a href="#">"Volunteer Opportunity"</a>
                        </span>
                      </li>
                      <li className="feed-item">
                        <time className="date" datetime="9-17">
                          Sep 17
                        </time>
                        <span className="text">
                          Attending the event
                          <a href="single-event.php">"Some New Event"</a>
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-head-row">
                      <div className="card-title">Support Tickets</div>
                      <div className="card-tools">
                        <ul
                          className="nav nav-pills nav-secondary nav-pills-no-bd nav-sm"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-today"
                              data-bs-toggle="pill"
                              href="#pills-today"
                              role="tab"
                              aria-selected="true"
                            >
                              Today
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="pills-week"
                              data-bs-toggle="pill"
                              href="#pills-week"
                              role="tab"
                              aria-selected="false"
                            >
                              Week
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-month"
                              data-bs-toggle="pill"
                              href="#pills-month"
                              role="tab"
                              aria-selected="false"
                            >
                              Month
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="avatar avatar-online">
                        <span className="avatar-title rounded-circle border border-white bg-info">
                          J
                        </span>
                      </div>
                      <div className="flex-1 ms-3 pt-1">
                        <h6 className="text-uppercase fw-bold mb-1">
                          Joko Subianto
                          <span className="text-warning ps-3">pending</span>
                        </h6>
                        <span className="text-muted">
                          I am facing some trouble with my viewport. When i
                          start my
                        </span>
                      </div>
                      <div className="float-end pt-1">
                        <small className="text-muted">8:40 PM</small>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar avatar-offline">
                        <span className="avatar-title rounded-circle border border-white bg-secondary">
                          P
                        </span>
                      </div>
                      <div className="flex-1 ms-3 pt-1">
                        <h6 className="text-uppercase fw-bold mb-1">
                          Prabowo Widodo
                          <span className="text-success ps-3">open</span>
                        </h6>
                        <span className="text-muted">
                          I have some query regarding the license issue.
                        </span>
                      </div>
                      <div className="float-end pt-1">
                        <small className="text-muted">1 Day Ago</small>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar avatar-away">
                        <span className="avatar-title rounded-circle border border-white bg-danger">
                          L
                        </span>
                      </div>
                      <div className="flex-1 ms-3 pt-1">
                        <h6 className="text-uppercase fw-bold mb-1">
                          Lee Chong Wei
                          <span className="text-muted ps-3">closed</span>
                        </h6>
                        <span className="text-muted">
                          Is there any update plan for RTL version near future?
                        </span>
                      </div>
                      <div className="float-end pt-1">
                        <small className="text-muted">2 Days Ago</small>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar avatar-offline">
                        <span className="avatar-title rounded-circle border border-white bg-secondary">
                          P
                        </span>
                      </div>
                      <div className="flex-1 ms-3 pt-1">
                        <h6 className="text-uppercase fw-bold mb-1">
                          Peter Parker
                          <span className="text-success ps-3">open</span>
                        </h6>
                        <span className="text-muted">
                          I have some query regarding the license issue.
                        </span>
                      </div>
                      <div className="float-end pt-1">
                        <small className="text-muted">2 Day Ago</small>
                      </div>
                    </div>
                    <div className="separator-dashed"></div>
                    <div className="d-flex">
                      <div className="avatar avatar-away">
                        <span className="avatar-title rounded-circle border border-white bg-danger">
                          L
                        </span>
                      </div>
                      <div className="flex-1 ms-3 pt-1">
                        <h6 className="text-uppercase fw-bold mb-1">
                          Logan Paul <span className="text-muted ps-3">closed</span>
                        </h6>
                        <span className="text-muted">
                          Is there any update plan for RTL version near future?
                        </span>
                      </div>
                      <div className="float-end pt-1">
                        <small className="text-muted">2 Days Ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* <!-- Custom template | don't include it in your project! --> */}
      <div className="custom-template">
        <div className="title">Settings</div>
        <div className="custom-content">
          <div className="switcher">
            <div className="switch-block">
              <h4>Logo Header</h4>
              <div className="btnSwitch">
                <button
                  type="button"
                  className="selected changeLogoHeaderColor"
                  data-color="dark"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="blue"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="purple"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="light-blue"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="green"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="orange"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="red"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="white"
                ></button>
                <br />
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="dark2"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="blue2"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="purple2"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="light-blue2"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="green2"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="orange2"
                ></button>
                <button
                  type="button"
                  className="changeLogoHeaderColor"
                  data-color="red2"
                ></button>
              </div>
            </div>
            <div className="switch-block">
              <h4>Navbar Header</h4>
              <div className="btnSwitch">
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="dark"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="blue"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="purple"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="light-blue"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="green"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="orange"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="red"
                ></button>
                <button
                  type="button"
                  className="selected changeTopBarColor"
                  data-color="white"
                ></button>
                <br />
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="dark2"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="blue2"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="purple2"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="light-blue2"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="green2"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="orange2"
                ></button>
                <button
                  type="button"
                  className="changeTopBarColor"
                  data-color="red2"
                ></button>
              </div>
            </div>
            <div className="switch-block">
              <h4>Sidebar</h4>
              <div className="btnSwitch">
                <button
                  type="button"
                  className="changeSideBarColor"
                  data-color="white"
                ></button>
                <button
                  type="button"
                  className="selected changeSideBarColor"
                  data-color="dark"
                ></button>
                <button
                  type="button"
                  className="changeSideBarColor"
                  data-color="dark2"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-toggle">
          <i className="icon-settings"></i>
        </div>
      </div>
      {/* <!-- End Custom template --> */}
    </div>
    </div>
  )
}

export default Sidebar_style_2
