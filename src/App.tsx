import { useState } from "react"


function App() {
  // const [count, setCount] = useState(0)
  const [count,setCount]=useState(0)

  return (
   <div>

   <div className="flex flex-col justify-center items-center border border-indigo-600 h-screen space-y-10">
   <h1 className="text-3xl">React With Redux</h1>
 
   <div className="flex space-x-9">
   <button className="px-4 rounded-md text-white py-3 bg-green-500 font-semibold">increment</button>
    <p className=" text-3xl">{count}</p>
    <button className="px-4 rounded-md text-white py-3 bg-red-500 font-semibold">decrement</button>
   </div>
   </div>
   </div>
  )
}

export default App
