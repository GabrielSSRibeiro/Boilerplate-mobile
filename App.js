import React from "react";

import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
// import {useFonts, } from "@expo-google-fonts/";

import Routes from "./src/pages/Home";

export default function App() {
  // const [fontsLoaded] = useFonts({});

  return (
    // return !fontsLoaded ? (
    //   <AppLoading />
    // ) : (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
