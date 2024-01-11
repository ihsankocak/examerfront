
import { useEffect, useState } from "react";
import {
    DomainApi, EntityModelExam,
    ExamDTO, HttpClient, HttpResponse, QuestionDTO
} from "../../rest/DomainApi"
import { getJwt, getLoggedInUser } from "../util/UserService";
import { Question } from "../Question";



export const Exam = () => {
    const [questions, setQuestions] = useState([] as QuestionDTO[]);
    const [exams, setExams] = useState([] as ExamDTO[]);
    const [selectedExam, setSelectedExam] = useState({} as ExamDTO);

    const [questionComponent, setQuestionComponent] = useState();
    const [domainApi, setDomainApi] = useState(new DomainApi({ baseApiParams: { format: "json" } }));
    const dataWasRead = (data: Blob) => {

    }


    useEffect(() => {

        domainApi.exam.getExamsByUsername(getLoggedInUser(), { headers: { "Authorization": "Bearer ".concat(getJwt()) } })
            .then((response: HttpResponse<ExamDTO[], any>) => {
                if (response.data.length > 0) {
                    console.log("büyük",response);
                    
                    setExams((prev)=>[...prev,...response.data]);

                    setSelectedExam(response.data[0]);
                    selectionChanged(selectedExam.id?.toString()!);
                    console.log("iffisr5sd seşectedexam ", selectedExam, exams);
                }


            })
    }, []);
    
    const selectionChanged = (newSelectedExamId: string) => {
const oldSelectedExamId:string=`exam_${selectedExam.id?.toString()}`;
const oldSelectedExamQuesitonId:string=oldSelectedExamId.concat('_questions');
        const oldSelectedItem: HTMLElement = document.getElementById(oldSelectedExamId)!;
        const oldSelectedItemQuestion: HTMLElement = document.getElementById(oldSelectedExamQuesitonId)!;
        
        console.log(oldSelectedItem);

        if (oldSelectedItem.classList.contains("active")) {
            console.log("found activei n old");

            oldSelectedItem.classList.remove("active");
            oldSelectedItemQuestion.hidden=true;
        }
        const newlySelectedExamDTO: ExamDTO = exams.findLast(exam => exam.id?.toString() === newSelectedExamId)!;
        console.log(newlySelectedExamDTO);

        console.log("selected exam will change with: ", newlySelectedExamDTO);

        setSelectedExam(newlySelectedExamDTO);
        console.log(`exam_${selectedExam.id?.toString()}`);
const newSelectedRealExamId=`exam_${newSelectedExamId}`;
const newSelectedExamQuesitonsId=newSelectedRealExamId.concat('_questions');
        const newSelectedItem: HTMLElement = document.getElementById(newSelectedRealExamId)!;
        const newSelectedItemQuestions: HTMLElement = document.getElementById(newSelectedExamQuesitonsId)!;
        newSelectedItemQuestions.hidden=false;

        console.log(newSelectedItem);

        if (!newSelectedItem.classList.contains("active")) {
            console.log("not found activei in new");
            newSelectedItem.classList.add("active");
        }
       

    }

    return <div> {exams.map((exam, index) =>

        <><a id={`exam_${exam.id?.toString()}`} className="item" onClick={() => selectionChanged(exam.id?.toString() || "1")}>
            {exam.name}
        </a>
        <div id={`exam_${exam.id?.toString()}_questions`}>
        <Question  exam={exam} />
        </div>
        <br></br></>
    )}
         

    </div>

}


