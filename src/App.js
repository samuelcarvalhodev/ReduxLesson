import React from "react";
import { Provider } from 'react-redux';

import Sidebar from "./Components/Sidebar";
import Video from "./Components/Video";

import store from "./store";


function App() {
  return (
    <div className="App">
     <Provider store={store}>
        <Video/>
        <Sidebar/>
     </Provider>
    </div>
  );
}

export default App;
