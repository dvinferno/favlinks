import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([]);

  const handleRemove = (index) => {
        setFavLinks((prevState) => {
            const newArray = prevState.filter((item, i) => i !== index)
            return newArray
        })
  };

    const handleSubmit = (favLink) => {
      const newArray = favLinks.concat(favLink)
      setFavLinks(newArray)
    }

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>
      <Table linkData={favLinks} removeLink={handleRemove} />
      <h1>Add New</h1>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
export default LinkContainer;
