import UserProfile from "./components/UserProfile"


function App() {
  const usuario = {
    nome: "Wladison",
    status: "ativo"
  };
  return (
    <>
      <UserProfile profile={usuario}></UserProfile>
    </>
  )
}

export default App
