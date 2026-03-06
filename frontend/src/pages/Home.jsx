import { Brain } from "lucide-react"

export default function Home({setPage}){

return(

<div className="flex flex-col items-center justify-center min-h-screen text-center px-6">

<div className="bg-indigo-500/10 p-6 rounded-2xl mb-6">
<Brain size={60}/>
</div>

<h1 className="text-5xl font-bold">
AI Exam Anxiety <span className="text-cyan-400">Detector</span>
</h1>

<p className="mt-6 max-w-xl text-gray-300">
Detect and understand exam stress using Artificial Intelligence.
Get personalized insights and suggestions.
</p>

<button
onClick={()=>setPage("analyze")}
className="mt-8 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition">
Start Analysis →
</button>

<div className="grid grid-cols-3 gap-6 mt-16">

<div className="bg-white/5 p-6 rounded-xl">
<h3 className="text-lg font-semibold">AI Powered</h3>
<p className="text-gray-400 text-sm">Advanced NLP analysis</p>
</div>

<div className="bg-white/5 p-6 rounded-xl">
<h3 className="text-lg font-semibold">Instant Results</h3>
<p className="text-gray-400 text-sm">Feedback in seconds</p>
</div>

<div className="bg-white/5 p-6 rounded-xl">
<h3 className="text-lg font-semibold">Personalized</h3>
<p className="text-gray-400 text-sm">Tailored suggestions</p>
</div>

</div>

</div>

)

}