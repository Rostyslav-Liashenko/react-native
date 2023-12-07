import { ScrollView, View } from "react-native";
import ChatMessage from "@app/components/ChatMessage/ChatMessage";
import ChatControlPanel from "@app/components/ChatControlPanel/ChatControlPanel";

function ChatBoard() {
  return (
    <>
      <View>
        <ScrollView>
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
          <ChatMessage id={'1'} text={'some text'} />
        </ScrollView>
        <View>
          <ChatControlPanel />
        </View>
      </View>
    </>
  )
}

export default ChatBoard;
