import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

export type ProfilePhotoStyles = {
  root: ViewStyle
  image: ImageStyle
}


export default (): ProfilePhotoStyles => {
  return StyleSheet.create({
    root: {},
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    }
  })
}
