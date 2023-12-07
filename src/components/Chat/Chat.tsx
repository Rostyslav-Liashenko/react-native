import { View } from "react-native";

import defaultStyles from './styles';
import ChatBar from "@app/components/ChatBar/ChatBar";
import ChatBoard from "@app/components/ChatBoard/ChatBoard";

function Chat() {
  const styles = defaultStyles();

  return (
    <>
      <View style={styles.root}>
        <ChatBar />
        <ChatBoard />
      </View>
    </>
  );
}

export default Chat;
