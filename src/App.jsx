import { Suspense } from 'react';
import './App.css';
import DaisyNav from './components/DaisyNav/DaisyNav';
import Link from './components/Navbar/Link';
import Navbar from './components/Navbar/Navbar';
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultsCharts from './components/ResultChart/ResultsCharts';
import axios from 'axios';
import MarksChart from './components/MarksCharts/MarksChart';

const PricingPromise = fetch('pricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultsCharts></ResultsCharts>
      </main>
    </>
  );
}

export default App;
