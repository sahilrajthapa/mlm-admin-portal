import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = ({ component: Component, layout: Layout, breakpoint, ...rest }) => (
  <Route
    {...rest} 
    render={props => (
      <Layout breakpoint={breakpoint}>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default LayoutRoute;
