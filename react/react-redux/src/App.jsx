import './App.css'

import { CakeView } from "./services/cake/CakeView";
import { IcecreamView } from "./services/icecream/IcecreamView";
import { UserView } from "./services/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  )
}

export default App
