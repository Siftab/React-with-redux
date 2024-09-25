
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Redux/features/counterSlice"
import { RootState } from "./Redux/store"


function App() {
  const count = useSelector((state:RootState)=>state.counter.count)
  const dispatch = useDispatch()
  // const [count, setCount] = useState(0)
  // const [count,setCount]=useState(0)
console.log(count)
  return (
   <div>

   <div className="flex flex-col justify-center items-center  h-screen space-y-10">
   <h1 className="text-3xl">React With Redux</h1>
 
   <div className="flex space-x-9 border border-indigo-600 p-32">
   <button className="px-4 rounded-md text-white py-3 bg-green-500 font-semibold" onClick={()=>dispatch(increment())}>increment</button>
    <p className=" text-3xl">{count}</p>
    <button className="px-4 rounded-md text-white py-3 bg-red-500 font-semibold" onClick={()=>dispatch(decrement())}>decrement</button>
   </div>
   </div>
   </div>
  )
}

export default App
