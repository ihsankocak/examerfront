import { useEffect, useState } from "react";
import { UploadFile } from "../common/UploadFile"
import { DomainApi, ExamDTO, HttpClient, HttpResponse, QuestionDTO } from "../../rest/DomainApi"
import { useFetcher } from "react-router-dom";
import { getJwt } from "../util/UserService";
export const CreateExam = () => {
    const [domainApi, setDomainApi] = useState(new DomainApi({ baseApiParams: { format: "json",secure:true} }));
    domainApi.setSecurityData(getJwt());
    const fileSelectionFinished = (examList: ExamDTO[]) => {
       
        const userInfo=JSON.parse(localStorage.getItem("userInfo")!);
        const authHeader = userInfo.jwt;
        const owner=userInfo.username;
        console.log("headr and owner",authHeader,owner);
        
        domainApi.exam.createExamList
            (examList, {
                headers: {
                "Authorization": "Bearer ".concat(authHeader),
                "owner":owner
                }
            })
            .then((response) => console.log(response.status));
    }



    return <>Sınav Oluştur<UploadFile fileSelectionFinished={fileSelectionFinished} /></>
}