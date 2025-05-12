import Header from "./components/Header"
import Calculator from "./components/Calculator"
import Logs from "./components/Logs";
import { useState } from "react";
function App() {
  const [logs,setLogs] = useState([]);

  function handleLogs(currLog){
       const newLogs = currLog;
       setLogs(newLogs);
  }
  return (
    // HEADER
    <>
      <Header/>
       <main>
        <Calculator  updateLog={handleLogs}></Calculator>
        <Logs allLogs={logs}></Logs>
       </main>
    </>
  );
}

export default App
