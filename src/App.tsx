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

      <div className="flex flex-col gap-5 bg-amber-50 border-4 border-black w-[400px] px-5 py-7 rounded-2xl">
        <img src="Images/sushi_mascot-removebg-preview.png"/>
        <div className="text-5xl flex justify-evenly">
          <button className="flex justify-center items-center text-white bg-red-300 border-4 border-black rounded-full h-[60px] w-[60px] hover:bg-red-200"
            onClick={()=> {decreaseCount()}}
          >-</button>

          <div className="flex justify-center items-center bg-white border-4 border-black rounded-2xl w-[100px] h-[60px]"
          >{count}</div>

          <button className="flex justify-center items-center text-white bg-red-300 border-4 border-black rounded-full h-[60px] w-[60px] hover:bg-red-200"
            onClick={()=> {increaseCount()}}
          >+</button>
        </div>
      </div>

      <div className="high-score text-4xl text-white flex justify-center items-center rounded-2xl h-[80px] border-4 bg-red-300 border-black">{`HIGH SCORE : ${highScore}`}</div>

    </section>
  )
}