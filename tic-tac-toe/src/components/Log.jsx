export default function Log({turns}){
  return (
   <ol id="log">
    {turns.map((logEl) => {
      return <li key={logEl.Cell.row + "-" + logEl.Cell.col} className="highlighted">
        { `Cell   : (${logEl.Cell.row}, ${logEl.Cell.col}) selected with 
           Symbol : ${logEl.playerSymbol } `
        }
       </li>
    }
    
    )}
   </ol>
  );
}