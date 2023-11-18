import React from 'react'
import PropTypes from 'prop-types'
import { CCardGroup } from '@coreui/react'
import logo from '../../assets/images/avatars/download.png'
import './ManagementSystem.css'
import CardComponent from '../card/CardComponent'

const ManagementSystem = (props) => {
  return (
    <>
      <a href='#' className='btn-Home'>Back-Home</a>
      <div className="header-logo">
        <img src={logo} />
      </div>
      <CCardGroup className="mb-4 Group">
        <CardComponent link={props.link1} icon={props.icon1} value={props.value1} title={props.title1}/>
        {props.link2 && <CardComponent link={props.link2} icon={props.icon2} value={props.value2} title={props.title2}/>}
        {props.link3 && <CardComponent link={props.link3} icon={props.icon3} value={props.value3} title={props.title3}/>}
        {props.link4 && <CardComponent link={props.link4} icon={props.icon4} value={props.value4} title={props.title4}/>}
        {props.link5 && <CardComponent link={props.link5} icon={props.icon5} value={props.value5} title={props.title5}/>}
        {props.link6 && <CardComponent link={props.link6} icon={props.icon6} value={props.value6} title={props.title6}/>}
        {props.link7 && <CardComponent link={props.link7} icon={props.icon7} value={props.value7} title={props.title7}/>}
      </CCardGroup>
    </>
  )
}

ManagementSystem.propTypes = {
  link1: PropTypes.string,
  icon1: PropTypes.element,
  title1: PropTypes.string,
  value1: PropTypes.string,
  link2: PropTypes.string,
  icon2: PropTypes.element,
  value2: PropTypes.string,
  title2: PropTypes.string,
  link3: PropTypes.string,
  icon3: PropTypes.element,
  title3: PropTypes.string,
  value3: PropTypes.string,
  link4: PropTypes.string,
  icon4: PropTypes.element,
  title4: PropTypes.string,
  value4: PropTypes.string,
  link5: PropTypes.string,
  icon5: PropTypes.element,
  title5: PropTypes.string,
  value5: PropTypes.string,
  link6: PropTypes.string,
  icon6: PropTypes.element,
  title6: PropTypes.string,
  value6: PropTypes.string,
  link7: PropTypes.string,
  icon7: PropTypes.element,
  title7: PropTypes.string,
  value7: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default ManagementSystem
