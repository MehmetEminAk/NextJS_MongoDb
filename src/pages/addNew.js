import { useState } from "react";

export default function AddMovie() {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/addNew", {
      method: "POST",
      body: JSON.stringify({ newTitle, newBody, newAuthor , newCategory }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setMessage(data.message);
    setNewAuthor("");
    setNewBody("");
    setNewTitle("");
    setNewCategory("");
  };

  return (
    <div>
      <h1>Add New</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          New Title:
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
        <br />
        <br />
        <br />
        <label>
          New Body:
          <input
            type="text"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
        </label>
        <br />
        <br />
        <br />
        <label>
          New Author:
          <textarea value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
        </label>
        <br />
        <br />
        <br />
        <label>
          New Category:
          <textarea value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        </label>
        <br />
        <br /><br />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
}