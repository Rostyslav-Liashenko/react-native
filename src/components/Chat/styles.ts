import { StyleSheet, ViewStyle } from "react-native";

export type ChatStyle = {
  root: ViewStyle
}

export default (): ChatStyle => {
  return StyleSheet.create({
    root: {
      flex: 1,
      gap: 10,
    }
  })
}
