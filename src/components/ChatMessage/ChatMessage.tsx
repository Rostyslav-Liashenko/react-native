import { Text, View } from "react-native";
import Avatar from "@app/components/Avatar/Avatar";

import defaultStyles from './styles';

export interface ChatMessageProps {
  id: string
  text: string
}

function ChatMessage({ id, text }: ChatMessageProps) {
  const styles = defaultStyles();

  return (
    <>
      <View style={styles.root}>
        <Avatar />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      </View>
    </>
  )
}

export default ChatMessage;
