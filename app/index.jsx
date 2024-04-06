import { Link } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";

const Index = () => {
  return (
    <View>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Text>test</Text>
      <Link href="/page2">Link to page 2</Link>
    </View>
  );
};

export default Index;
