import { Link } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Assets,
  Constants,
  Button,
  Colors,
  Typography,
  ButtonProps
} from "react-native-ui-lib";

const Index = () => {
  return (
    <View style={{ backgroundColor: "#f1f5f9" }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Days to next bonus</Text>
        <Text h1>9 Days</Text>
        <Text>Current Streak: 371 days</Text>
      </View>
      <Button
        label="Press"
        size={Button.sizes.medium}
        backgroundColor={Colors.red30}
      />
      <Link href="/page2">Link to page 2</Link>
    </View>
  );
};

export default Index;
