import React from "react";

import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
// import {useFonts, } from "@expo-google-fonts/";

import AppStack from "./src/routes/appStack";

export default function App() {
  // const [fontsLoaded] = useFonts({});

  return (
    // return !fontsLoaded ? (
    //   <AppLoading />
    // ) : (
    <>
      <StatusBar style="auto" />
      <AppStack />
    </>
  );
}
