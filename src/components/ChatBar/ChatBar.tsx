import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

import defaultStyles from './styles';

function ChatBar() {
  const style = defaultStyles();

  return (
    <>
      <View style={style.root}>
        <View>
          <Text>
            Back
          </Text>
          <Icon name={'person'} size={30} />
        </View>
        <View>
          <Text style={style.title}>
            Instamobile team
          </Text>
        </View>
        <View>
          <Text>
            setting
          </Text>
        </View>
      </View>
    </>
  )
}

export default ChatBar;
