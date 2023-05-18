import { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react"
import { QuestionDTO } from "../../rest/DomainApi";

interface UploadFileProps{
    fileSelectionFinished:(question:QuestionDTO[])=>void;
}

export  const UploadFile=(props:UploadFileProps)=>{
   const [questions, setQuestions]=useState<Object[]>([] as Object[]);
    function handleFileUpload(event:any) {
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = JSON.parse(e.target!.result?.toString() || "");
          setQuestions(jsonData);
        };
        reader.readAsText(file);
      }
 
    useEffect(()=>{

    },[questions])
    
return <><Input type="file" onChange={handleFileUpload} /> <Button onClick={()=>props.fileSelectionFinished(questions)} label="Oluştur"/></> 
}