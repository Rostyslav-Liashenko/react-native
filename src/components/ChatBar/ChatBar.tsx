import { Text, View } from "react-native";

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
