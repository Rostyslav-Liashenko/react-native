import { StyleSheet, ViewStyle } from "react-native";

export interface ChatControlPanelStyles {
  root: ViewStyle
}

export default (): ChatControlPanelStyles => {
  return StyleSheet.create({
    root: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    }
  })
}
