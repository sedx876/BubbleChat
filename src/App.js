import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <h1>BigRatChat</h1> */}
      <ChatEngine
			height='100vh'
			userName='admin'
			userSecret='123456'
      projectID='790612d8-1386-4a3e-896c-199330f71e0b'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		  />
    </div>
  );
}

export default App
