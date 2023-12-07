import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ChatMessageStyle = {
  root: ViewStyle
  textContainer: ViewStyle
  text: TextStyle
}

export default (): ChatMessageStyle => {
  return StyleSheet.create({
    root: {
      width: '75%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 10
    },
    textContainer: {
      padding: 10,
      backgroundColor: '#40b861',
      borderRadius: 20,
    },
    text: {
      color: '#fff',
      fontSize: 18,
    },
  });
}
