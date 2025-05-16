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
        {
          logs.length > 0 
          ? <Logs allLogs={logs}></Logs>
          : <div className="info-container">
             <p className="info-message">
            ⚠️ Please fill in <strong>all fields</strong> with valid data to continue.
             </p>
           </div>
        }
       </main>
    </>
  );
}

export default App
