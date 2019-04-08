import React, { useState } from "react";


const FormBuilder = () => {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleSubmit(e) {
      
      e.preventDefault();
      let str = e.target.outerHTML.toString()
      let data = {formStructure : (str)}
    //   let jsonForm = JSON.stringify(data);

      console.log(data)
  }

  return (
    <div className="App">
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Formbuilder Test</h1>

      <button type="button" onClick={() => handleAdd()}>
        +
      </button>

      {fields.map((field, idx) => {
        return (
            
          <div className="form" key={`${field}-${idx}`}>
          <label>Question</label>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
         
          );
        })}
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormBuilder