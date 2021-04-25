import './Contact.css';
import { useState } from 'react';

function Contact() {
  const password = "swordfish"
  const [isAuthorised, setIsAuthorised] = useState(false)

  const authorise = e => {
    const passwordInput = e.target.querySelector("input[type='password']")
    const passwordEntered = passwordInput.value
    const passwordMatched = password === passwordEntered
    console.log(password, passwordEntered, passwordMatched)
    setIsAuthorised(passwordMatched)
  }

  const loginForm = (
    <form 
      className="loginForm" 
      action="#" 
      onSubmit={authorise}
    >
      <input
        type="password"
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  )

  const contactInfo = (
    <ul className="contactInfo">
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  )

  return (
    <div className="Contact">
      <h1>
        {
          isAuthorised
            ? "Contact"
            : "Enter password"
        }
      </h1>
      {
        isAuthorised
          ? contactInfo
          : loginForm
      }
    </div>
  );
}

export default Contact;
