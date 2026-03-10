import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./lab21/Counter";
import HelloConsole from "./lab21/HelloConsole";
import ActionStateForm from "./lab21/ActionStateForm";
import CallbackDemo from "./lab21/CallbackDemo";

import PropDrilling from "./lab22/PropDrilling";
import ContextDemo from "./lab22/ContextDemo";
import DebugValueDemo from "./lab22/DebugValueDemo";
import DeferredValueDemo from "./lab22/DeferredValueDemo";

import ImperativeHandleDemo from "./lab23/ImperativeHandleDemo";
import LayoutEffectDemo from "./lab23/LayoutEffectDemo";
import PrimeSum from "./lab23/PrimeSum";
import PrimeSumMemo from "./lab23/PrimeSumMemo";
import OptimisticDemo from "./lab23/OptimisticDemo";

import ReducerDemo from "./lab24/ReducerDemo";
import RefDemo from "./lab24/RefDemo";
import OnlineStatus from "./lab24/OnlineStatus";
import TransitionDemo from "./lab24/TransitionDemo";
import FormStatusDemo from "./lab24/FormStatusDemo";

function App() {

const page = {
  minHeight: "100vh",
  background: "#f5f6f8",
  padding: "40px",
  fontFamily: "system-ui, sans-serif"
};

const title = {
  textAlign: "center",
  fontSize: "34px",
  marginBottom: "40px",
  fontWeight: "600",
  color: "#222"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "25px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const card = {
  background: "white",
  padding: "22px",
  borderRadius: "10px",
  border: "1px solid #e6e6e6"
};

const cardTitle = {
  marginBottom: "12px",
  fontSize: "20px",
  fontWeight: "600",
  color: "#333"
};

const link = {
  display: "block",
  padding: "7px 0",
  textDecoration: "none",
  color: "#2563eb",
  fontSize: "15px"
};

return (

<Router>

<div style={page}>

<h1 style={title}>React Hooks Lab</h1>

<div style={grid}>

{/* LAB 21 */}
<div style={card}>
<h3 style={cardTitle}>Lab 21</h3>

<Link style={link} to="/counter">useState Counter</Link>
<Link style={link} to="/hello">useEffect Console</Link>
<Link style={link} to="/action">useActionState Form</Link>
<Link style={link} to="/callback">useCallback Demo</Link>

</div>

{/* LAB 22 */}
<div style={card}>

<h3 style={cardTitle}>Lab 22</h3>

<Link style={link} to="/prop">Prop Drilling</Link>
<Link style={link} to="/context">useContext Demo</Link>
<Link style={link} to="/debug">useDebugValue</Link>
<Link style={link} to="/deferred">useDeferredValue</Link>

</div>

{/* LAB 23 */}
<div style={card}>

<h3 style={cardTitle}>Lab 23</h3>

<Link style={link} to="/imperative">useImperativeHandle</Link>
<Link style={link} to="/layout">useLayoutEffect</Link>
<Link style={link} to="/prime">Prime Sum</Link>
<Link style={link} to="/primememo">Prime Sum (useMemo)</Link>
<Link style={link} to="/optimistic">useOptimistic</Link>

</div>

{/* LAB 24 */}
<div style={card}>

<h3 style={cardTitle}>Lab 24</h3>

<Link style={link} to="/reducer">useReducer</Link>
<Link style={link} to="/ref">useRef</Link>
<Link style={link} to="/online">Online Status</Link>
<Link style={link} to="/transition">useTransition</Link>
<Link style={link} to="/formstatus">useFormStatus</Link>

</div>

</div>

{/* ROUTES */}

<Routes>

<Route path="/counter" element={<Counter/>}/>
<Route path="/hello" element={<HelloConsole/>}/>
<Route path="/action" element={<ActionStateForm/>}/>
<Route path="/callback" element={<CallbackDemo/>}/>

<Route path="/prop" element={<PropDrilling/>}/>
<Route path="/context" element={<ContextDemo/>}/>
<Route path="/debug" element={<DebugValueDemo/>}/>
<Route path="/deferred" element={<DeferredValueDemo/>}/>

<Route path="/imperative" element={<ImperativeHandleDemo/>}/>
<Route path="/layout" element={<LayoutEffectDemo/>}/>
<Route path="/prime" element={<PrimeSum/>}/>
<Route path="/primememo" element={<PrimeSumMemo/>}/>
<Route path="/optimistic" element={<OptimisticDemo/>}/>

<Route path="/reducer" element={<ReducerDemo/>}/>
<Route path="/ref" element={<RefDemo/>}/>
<Route path="/online" element={<OnlineStatus/>}/>
<Route path="/transition" element={<TransitionDemo/>}/>
<Route path="/formstatus" element={<FormStatusDemo/>}/>

</Routes>

</div>

</Router>

);
}

export default App;