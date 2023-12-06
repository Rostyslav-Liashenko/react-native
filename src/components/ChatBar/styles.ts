import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ChatBarStyle = {
  root: ViewStyle
  title: TextStyle
}

export default (): ChatBarStyle => {
  return StyleSheet.create({
    root: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
    }
  })
}
