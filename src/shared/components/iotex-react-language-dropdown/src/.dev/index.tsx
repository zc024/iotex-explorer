import React from "react";
// @ts-ignore
import { clientReactRender } from "onefx/lib/iso-react-render/client-react-render";
import Component from "..";

clientReactRender({
  VDom: <Component />,
  clientScript: "/main.js"
});
