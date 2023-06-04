import { useEffect, useState } from "react";
import { UploadFile } from "../common/UploadFile"
import { DomainApi, HttpClient,HttpResponse, QuestionDTO } from "../../rest/DomainApi"
import { useFetcher } from "react-router-dom";
export  const CreateExam=()=>{
    const [domainApi,setDomainApi]=useState(new DomainApi({baseApiParams:{format:"json"}}));
    const fileSelectionFinished=(questions:Object[])=>{
       console.log(questions);
       
            domainApi.solvables.createQuestions(questions).then((response)=>console.log(response.status));
        }

    

    return <UploadFile fileSelectionFinished={fileSelectionFinished}/>
}