import { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react"
import { ExamDTO, QuestionDTO } from "../../rest/DomainApi";

interface UploadFileProps{
    fileSelectionFinished:(exam:ExamDTO[])=>void;
}

export  const UploadFile=(props:UploadFileProps)=>{
   const [examList, setExamList]=useState<ExamDTO[]>([] as ExamDTO[]);
    function handleFileUpload(event:any) {
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = JSON.parse(e.target!.result?.toString() || "");
          setExamList(jsonData);
        };
        reader.readAsText(file);
      }
 

    
return <><Input type="file" onChange={handleFileUpload} /> <Button onClick={()=>props.fileSelectionFinished(examList)} label="Oluştur"/></> 
}