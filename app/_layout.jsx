import { Stack } from "expo-router/stack";
import { Typography, Colors, Spacings } from "react-native-ui-lib";

export default function Layout() {
  Colors.loadColors({
    primary: "#06b6d4"
  });

  Typography.loadTypographies({
    h1: { fontSize: 58, fontWeight: "bold", lineHeight: 80 },
    h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 }
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="page2" />
    </Stack>
  );
}
