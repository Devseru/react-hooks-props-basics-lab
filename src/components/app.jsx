import React from "react";
import ReactDOM from "react-dom";

// User data
const user = {
  name: "Liza",
  city: "New York",
  color: "firebrick",
  bio: "I blog about web development",
  links: {
    github: "https://github.com/Liza",
    linkedin: "https://www.linkedin.com/in/Liza",
  },
};

// NavBar component
function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

// Home component
function Home({ name, city, color }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

// Links component
function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

// About component
function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

// App component
function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

// Render the App component to the DOM using ReactDOM.render
ReactDOM.render(<App />, document.getElementById("root"));
