import { StyleSheet, ViewStyle } from "react-native";

type ProfileScreenStyle = {
  root: ViewStyle,
  textContainers: ViewStyle,
}

export default (): ProfileScreenStyle => {
  return StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      gap: 40,
    },
    textContainers: {
      gap: 30,
    },
  })
}
