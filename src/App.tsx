import { useEffect, useState } from "react";

export default function App() {
  const [count,setCount] = useState<number>(0)
  const [highScore,setHighScore] = useState<number>(
   Number(localStorage.getItem('high-score') || 0 )
  )

  const increaseCount = () => {
    setCount((prev) => prev+=1)
  }

  const decreaseCount = () => {
    setCount((prev) => prev-=1)
  }

  useEffect(() => {
    if(count > highScore) {
      const newHighScore = count;
      setHighScore(newHighScore)
      localStorage.setItem('high-score',String(newHighScore))
    }
  },[count,highScore])

  return (
    <section className="flex flex-col gap-2.5">

      <div className="flex flex-col gap-5 border border-black w-[400px] p-5">
        <img src="Images/sushi_mascot-removebg-preview.png" className="border border-red-600"/>
        <div className="text-5xl flex justify-evenly">
          <button className="flex justify-center items-center border border-black rounded-full h-[60px] w-[60px]"
            onClick={()=> {decreaseCount()}}
          >-</button>

          <div className="flex justify-center items-center border border-black rounded-2xl w-[100px] h-[60px]"
          >{count}</div>

          <button className="flex justify-center items-center border border-black rounded-full h-[60px] w-[60px]"
            onClick={()=> {increaseCount()}}
          >+</button>
        </div>
      </div>

      <div className="high-score border border-black">{`HIGH SCORE : ${highScore}`}</div>

    </section>
  )
}