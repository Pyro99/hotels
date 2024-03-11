import hotels from "./utils/hotels"
function App() {
  return (
    <>
    <h1 className='text-5xl bg-orange-400'>HELLO!!!</h1>
    <img src={hotels[0].hotel1} alt="hotel1"/>
    </>
  )
}

export default App
