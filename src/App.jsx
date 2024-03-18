import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Tools from "./components/Tools"

function App() {

  return (
    <>
      <div className="top-0 fixed w-screen h-screen flex justify-center items-center -z-10">
        <div className=" size-[560px] bg-white rounded-full blur-[250px]"> manger beta</div>
      </div>
      <Nav/>
      <Hero/>
      <Tools/>
    </>
  )
}

export default App
