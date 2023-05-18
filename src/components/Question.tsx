
import { useEffect, useState } from "react";
import { DomainApi, HttpClient,HttpResponse,BaseSolvableWithChoosableStringString } from "../rest/DomainApi"
import  '../styles/style.css';
export const Question=()=>{
    const [questions,setQuestions]=useState([] as BaseSolvableWithChoosableStringString[]);
    const [domainApi,setDomainApi]=useState(new DomainApi({baseApiParams:{format:"json"}}));
    useEffect(()=>{
        //const domainApi=new DomainApi({baseApiParams:{format:"json"}});
        domainApi.solvables.getDefaultSolvables().then((response:HttpResponse<BaseSolvableWithChoosableStringString[], any>)=>{
         console.log("GELDI:",response);
         
     setQuestions(response.data);
        })
    },[]);
   
    const onTry2Solve=(questionId:number,value:string,buttonId:string)=>{
        let audio= new Audio("./src/assets/correct.mp3");
domainApi.solvables.answer(questionId,value).then(response=>{if(response.data!==true){
    audio = new Audio("./src/assets/wrong.mp3");
    
}
audio.play();
})
    }
    return <div>

<img  src="https://cdn.pixabay.com/photo/2022/09/28/05/53/squirrel-7484292_960_720.jpg" ></img>
      {  questions.map((question,index)=> {
        console.log(index);
        
        return (<div key={"questiondiv"+index}>
        <p >{question.problem}</p>
      
        {question.choosable?.choices?.map((choice,choiceindex)=>{return <button key={index + "_"+choiceindex} className="default" 
                                                                    id={`btn_${choice}`} 
                                                                    onClick={event=>{onTry2Solve(question.id!,choice,event.currentTarget.id)}}>{choice}</button>})}
        </div>);
        
        })}

        
       
    </div> 
}