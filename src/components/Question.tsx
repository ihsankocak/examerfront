
import { useEffect, useState } from "react";
import { DomainApi, HttpClient,HttpResponse, QuestionDTO } from "../rest/DomainApi"
import  '../styles/style.css';
import { audioSetup } from "./common/MicrophoneAccessor";

export const Question=()=>{
    const [questions,setQuestions]=useState([] as QuestionDTO[]);
    const [domainApi,setDomainApi]=useState(new DomainApi({baseApiParams:{format:"json"}}));
    const dataWasRead=(data:Blob)=>{
        
    }

    const audioProps={
        dataWasRead:dataWasRead
    }
     
    audioSetup(audioProps);
    const audioContext = new AudioContext();
    
  
    useEffect(()=>{
        //const domainApi=new DomainApi({baseApiParams:{format:"json"}});
        domainApi.solvables.getDefaultSolvables().then((response:HttpResponse<QuestionDTO[], any>)=>{
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
      {  questions.map((question,index)=> {
        console.log(index);
        
        return (<div key={"questiondiv"+index}>
        <p >{question.problem}</p>
      
        {question.choices?.map((choice:string,choiceindex:number)=>{return <button key={index + "_"+choiceindex} className="default" 
                                                                    id={`btn_${choice}`} 
                                                                    onClick={event=>{onTry2Solve(question.id!,choice,event.currentTarget.id)}}>{choice}</button>})}
        </div>);
        
        })}

        
       
    </div> 
}