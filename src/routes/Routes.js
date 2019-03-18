import React from "react";
import * as Views from "../views";
import RouteConfigurator from "../containers/RouteConfigurator/RouteConfigurator";
import _ from "lodash";
import { Switch } from "react-router-dom";
function Routes(childProps) {
  const routes = _.toPairs(Views).map(([name, view]) =>
    RouteConfigurator({ ...{ name, view, childProps } })
  );
  return <Switch>{routes}</Switch>;
}
export default React.memo(Routes);
