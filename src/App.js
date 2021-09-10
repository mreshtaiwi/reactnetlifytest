import logo from './logo.svg';
import './App.css';
import React from "react";
import Parent from "../src/components/Parent.js";
class App extends React.Component {
  render() {
    return (
      <>
        <h2>states and props</h2>
        <p>welcome to main page</p>
        <Parent />
      </>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }