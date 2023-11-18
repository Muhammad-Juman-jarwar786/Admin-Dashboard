import React from 'react'
import PropTypes from 'prop-types'
// import { faUserPlus, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CCardGroup, CWidgetStatsC } from '@coreui/react'
import logo from '../../assets/images/avatars/download.png'
import '../managementsystem/ManagementSystem.css'
import { Link } from 'react-router-dom'


const CardComponent = (props) => {
  return (
    <React.Fragment>
              <Link className="cards" to={props.link}>
          <CWidgetStatsC
            icon={<FontAwesomeIcon className='faShop' icon={props.icon} bounce />}
            value={props.value}
            title={props.title}
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
    </React.Fragment>
  );
};

CardComponent.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.element,
    value: PropTypes.string,
    title: PropTypes.string,
    withCharts: PropTypes.bool,
}

export default CardComponent;