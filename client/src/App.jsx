import React from "react";
import "../config";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { Cookie } from "universal-cookie";

//to contain all the components import in one line, all the componenets can be exported from the index.js file present in components
import { ChannelContainer, ChannelListContainer } from "./components";

import "./App.css";

//api key that would be used for initialising chat
const apikey = config.stream_api_key;

//for chat to work we need to create an instance of a stream chat
const client = StreamChat.getInstance(apikey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
