/**
 * @format
 */

import "react-native-gesture-handler";
import { AppRegistry, LogBox } from "react-native";
import { name as appName } from "./app.json";
import MyApp from "./MyApp";
import React from "react";
import Promise from "bluebird";

Promise.config({
  warnings: {
    wForgottenReturn: false,
  },
});

LogBox.ignoreAllLogs(true);

global.Promise = Promise;
global.onunhandledrejection = function onunhandledrejection(error) {
  if (error instanceof Error) {
    //console.error("ERR onunhandledrejection", error);
    // console.trace(error)
  } else {
    console.log('global.onunhandledrejection ', error);
  }
};

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <MyApp />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
