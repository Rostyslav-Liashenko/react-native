import { TextInput, View } from "react-native";

import defaultStyles from './styles';
import IconButton from "@app/components/IconButton/IconButton";

function ChatInput() {
  const styles = defaultStyles();

  return (
    <>
      <View style={styles.root}>
        <IconButton
          name={'mic'}
          size={30}
          onPress={() => {}}
        />
        <TextInput
          placeholder={"Start typing..."}
          style={styles.textInput}
        />
      </View>
    </>
  )
}

export default ChatInput;
