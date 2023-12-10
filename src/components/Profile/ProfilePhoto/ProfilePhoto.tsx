import { Image, View } from "react-native";

import defaultStyles from './styles';

function ProfilePhoto() {
  const styles = defaultStyles();

  return (
    <>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={require('../../../assets/img/my-photo.png')}
        />
      </View>
    </>
  )
}

export default ProfilePhoto;
