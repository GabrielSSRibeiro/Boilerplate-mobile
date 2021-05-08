import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

export default Home;
