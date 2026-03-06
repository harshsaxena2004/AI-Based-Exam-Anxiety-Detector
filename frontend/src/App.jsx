import { useState } from "react"
import Home from "./pages/Home"
import Analyzer from "./pages/Analyzer"

function App() {

const [page,setPage] = useState("home")

return (

<div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">

{page==="home" && <Home setPage={setPage}/>}
{page==="analyze" && <Analyzer setPage={setPage}/>}

</div>

)

}

export default App