import { ScrollView } from "react-native";
import ChatMessage from "@app/components/ChatMessage/ChatMessage";

function ChatBoard() {
  return (
    <>
        <ScrollView>
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
        </ScrollView>
    </>
  )
}

export default ChatBoard;
