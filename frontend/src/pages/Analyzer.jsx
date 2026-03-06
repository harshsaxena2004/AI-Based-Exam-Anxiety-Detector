import { useState } from "react"

export default function Analyzer({setPage}){

const [text,setText] = useState("")
const [result,setResult] = useState(null)

function analyze(){

const score = Math.random()

if(score < 0.33) setResult("Low Anxiety")
else if(score < 0.66) setResult("Moderate Anxiety")
else setResult("High Anxiety")

}

return(

<div className="flex flex-col items-center justify-center min-h-screen px-6">

<button
className="self-start mb-8 text-gray-400"
onClick={()=>setPage("home")}
>
← Back
</button>

<h2 className="text-3xl font-bold mb-4">How are you feeling?</h2>

<p className="text-gray-400 mb-8 text-center max-w-lg">
Share your thoughts about your upcoming exam.
</p>

<div className="w-full max-w-xl bg-white/5 p-6 rounded-2xl backdrop-blur">

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Write how you feel about your upcoming exam..."
className="w-full h-40 bg-transparent outline-none text-gray-200"
/>

<button
onClick={analyze}
className="mt-6 px-6 py-2 bg-cyan-500 rounded-full hover:bg-cyan-400">
Analyze
</button>

</div>

{result && (
<div className="mt-10 text-2xl font-semibold text-cyan-400">
Result: {result}
</div>
)}

</div>

)

}