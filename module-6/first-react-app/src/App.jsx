import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Address from '../src/address.jsx'
import React from 'react'
import MoviesList from '../MoviesList.jsx'
import BigCats from '../BigCats'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }





function App() {
  return (
      <div className="App">
          <h1>Watch Out For These Cats!</h1>
          
          {/* <Address 
              streetName="452 MaryDale Rd"
              state="Louisiana"
              country="United States"
              zipCode="71201"
          />

          <Address /> */}

          {/* <MoviesList/> */}

          {<BigCats/>}

      </div>
  );
}

export default App

