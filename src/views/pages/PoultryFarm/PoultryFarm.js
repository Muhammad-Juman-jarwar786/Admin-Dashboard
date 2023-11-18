import React from 'react'
import PropTypes from 'prop-types'
import { 
  faShop, 
  faFile, 
  faHouse, 
  faCartShopping, 
  faPeopleGroup, 
  faBasketShopping, 
  faUsers, 
  faFileInvoice, 
  faHandHoldingDollar,
  faUserGroup,
  faMoneyCheckDollar,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CCardGroup, CWidgetStatsC } from '@coreui/react'
import './PoultryFarm.css'
import { Link } from 'react-router-dom'
const poultryFarm = () => {
  return (
    <>
      <CCardGroup className="mb-4">
        <Link to="/CustomerManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faPeopleGroup} bounce />}
            value="Customers"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/ProductManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faCartShopping} bounce />}
            value="Product"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/CompanyManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faUsers} bounce />}
            value="Company"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/ShedManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faHouse} bounce />}
            value="Sheds"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/EmployeeManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faUserGroup} bounce />}
            value="Employee"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/SalaryManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faMoneyCheckDollar} bounce />}
            value="Salary"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/SalesManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faShop} bounce />}
            value="Sales"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/PurchaseManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faBasketShopping} bounce />}
            value="Purchase"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/ExpenseManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faHandHoldingDollar} bounce />}
            value="Expense"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/StockManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faIndustry} bounce />}
            value="Stock"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/InvoiceManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faFileInvoice} bounce />}
            value="Invoice"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        <Link to="/ReportManagement">
          <CWidgetStatsC
            icon={<FontAwesomeIcon className="faShop" icon={faFile} bounce/>}
            value="Reports"
            title="Management"
            progress={{ color: 'white', value: 100 }}
          />
        </Link>
        {/* </div> */}
      </CCardGroup>
    </>
  )
}

poultryFarm.propTypes = {
  withCharts: PropTypes.bool,
}

export default poultryFarm
