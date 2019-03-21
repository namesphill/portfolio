import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import _ from "lodash";
const collapse = (x, y) => (x ? x : y);
const splitOnUnderscore = string => string.split("_");
const toKebab = t => _.kebabCase(t);
/// Name example:
/// Exact_PRIVATE_Parent1_Parent_HYPHEN_2_View__param1_param2
export default ({ name, view, childProps }) => {
  name = name.replace("_HYPHEN_", "-");
  const isPrivate = name.includes("PRIVATE_");
  const isExact = name.includes("EXACT_");
  let newName = name.split("__")[0];
  if (isPrivate) newName = newName.replace("PRIVATE_", "");
  if (isExact) newName = newName.replace("EXACT_", "");
  const config = {
    name: splitOnUnderscore(newName)[0],
    component: view,
    privateRoute: isPrivate,
    parents: collapse(
      splitOnUnderscore(newName)
        .reverse()
        .slice(1),
      [""]
    ),
    params: name.split("__")[1] ? name.split("__")[1].split("_") : [],
    exact:
      isExact ||
      Boolean(
        newName === "Home" ||
          !collapse(
            splitOnUnderscore(newName)
              .reverse()
              .slice(1),
            [""]
          ).length
      )
  };
  const getPropsOnConfig = ({
    name,
    component: C,
    parents,
    params,
    exact
  }) => ({
    path:
      name === "Home"
        ? "/"
        : ["", ...parents, name].map(el => toKebab(el)).join("/") +
          ["", ...params].join("/:"),
    key: [...parents, name].map(el => toKebab(el)).join("/"),
    component: p => <C {...p} {...childProps} />,
    exact
  });
  const props = getPropsOnConfig(config);
  
  if (config.name === "NotFound")
    return <Route key="not-found" component={view} />;
  if (!config.privateRoute) return <Route {...props} />;
  if (config.privateRoute) return <PrivateRoute {...props} />;
};
/* EXAMPLE RETURN
    <PrivateRoute
        isAuthenticated={this.props.isAuthenticated}
        path='/account'
        key={toKebab('Account')}
        component={Views['Account']}
    />
    <Route
        path='/sign-in'
        key={toKebab('SignIn')}
        component={Views['SignIn']}
    />
*/
