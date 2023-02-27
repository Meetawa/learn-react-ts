import TypingProps from './components/TypingProps'
import TypesPropsBasic from './components/TypesPropsBasic'
function App() {
  const PersonNames={
    first:"rahul",
    last:"saini"
  }
  return (
    <div>
      <TypingProps name={"rahul saini"}
      rollno={10001}
      Age={true}
      />
      <TypesPropsBasic  name={PersonNames}/>
    </div>
  )
}

export default App
