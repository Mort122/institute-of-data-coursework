// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Address from '../src/address.jsx'
import React, { useState} from 'react';
// import MoviesList from '../MoviesList.jsx'
// import BigCats from '../BigCats'
// import './App.css';
// import BitcoinRates from '../bitcoin';
// import BitcoinRates from '../bitcoinExercise2';
import BitcoinRates from '../bitcoinUseReducer';






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
          {/* <h1>Watch Out For These Cats!</h1> */}
          
           {/* <Address 
//               streetName="452 MaryDale Rd"
//               state="Louisiana"
//               country="United States"
//               zipCode="71201"
//           />

//           <Address /> */}

{/* //           <MoviesList/> */}

          {/* {<BigCats/>} */}
          {<BitcoinRates/>}
       </div>
  );
}

// function App() {
//     const [input, setInput] = useState('');
//     const [error, setError] = useState(null);
//     const [rotation, setRotation] = useState(0);

//     const handleEvaluate = () => {
//         try {
//             setInput(eval(input).toString());
//             setError(null);
//         } catch (err) {
//             setError('Invalid Expression');
//         }
//     };

//     const handleRotate = () => {
//         setRotation((prevRotation) => (prevRotation + 90) % 360);
//     };

//     const handleButtonClick = (value) => {
//         setInput(prevInput => prevInput + value);
//     };

//     return (
//         <div className="App" style={{ transform: `rotate(${rotation}deg)` }}>
//             <h1>Simple Calculator</h1>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//             <div>
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
//                     <button key={num} onClick={() => handleButtonClick(num.toString())}>{num}</button>
//                 ))}

//                 <button onClick={() => handleButtonClick('+')}>+</button>
//                 <button onClick={() => handleButtonClick('-')}>-</button>
//                 <button onClick={() => handleButtonClick('*')}>×</button>
//                 <button onClick={() => handleButtonClick('/')}>÷</button>
//                 <button onClick={() => handleButtonClick('%')}>%</button>
//                 <button onClick={() => setInput('')}>C</button>
//                 <button onClick={handleEvaluate}>=</button>
//                 <button onClick={handleRotate}>Rotate</button>
//             </div>
//         </div>
//     );
// }

export default App;