export default function Field({labelMessage,typeOfField,fieldKey,inputValue,onSave}){
  function handleKeyDown(event){
    if (["e", "E", "+", "-"].includes(event.key)) event.preventDefault();
  };

  function handlePaste(event){
    const pasted = event.clipboardData.getData("Text");
    if (!/^\d*\.?\d*$/.test(pasted)) event.preventDefault();
  };

  function handleDrop(event){
    const dropped = event.dataTransfer.getData("text");
    if (!/^\d*\.?\d*$/.test(dropped)) event.preventDefault();
  };

  function handleChange(event){
    const value = event.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      onSave(value, fieldKey);
    }
  };

  return (
    <div >
     <label >{labelMessage}</label>
     <input  type={typeOfField} 
             value={inputValue} 
             required 
             min={1}
             onChange={handleChange} 
             onKeyDown={handleKeyDown}
             onPaste={handlePaste}
             onDrop={handleDrop}
             >

     </input>
    </div>
  )

}