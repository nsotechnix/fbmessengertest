import './App.css';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
// import { MessengerChat } from 'react-messenger-chat-plugin';
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Chat Page 2.1</h1>
        {/* <MessengerCustomerChat
          pageId="915970668548064"
          appId="1103912743784569"
        /> */}

        {/* <MessengerChat
          pageId='915970668548064'
          language='en_US'
          themeColor={'#F2F3G2'}
          height={24}
          loggedInGreeting='Hello logged in user!'
          loggedOutGreeting='Hello stranger!'
          autoExpand={true}
          debugMode={false}
          onMessengerShow={() => {console.log('onMessengerShow')}}
          onMessengerHide={() => {console.log('onMessengerHide')}}
          onMessengerDialogShow={() => {console.log('onMessengerDialogShow')}}
          onMessengerDialogHide={() => {console.log('onMessengerDialogHide')}}
          /> */}
      </header>
    </div>
  );
}

export default App;
