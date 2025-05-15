import { useState } from "react"
import Field from "./Field"
import {calculateInvestmentResults} from "../util/investment";

// const INVESTMENT_FIELDS = {
//   "INITIAL INVESTMENT": 0,
//   "ANNUAL  INVESTMENT": 0,
//   "EXPECTED RETURN": 0,
//   "DURATION ": 0,
// }

// const keyFields = ["INITIAL INVESTMENT","ANNUAL  INVESTMENT","EXPECTED RETURN","DURATION "];

const INVESTMENT_FIELDS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};
const keyFields = ["initialInvestment", "annualInvestment", "expectedReturn", "duration"];
const labelMap = {
  initialInvestment: "Initial Investment",
  annualInvestment: "Annual Investment",
  expectedReturn: "Expected Return",
  duration: "Duration"
};

// function checkAllFields(fields){
//   console.log(" ---------------------- ");
//   for (const value of Object.values(fields)) {
        
//         console.log(" value ",value);
//         if(value == 0 || !value)
//             return false;
//   }
//   return true;
// }


export default function Calculator({updateLog}){
  const [fields,setFields] = useState(INVESTMENT_FIELDS);
  
  
  function handleFieldsUpdation(value,key){
    console.log(" key ",key," value ",value);
    const newFields = {...fields};
    newFields[key] = value;
    setFields(newFields);

// if we want that investment calculation only happen when all fields have valid value ....
// const allValid = Object.values(newFields).every(val => val && Number(val) > 0);
// if (allValid) {
              
         const calcInvestmentData = [...calculateInvestmentResults(
                                    Number(newFields[keyFields[0]]),
                                    Number(newFields[keyFields[1]]),
                                    Number(newFields[keyFields[2]]),
                                    Number(newFields[keyFields[3]]))];
                
          updateLog(calcInvestmentData);
           
// }
    
  
  }
  

  return (
    <div id="user-input"  >
      <div className="input-group">
        <Field labelMessage={labelMap[keyFields[0]]} 
               typeOfField="number" 
               inputValue={fields[keyFields[0]]} 
               fieldKey={keyFields[0]}
               onSave={handleFieldsUpdation}>

        </Field>
        <Field labelMessage={labelMap[keyFields[1]]} 
               typeOfField="number" 
               inputValue={fields[keyFields[1]]} 
               fieldKey={keyFields[1]}
               onSave={handleFieldsUpdation}>

        </Field>
      </div>
      <div className="input-group">
           <Field labelMessage={labelMap[keyFields[2]]} 
                  typeOfField="number" 
                  inputValue={fields[keyFields[2]]} 
                  fieldKey={keyFields[2]}
                  onSave={handleFieldsUpdation}>
                
            </Field>
            <Field labelMessage={labelMap[keyFields[3]]} 
                   typeOfField="number" 
                   inputValue={fields[keyFields[3]]} 
                   fieldKey={keyFields[3]}
                   onSave={handleFieldsUpdation}>
                
            </Field>
     </div>
    </div>
  )
}