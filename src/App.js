import { useState } from "react";

import Toolbar from "./components/Toolbar";
import AuthButton from "./components/AuthButton";

function App() {
  const [auth, setAuth] = useState('');

  return (
    <div className="App">
      <Toolbar setAuth={setAuth}/>
      <AuthButton auth={auth}/>
    </div>
  );
}

export default App;
