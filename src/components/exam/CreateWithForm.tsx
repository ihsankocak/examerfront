import { useEffect, useState } from "react";
import { UploadFile } from "../common/UploadFile"
import { DomainApi, ExamDTO, HttpClient, HttpResponse, QuestionDTO } from "../../rest/DomainApi"
import { useFetcher } from "react-router-dom";
import { getLoggedInUser } from "../util/UserService";
export const CreateExam = () => {
    const [domainApi, setDomainApi] = useState(new DomainApi({ baseApiParams: { format: "json" } }));
    const fileSelectionFinished = (examList: ExamDTO[]) => {
        const loggedInUser = getLoggedInUser();
        domainApi.exam.createExamList(examList, { headers: { "owner": loggedInUser } })
    }



    return <UploadFile fileSelectionFinished={fileSelectionFinished} />
}