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
    <View>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
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
