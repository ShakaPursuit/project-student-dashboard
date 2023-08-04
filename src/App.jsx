import TopBar from "./TopBar";
import StudentList from "./StudentList";
import  "./App.css"
// import StudentCard from "./StudentCard";
 import StudentCards from "./StudentCard";
import data from "../src/data/data.json"
console.log(data)




  

function App() {
  return (
    <>
      <TopBar/>
      <main className="container">
          <section><StudentList/></section>
          <section><StudentCards/></section>



      </main>
    
    
    
    
    
    </>
  );
}

export default App;
