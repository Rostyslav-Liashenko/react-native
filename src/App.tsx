import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import { store } from "@app/redux/configureStore";
import Navigation from "@app/navigation/Navigation/Navigation";

function App(): React.ReactElement {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
