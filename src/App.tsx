import React from "react";
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom";
import AnotherPage from "./assets/pages/AnotherPage/AnotherPage";
import Home from "./assets/pages/Home/Home";

const RouteWithLayout = ({
  component: Comp,
  layout: Layout,
  ...rest
}: RouteProps & {
  layout: any;
  component: any;
}) => (
  <Route
    {...rest}
    render={(routeProps) => (
      <Layout>
        <Comp {...routeProps} />
      </Layout>
    )}
  />
);

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout layout={Home} component={AnotherPage} exact />
      </Switch>
    </BrowserRouter>
  );
};
