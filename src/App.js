import './App.css';
import { MessengerChat } from 'react-messenger-chat-plugin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Test Chat</h3>
  
        <MessengerChat
          pageId='915970668548064'
          language='en_US'
          themeColor={'#F2F3G2'}
          height={24}
          loggedInGreeting='Hello logged in user!'
          loggedOutGreeting='Hello stranger!'
          autoExpand={true}
          debugMode={false}
        />
      </header>
    </div>
  );
}

export default App;
