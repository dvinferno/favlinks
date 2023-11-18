/* eslint-disable react/prop-types */
import { useState } from "react";

function Form(props) {
  const [state, setState] = useState({
    linkName: "",
    linkURL: "",
  });

  const submitForm = (e) => {
    if (state.linkName == "" && state.linkURL == "") {return}
    e.preventDefault();
    props.handleSubmit({
      name: state.linkName,
      URL: state.linkURL,
    });
  };

  // Update the state when the name field changes
  const handleNameChange = (e) => {
    setState({ ...state, linkName: e.target.value });
  };

  // Update the state when the URL field changes
  const handleURLChange = (e) => {
    setState({ ...state, linkURL: e.target.value });
  };

  return (
    <form>
      <label htmlFor="linkName">Name: </label>
      <input
        type="text"
        id="linkName"
        name="linkName"
        value={state.linkName}
        onChange={handleNameChange}
      />
      <br />
      <br />
      <label htmlFor="URL">URL: </label>
      <input
        type="text"
        id="linkURL"
        name="linkURL"
        value={state.linkURL}
        onChange={handleURLChange}
      />
      <br />
      <br />
      <button id="submit" onClick={submitForm}>Submit</button>
    </form>
  );
}

export default Form;
