import './App.css'
import ChatWindow from './components/ChatWindow'
import Header from './components/Header'
import Input from './components/Input'
import Main from './components/Main'
function App() {
  return (
    <>
    <Header/>
    <div className="nes-container with-title is-rounded" style={{marginTop:"75px", width:"95vw"}}>
      <h3 class="title">Chat with karan.AI</h3>
    <Main/>
    {/* <ChatWindow/> */}
    <Input/>
    </div> 
    </>
  )
}

export default App
