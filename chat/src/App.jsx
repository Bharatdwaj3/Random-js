import io from"socket.io-client"
import Inbox from"./components/Inbox.jsx"

function App() {
  const socket=io("http://localhost:3000")
  console.log(socket)
  socket.on('message',(m)=>{
    console.log(m);
  })
  return (
    <>
      <Inbox></Inbox>
    </>
  )
}

export default App
