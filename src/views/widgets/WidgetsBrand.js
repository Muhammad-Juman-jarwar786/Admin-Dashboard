import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHouse } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = ({ withCharts }) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow>
      {/* <h4>Bangladeshi House &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pakistani House</h4> */}
      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          // icon={ <CIcon icon={cilHouse} height={52} className="my-4 text-white"  />}
          icon={
            <div className="d-flex align-items-center">
              <CIcon icon={cilHouse} height={52} className="my-4 text-white" />
              <span className="mr-2 text-white">Bangladeshi House</span>
            </div>
          }
          values={[
            { title: 'Fine Eggs', value: '89K' },
            { title: 'Wasted Eggs', value: '459' },
          ]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [1, 13, 9, 17, 34, 41, 38],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={
            <div className="d-flex align-items-center">
              <CIcon icon={cilHouse} height={52} className="my-4 text-white" />
              <span className="mr-2 text-white">Pakistani House</span>
            </div>
          }
          values={[
            { title: 'Fine eggs', value: '973k' },
            { title: 'Wasted eggs', value: '1.792' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={
            <div className="d-flex align-items-center">
              <CIcon icon={cilHouse} height={52} className="my-4 text-white" />
              <span className="mr-2 text-white">Indiana House</span>
            </div>
          }
          values={[
            { title: 'Fine eggs', value: '500' },
            { title: 'Wasted eggs', value: '1.292' },
          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          color="warning"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [35, 23, 56, 22, 97, 23, 64],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={
            <div className="d-flex align-items-center">
              <CIcon icon={cilHouse} height={52} className="my-4 text-white" />
              <span className="mr-2 text-white">Srilankan House</span>
            </div>
          }
          values={[
            { title: 'Fine eggs', value: '12+' },
            { title: 'Wasted eggs', value: '4' },
          ]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
