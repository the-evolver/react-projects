
export default function Logs({allLogs}){

  return (
    <table id="result" >
  <thead>
    <tr>
      <th>Year</th>
      <th>Investment Value </th>
      <th>Interest(Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
  </thead>
  <tbody>
    
    {
      
      allLogs.map((investmentObj) => 
        <tr key={investmentObj.year}>
          <td>{investmentObj.year}</td>
          <td>{investmentObj.valueEndOfYear}</td>
          <td>{investmentObj.interest}</td>
          <td>{investmentObj.totalInterest}</td>
          <td>{investmentObj.investedCapital}</td>
          
        </tr>
      )
      
    }
  </tbody>
</table>

  )
}