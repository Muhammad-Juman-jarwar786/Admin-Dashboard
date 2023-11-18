import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

import CustomerManagement from './views/pages/customermanagement/CustomerManagement'
import AddCustomer from './views/pages/customermanagement/AddCustomer'
import CustomerType from './views/pages/customermanagement/CustomerType'
import ShowCustomer from './views/pages/customermanagement/ShowCustomer'

import ProductManagement from './views/pages/productmanagement/ProductManagement'
import AddProduct from './views/pages/productmanagement/AddProduct'
import ProductType from './views/pages/productmanagement/ProductType'
import ShowProduct from './views/pages/productmanagement/ShowProduct'

import CompanyManagement from './views/pages/companymanagement/CompanyManagement'
import AddCompany from './views/pages/companymanagement/AddCompany'
import ShowCompany from './views/pages/companymanagement/ShowCompany'

import ShedManagement from './views/pages/shedmanagement/ShedManagement'
import AddShed from './views/pages/shedmanagement/AddShed'
import ShowSheds from './views/pages/shedmanagement/ShowSheds'

import EmployeeManagement from './views/pages/employeemanagement/EmployeeManagement'
import AddEmployee from './views/pages/employeemanagement/AddEmployee'
import ShowEmployee from './views/pages/employeemanagement/ShowEmployee'

import SalaryManagement from './views/pages/salarymanagement/SalaryManagement'
import PaySalary from './views/pages/salarymanagement/PaySalary'
import SetSalary from './views/pages/salarymanagement/SetSalary'
import ShowSetSalary from './views/pages/salarymanagement/ShowSetSalary'

import SalesManagement from './views/pages/salesmanagement/SalesManagement'
import MaterialSales from './views/pages/salesmanagement/MaterialSales'
import EggSales from './views/pages/salesmanagement/EggSales'

import PurchaseManagement from './views/pages/purchasemanagement/PurchaseManagement'
import MaterialPurchase from './views/pages/purchasemanagement/MaterialPurchase'

import ExpenseManagement from './views/pages/expensemanagement/ExpenseManagement'
import AddExpense from './views/pages/expensemanagement/AddExpense'
import AddExpenseType from './views/pages/expensemanagement/AddExpenseType'
import ShowExpense from './views/pages/expensemanagement/ShowExpense'

import StockManagement from './views/pages/stockmanagement/StockManagement'
import AddStock from './views/pages/stockmanagement/AddStock'
import ShowStock from './views/pages/stockmanagement/ShowStock'

import InvoiceManagement from './views/pages/invoicemanagement/InvoiceManagement'
import Invoice from './views/pages/invoicemanagement/Invoice'

import ReportManagement from './views/pages/reportmanagement/ReportManagement'
// import SalesReport from './views/pages/reportmanagement/SalesReport'
// import PurchaseReport from './views/pages/reportmanagement/PurchaseReport'
// import ExpenseReport from './views/pages/reportmanagement/ExpenseReport'
// import StockReport from './views/pages/reportmanagement/StockReport'
// import SalaryReport from './views/pages/reportmanagement/SalaryReport'
// import InvoiceReport from './views/pages/reportmanagement/InvoiceReport'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/CustomerManagement" name="CustomerManagement" element={<CustomerManagement />} />
            <Route exact path="/AddCustomer" name="AddCustomer" element={<AddCustomer />} />
            <Route exact path="/CustomerType" name="CustomerType" element={<CustomerType />} />
            <Route exact path="/ShowCustomer" name="ShowCustomer" element={<ShowCustomer />} />

            <Route exact path="/ProductManagement" name="ProductManagement" element={<ProductManagement />} />
            <Route exact path="/AddProduct" name="AddProduct" element={<AddProduct />} />
            <Route exact path="/ProductType" name="ProductType" element={<ProductType />} />
            <Route exact path="/ShowProduct" name="ShowProduct" element={<ShowProduct />} />
            
            <Route exact path="/CompanyManagement" name="CompanyManagement" element={<CompanyManagement />} />
            <Route exact path="/AddCompany" name="AddCompany" element={<AddCompany />} />
            <Route exact path="/ShowCompany" name="ShowCompany" element={<ShowCompany />} />

            <Route exact path="/ShedManagement" name="ShedManagement" element={<ShedManagement />} />
            <Route exact path="/AddShed" name="AddShed" element={<AddShed />} />
            <Route exact path="/ShowSheds" name="ShowSheds" element={<ShowSheds />} />

            <Route exact path="/EmployeeManagement" name="EmployeeManagement" element={<EmployeeManagement />} />
            <Route exact path="/AddEmployee" name="AddEmployee" element={<AddEmployee />} />
            <Route exact path="/ShowEmployee" name="ShowEmployee" element={<ShowEmployee />} />

            <Route exact path="/SalaryManagement" name="SalaryManagement" element={<SalaryManagement />} />
            <Route exact path="/SetSalary" name="SetSalary" element={<SetSalary />} />
            <Route exact path="/PaySalary" name="PaySalary" element={<PaySalary />} />
            <Route exact path="/ShowSetSalary" name="ShowSetSalary" element={<ShowSetSalary />} />

            <Route exact path="/SalesManagement" name="SalesManagement" element={<SalesManagement />} />
            <Route exact path="/MaterialSales" name="MaterialSales" element={<MaterialSales />} />
            <Route exact path="/EggSales" name="EggSales" element={<EggSales />} />

            <Route exact path="/PurchaseManagement" name="PurchaseManagement" element={<PurchaseManagement />} />
            <Route exact path="/MaterialPurchase" name="MaterialPurchase" element={<MaterialPurchase />} />

            <Route exact path="/ExpenseManagement" name="ExpenseManagement" element={<ExpenseManagement />} />
            <Route exact path="/AddExpense" name="AddExpense" element={<AddExpense />} />
            <Route exact path="/AddExpenseType" name="AddExpenseType" element={<AddExpenseType />} />
            <Route exact path="/ShowExpense" name="ShowExpense" element={<ShowExpense />} />

            <Route exact path="/StockManagement" name="StockManagement" element={<StockManagement />} />
            <Route exact path="/AddStock" name="AddStock" element={<AddStock />} />
            <Route exact path="/ShowStock" name="ShowStock" element={<ShowStock />} />

            <Route exact path="/InvoiceManagement" name="InvoiceManagement" element={<InvoiceManagement />} />
            <Route exact path="/Invoice" name="Invoice" element={<Invoice />} />

            <Route exact path="/ReportManagement" name="ReportManagement" element={<ReportManagement />} />
            {/* <Route exact path="/SalesReport" name="SalesReport" element={<SalesReport />} />
            <Route exact path="/PurchaseReport" name="PurchaseReport" element={<PurchaseReport />} />
            <Route exact path="/ExpenseReport" name="ExpenseReport" element={<ExpenseReport />} />
            <Route exact path="/StockReport" name="StockReport" element={<StockReport />} />
            <Route exact path="/SalaryReport" name="SalaryReport" element={<SalaryReport />} />
            <Route exact path="/InvoiceReport" name="InvoiceReport" element={<InvoiceReport />} /> */}
 
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
