import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ChatBarStyle = {
  root: ViewStyle
  mainSection: ViewStyle
  title: TextStyle
}

export default (): ChatBarStyle => {
  return StyleSheet.create({
    root: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mainSection: {},
    title: {
      fontSize: 18,
      fontWeight: '700',
    },
  });
};
