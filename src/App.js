import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AlertPage from 'pages/AlertPage';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
import BadgePage from 'pages/BadgePage';
import ButtonGroupPage from 'pages/ButtonGroupPage';
import ButtonPage from 'pages/ButtonPage';
import CardPage from 'pages/CardPage';
import ChartPage from 'pages/ChartPage';
// pages
import DashboardPage from 'pages/DashboardPage';
import DropdownPage from 'pages/DropdownPage';
import FormPage from 'pages/FormPage';
import InputGroupPage from 'pages/InputGroupPage';
import ModalPage from 'pages/ModalPage';
import ProgressPage from 'pages/ProgressPage';
import TablePage from 'pages/TablePage';
import TypographyPage from 'pages/TypographyPage';
import WidgetPage from 'pages/WidgetPage';
// Salesman Pages
import CreateSalesmanPage from 'pages/SalesmanPage/CreateSalesmanPage';
import EditSalesmanPage from 'pages/SalesmanPage/EditSalesmanPage';
// import SalesmanList from 'pages/SalesmanPage/SalesmanList'
import NewSalesmanList from 'pages/SalesmanPage/NewSalesmanList'
// Transaction Pages 
// import TransactionList from 'pages/TransactionPage/TransactionList'
import NewTransactionList from 'pages/TransactionPage/NewTransactionList'
// Product Page
import CreateProductPage from 'pages/ProductPage/CreateProductPage'
import EditProductPage from 'pages/ProductPage/EditProductPage'
import ProductListPage from 'pages/ProductPage/ProductListPage'

import './styles/reduction.css';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
 
};

class App extends React.Component {
  
  render() {
    const { breakpoint } = this.props
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
            <LayoutRoute
              exact
              path="/login-modal"
              layout={MainLayout}
              component={AuthModalPage}
            />
            <LayoutRoute
              exact
              path="/"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              exact
              path="/create-salesman"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={CreateSalesmanPage}
            />
            <LayoutRoute
              exact
              path="/edit-salesman/:id"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={EditSalesmanPage}
            />
            {/* <LayoutRoute
              exact
              path="/salesman-list"
              layout={MainLayout}
              component={SalesmanList}
            /> */}
            <LayoutRoute
              exact
              path="/salesman-list"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={NewSalesmanList}
            />
            {/* <LayoutRoute
              exact
              path="/transaction-list"
              layout={MainLayout}
              component={TransactionList}
            /> */}
            <LayoutRoute
              exact
              path="/transaction-list"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={NewTransactionList}
            />

            <LayoutRoute
              exact
              path="/create-product"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={CreateProductPage}
            />
            <LayoutRoute
              exact
              path="/edit-product/:id"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={EditProductPage}
            />

            <LayoutRoute
              exact
              path="/product-list"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={ProductListPage}
            />
            <LayoutRoute
              exact
              path="/buttons"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={ButtonPage}
            /> 
            <LayoutRoute
              exact
              path="/cards"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={CardPage}
            />
            <LayoutRoute
              exact
              path="/widgets"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={WidgetPage}
            />
            <LayoutRoute
              exact
              path="/typography"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={TypographyPage}
            />
            <LayoutRoute
              exact
              path="/alerts"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={AlertPage}
            />
            <LayoutRoute
              exact
              path="/tables"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={TablePage}
            />
            <LayoutRoute
              exact
              path="/badges"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={BadgePage}
            />
            <LayoutRoute
              exact
              path="/button-groups"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={ButtonGroupPage}
            />
            <LayoutRoute
              exact
              path="/dropdowns"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={DropdownPage}
            />
            <LayoutRoute
              exact
              path="/progress"
              breakpoint={breakpoint}
              layout={MainLayout}
              component={ProgressPage}
            />
            <LayoutRoute
              exact
              path="/modals"
              layout={MainLayout}
              component={ModalPage}
            />
            <LayoutRoute
              exact
              path="/forms"
              layout={MainLayout}
              component={FormPage}
            />
            <LayoutRoute
              exact
              path="/input-groups"
              layout={MainLayout}
              component={InputGroupPage}
            />
            <LayoutRoute
              exact
              path="/charts"
              layout={MainLayout}
              component={ChartPage}
            />
            <LayoutRoute
              exact
              path="/register"
              layout={MainLayout}
              component={AuthPage}
            />
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
