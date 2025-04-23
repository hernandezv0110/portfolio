import styles from "./Contact.module.css";
import { useState } from "react";

function Projects({ contactRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.Contact}>
      <h1 ref={contactRef} className={styles["white-text"]}>
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Projects;
