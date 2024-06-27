import axios from "axios";
import {  useCallback, useEffect, useState } from "react";
import dividor_mobile from "./assets/pattern-divider-mobile.svg"
import dividor_desktop from "./assets/pattern-divider-desktop.svg"
import dice from "./assets/icon-dice.svg"
function App() {

  const [advice, setAdvice] = useState({id : '' , advice:''});
  const [loading, setLoading] = useState(false);
const [lastFetchTime, setLastFetchTime] = useState(0);

  const fetchData = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetchTime < 1000) return; // Debounce: only fetch if last fetch was more than 1 second ago
    setLoading(true);
    setLastFetchTime(now);

    try {
      const { data } = await axios.get(`https://api.adviceslip.com/advice`);
      setAdvice(data.slip);
    } catch (error) {
      console.error('Error fetching advice:', error);
    } finally {
      setLoading(false);
    }
  }, [lastFetchTime]);


  useEffect(() => { 
    fetchData();
  }, [])

  return (
    
    <div className="w-[340px] sm:w-[450px] rounded-md bg-dark-grayish-blue p-4 sm:p-8 flex flex-col justify-center gap-8 m-5">
      <div id="idCarrier" className="text-neon-green uppercase leading-loose text-center ">
          <span className=" text-xs tracking-[5px]">Advice <span className={`${loading ? " blur-[2px]" : " blur-0"} transition-all duration-200`}>#{advice.id}</span></span>
      </div>

      <div className=" min-h-[106px] sm:min-h-[132px] flex flec items-center justify-center text-[18px] text-light-cyan sm:text-[22px] font-bold text-center ">
        {!loading && advice &&  <span>`{advice.advice}`</span>}
        {loading && <span className=" animate-pulse text-lg">Loading...</span>}
      </div>

      {/* dividor */}
      <img src={dividor_mobile} alt="dividor" className="-mb-8 sm:hidden block" />
      <img src={dividor_desktop} alt="dividor" className="-mb-8 hidden sm:block" />
      
      <button onClick={fetchData} className=" transition-all duration-200 hover:opacity-85 rounded-full w-16 h-16 flex items-center justify-center mx-auto translate-y-1/2 -mb-4 sm:-mb-8 bg-neon-green">
        <img src={dice} alt="" />
      </button>
    </div>
  )
}

export default App;