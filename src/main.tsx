// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  HashRouter, Route, Routes, NavLink, useParams,
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
const contents = [
  { id: 1, title: 'HTML', description: 'HTML is' },
  { id: 2, title: 'JS', description: 'JS is' },
  { id: 3, title: 'React', description: 'React is' },
];

function Topic() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h3>Topic</h3>
      Topic...?????????????????
    </div>
  );
}

function Topics() {
  const lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>,
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li> */}
        {lis}
      </ul>
      {/* <Routes>
        <Route path="/1" element="HTML is..." />
        <Route path="/2" element="JS is..." />
        <Route path="/3" element="React is..." />
      </Routes> */}
      <Routes>
        <Route path="/:topic_id" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element="not Found" />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
