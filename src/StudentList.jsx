// import StudentCards from "./StudentCard";
// import StudentCardsAll from "./StudentCardAllStudents";
export default function StudentList() {
        
    function handleCohort(){
        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')

        winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       fallStuds06.setAttribute("hidden","hidden")
       
       sumStuds06.setAttribute("hidden","hidden")
       fallStuds05.setAttribute("hidden","hidden")
       sumStuds05.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
       sprStuds06.setAttribute("hidden","hidden")
       
       
            allStuds.removeAttribute('hidden')


            
        

     

        
    }

    function handleCohortSpring2026(){

        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')
        allStuds.setAttribute("hidden","hidden")
        winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       
       
       sumStuds06.setAttribute("hidden","hidden")
       fallStuds05.setAttribute("hidden","hidden")
       sumStuds05.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
       fallStuds06.setAttribute("hidden","hidden")
         
             sprStuds06.removeAttribute('hidden')
 
 
         
 
      
 
         
     }
    
     function handleCohortFall2026(){
       
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')

        const  fallStuds06=document.querySelector('div.fall2026')
        const  allStuds=document.querySelector('div.all-students')
        

        allStuds.setAttribute("hidden","hidden")
        winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       
       
       
       fallStuds05.setAttribute("hidden","hidden")
       sumStuds05.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
       
       sumStuds06.setAttribute("hidden","hidden")
       sprStuds06.setAttribute("hidden","hidden")
         
             fallStuds06.removeAttribute('hidden')
 
 
         
 
      
 
         
     }
     function handleCohortSummer2026(){

        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')

        fallStuds05.setAttribute("hidden","hidden")
        sprStuds06.setAttribute("hidden","hidden")
        allStuds.setAttribute("hidden","hidden")
        winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       
       
       
       
       sumStuds05.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
       fallStuds06.setAttribute("hidden","hidden")
         
             sumStuds06.removeAttribute('hidden')
             
 
 
         
 
      
 
         
     }
     
     
     function handleCohortFall2025(){

        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')
        
        sprStuds06.setAttribute("hidden","hidden")
        allStuds.setAttribute("hidden","hidden")
        winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       
       
       
       
       sumStuds05.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
       fallStuds06.setAttribute("hidden","hidden")
       sumStuds06.setAttribute("hidden","hidden")
         
             fallStuds05.removeAttribute('hidden')
 
 
         
 
      
 
         
     }
     function handleCohortSummer2025(){

        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')
        allStuds.setAttribute("hidden","hidden")
        sprStuds06.setAttribute("hidden","hidden")
        fallStuds05.setAttribute("hidden","hidden")
        
        winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
       fallStuds06.setAttribute("hidden","hidden")
       sumStuds06.setAttribute("hidden","hidden")
     
       
         
             sumStuds05.removeAttribute('hidden')
 
 
         
 
      
 
         
     }

     
     function handleCohortWinter2025(){

        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')
        allStuds.setAttribute("hidden","hidden")
        sprStuds06.setAttribute("hidden","hidden")
        
        
       winStuds06.setAttribute("hidden","hidden")
       fallStuds05.setAttribute("hidden","hidden")
       
       fallStuds06.setAttribute("hidden","hidden")
       sumStuds06.setAttribute("hidden","hidden")
       sumStuds05.setAttribute("hidden","hidden")
       springStuds05.setAttribute("hidden","hidden")
         
             winStuds05.removeAttribute('hidden')
 
 
         
 
      
 
         
     }
     function handleCohortSpring2025(){

        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')
        allStuds.setAttribute("hidden","hidden")
        sprStuds06.setAttribute("hidden","hidden")
        
        
     
       fallStuds05.setAttribute("hidden","hidden")
       
       fallStuds06.setAttribute("hidden","hidden")
       sumStuds06.setAttribute("hidden","hidden")
       sumStuds05.setAttribute("hidden","hidden")
       winStuds05.setAttribute("hidden","hidden")
       winStuds06.setAttribute("hidden","hidden")
       
         
             springStuds05.removeAttribute('hidden')
 
 
         
 
      
 
         
     }
     function handleCohortWinter2026(){
        const  allStuds=document.querySelector('div.all-students')
        const  winStuds06=document.querySelector('div.winter2026')
        const  sprStuds06=document.querySelector('div.spring2026')
        const  fallStuds06=document.querySelector('div.fall2026')
        const  sumStuds06=document.querySelector('div.summer2026')
        const  fallStuds05=document.querySelector('div.fall2025')
        const  sumStuds05=document.querySelector('div.summer2025')
        const  winStuds05=document.querySelector('div.winter2025')
        const  springStuds05=document.querySelector('div.spring2025')

       
        allStuds.setAttribute("hidden","hidden")
        sprStuds06.setAttribute("hidden","hidden")
        springStuds05.setAttribute("hidden","hidden")
        
        
     
       fallStuds05.setAttribute("hidden","hidden")
       
       fallStuds06.setAttribute("hidden","hidden")
       sumStuds06.setAttribute("hidden","hidden")
       sumStuds05.setAttribute("hidden","hidden")
       winStuds05.setAttribute("hidden","hidden")



             winStuds06.removeAttribute('hidden')
             
 
 
         
 
      
 
         
     }



    return (<>
        <h2>Choose a class by Start Date</h2>
        <ul key="startDate">
            <li key="all"> <button onClick={handleCohort}>All Students </button></li><hr></hr>
            <li key="spring2025"><button onClick={handleCohortWinter2026}>Winter 2026</button></li><hr></hr>
            <li key="fall06"><button onClick={handleCohortFall2026}>Fall 2026</button></li><hr></hr>
            <li key="summer06"><button onClick={handleCohortSummer2026}> Summer 2026</button></li><hr></hr>
            <li key="spring06"><button onClick={handleCohortSpring2026}>Spring 2026</button></li><hr></hr>
            <li key="winter05"><button onClick={handleCohortWinter2025}>Winter 2025</button></li><hr></hr>
            <li key="fall05"><button onClick={handleCohortFall2025}>Fall 2025</button></li><hr></hr>
            <li key="summer2025"><button onClick={handleCohortSummer2025}>Summer 2025</button></li><hr></hr>
            <li key="spring2025"><button onClick={handleCohortSpring2025}>Spring 2025</button></li><hr></hr>
           








        </ul>

    </>);

    
}