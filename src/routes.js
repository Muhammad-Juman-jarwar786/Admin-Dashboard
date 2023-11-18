import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const PoultryFarm = React.lazy(() => import('./views/pages/PoultryFarm/PoultryFarm'))
const CustomerManagement = React.lazy(() => import('./views/pages/customermanagement/CustomerManagement'))
const AddCustomer = React.lazy(() => import('./views/pages/customermanagement/AddCustomer'))
const CustomerType = React.lazy(() => import('./views/pages/customermanagement/CustomerType'))
const ShowCustomer = React.lazy(() => import('./views/pages/customermanagement/ShowCustomer'))

const ProductManagement = React.lazy(() => import('./views/pages/productmanagement/ProductManagement'))
const AddProduct = React.lazy(() => import('./views/pages/productmanagement/AddProduct'))
const ProductType = React.lazy(() => import('./views/pages/productmanagement/ProductType'))
const ShowProduct = React.lazy(() => import('./views/pages/productmanagement/ShowProduct'))

const CompanyManagement = React.lazy(() => import('./views/pages/companymanagement/CompanyManagement'))
const AddCompany = React.lazy(() => import('./views/pages/companymanagement/AddCompany'))
const ShowCompany = React.lazy(() => import('./views/pages/companymanagement/ShowCompany'))

const ShedManagement = React.lazy(() => import('./views/pages/shedmanagement/ShedManagement'))
const AddShed = React.lazy(() => import('./views/pages/shedmanagement/AddShed'))
const ShowSheds = React.lazy(() => import('./views/pages/shedmanagement/ShowSheds'))

const EmployeeManagement = React.lazy(() => import('./views/pages/employeemanagement/EmployeeManagement'))
const AddEmployee = React.lazy(() => import('./views/pages/employeemanagement/AddEmployee'))
const ShowEmployee = React.lazy(() => import('./views/pages/employeemanagement/ShowEmployee'))

const SalaryManagement = React.lazy(() => import('./views/pages/salarymanagement/SalaryManagement'))
const PaySalary = React.lazy(() => import('./views/pages/salarymanagement/PaySalary'))
const SetSalary = React.lazy(() => import('./views/pages/salarymanagement/SetSalary'))
const ShowSetSalary = React.lazy(() => import('./views/pages/salarymanagement/ShowSetSalary'))

const SalesManagement = React.lazy(() => import('./views/pages/salesmanagement/SalesManagement'))
const MaterialSales = React.lazy(() => import('./views/pages/salesmanagement/MaterialSales'))
const EggSales = React.lazy(() => import('./views/pages/salesmanagement/EggSales'))

const PurchaseManagement = React.lazy(() => import('./views/pages/purchasemanagement/PurchaseManagement'))
const MaterialPurchase = React.lazy(() => import('./views/pages/purchasemanagement/MaterialPurchase'))

const ExpenseManagement = React.lazy(() => import('./views/pages/expensemanagement/ExpenseManagement'))
const AddExpense = React.lazy(() => import('./views/pages/expensemanagement/AddExpense'))
const AddExpenseType = React.lazy(() => import('./views/pages/expensemanagement/AddExpenseType'))
const ShowExpense = React.lazy(() => import('./views/pages/expensemanagement/ShowExpense'))

const StockManagement = React.lazy(() => import('./views/pages/stockmanagement/StockManagement'))
const AddStock = React.lazy(() => import('./views/pages/stockmanagement/AddStock'))
const ShowStock = React.lazy(() => import('./views/pages/stockmanagement/ShowStock'))

const InvoiceManagement = React.lazy(() => import('./views/pages/invoicemanagement/InvoiceManagement'))
const Invoice = React.lazy(() => import('./views/pages/invoicemanagement/Invoice'))

const ReportManagement = React.lazy(() => import('./views/pages/reportmanagement/ReportManagement'))
const SalesReport = React.lazy(() => import('./views/pages/reportmanagement/SalesReport'))
const PurchaseReport = React.lazy(() => import('./views/pages/reportmanagement/PurchaseReport'))
const ExpenseReport = React.lazy(() => import('./views/pages/reportmanagement/ExpenseReport'))
const StockReport = React.lazy(() => import('./views/pages/reportmanagement/StockReport'))
const SalaryReport = React.lazy(() => import('./views/pages/reportmanagement/SalaryReport'))
const InvoiceReport = React.lazy(() => import('./views/pages/reportmanagement/InvoiceReport'))


// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/theme', name: 'Theme', element: PoultryFarm, exact: true },
  { path: '/PoultryFarm', name: 'PoultryFarm', element: PoultryFarm, exact: true },
  { path: '/CustomerManagement', name: 'CustomerManagement', element: CustomerManagement, exact: true },
  { path: '/AddCustomer', name: 'AddCustomer', element: AddCustomer, exact: true },
  { path: '/CustomerType', name: 'CustomerType', element: CustomerType, exact: true },
  { path: '/ShowCustomer', name: 'ShowCustomer', element: ShowCustomer, exact: true },
  
  { path: '/ProductManagement', name: 'ProductManagement', element: ProductManagement, exact: true },
  { path: '/AddProduct', name: 'AddProduct', element: AddProduct, exact: true },
  { path: '/ProductType', name: 'ProductType', element: ProductType, exact: true },
  { path: '/ShowProduct', name: 'ShowProduct', element: ShowProduct, exact: true },
  
  { path: '/CompanyManagement', name: 'CompanyManagement', element: CompanyManagement, exact: true },
  { path: '/AddCompany', name: 'AddCompany', element: AddCompany, exact: true },
  { path: '/ShowCompany', name: 'ShowCompany', element: ShowCompany, exact: true },
  
  { path: '/ShedManagement', name: 'ShedManagement', element: ShedManagement, exact: true },
  { path: '/AddShed', name: 'AddShed', element: AddShed, exact: true },
  { path: '/ShowSheds', name: 'ShowSheds', element: ShowSheds, exact: true },
  
  { path: '/EmployeeManagement', name: 'EmployeeManagement', element: EmployeeManagement, exact: true },
  { path: '/AddEmployee', name: 'AddEmployee', element: AddEmployee, exact: true },
  { path: '/ShowEmployee', name: 'ShowEmployee', element: ShowEmployee, exact: true },

  { path: '/SalaryManagement', name: 'SalaryManagement', element: SalaryManagement, exact: true },
  { path: '/PaySalary', name: 'PaySalary', element: PaySalary, exact: true },
  { path: '/SetSalary', name: 'SetSalary', element: SetSalary, exact: true },
  { path: '/ShowSetSalary', name: 'ShowSetSalary', element: ShowSetSalary, exact: true },

  { path: '/SalesManagement', name: 'SalesManagement', element: SalesManagement, exact: true },
  { path: '/MaterialSales', name: 'MaterialSales', element: MaterialSales, exact: true },
  { path: '/EGGSales', name: 'EggSales', element: EggSales, exact: true },
  
  { path: '/PurchaseManagement', name: 'PurchaseManagement', element: PurchaseManagement, exact: true },
  { path: '/MaterialPurchase', name: 'MaterialPurchase', element: MaterialPurchase, exact: true },

  { path: '/ExpenseManagement', name: 'ExpenseManagement', element: ExpenseManagement, exact: true },
  { path: '/AddExpense', name: 'AddExpense', element: AddExpense, exact: true },
  { path: '/AddExpenseType', name: 'AddExpenseType', element: AddExpenseType, exact: true },
  { path: '/ShowExpense', name: 'ShowExpense', element: ShowExpense, exact: true },

  { path: '/StockManagement', name: 'StockManagement', element: StockManagement, exact: true },
  { path: '/AddStock', name: 'AddStock', element: AddStock, exact: true },
  { path: '/ShowStock', name: 'ShowStock', element: ShowStock, exact: true },

  { path: '/InvoiceManagement', name: 'InvoiceManagement', element: InvoiceManagement, exact: true },
  { path: '/Invoice', name: 'Invoice', element: Invoice, exact: true },

  { path: '/ReportManagement', name: 'ReportManagement', element: ReportManagement, exact: true },
  { path: '/SalesReport', name: 'SalesReport', element: SalesReport, exact: true },
  { path: '/PurchaseReport', name: 'PurchaseReport', element: PurchaseReport, exact: true },  
  { path: '/ExpenseReport', name: 'ExpenseReport', element: ExpenseReport, exact: true },
  { path: '/StockReport', name: 'StockReport', element: StockReport, exact: true },
  { path: '/SalaryReport', name: 'SalaryReport', element: SalaryReport, exact: true },
  { path: '/InvoiceReport', name: 'InvoiceReport', element: InvoiceReport, exact: true },


  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
