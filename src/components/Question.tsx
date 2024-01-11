
import { useEffect, useState } from "react";
import { CollectionModelQuestion, DomainApi, EntityModelExam, EntityModelQuestion, ExamDTO, HttpClient, HttpResponse, QuestionDTO, QuestionResponse } from "../rest/DomainApi"
import '../styles/style.css';
import { createAuthorizationHeaderOfLoggedInUser, getJwt } from "./util/UserService";

interface Props {
    exam: ExamDTO
}
export const Question = (props: Props) => {
    const [questions, setQuestions] = useState([] as QuestionResponse[]);
    const [domainApi, setDomainApi] = useState(new DomainApi({ baseApiParams: { format: "json" } }));
    const dataWasRead = (data: Blob) => {

    }


    useEffect(() => {
        console.log("examid: "+props.exam.id);
        

        domainApi.exams.followPropertyReferenceExamGet1(props.exam.id?.toString()!, createAuthorizationHeaderOfLoggedInUser())
            .then((response: HttpResponse<CollectionModelQuestion, any>) => {
                

                setQuestions(response.data._embedded?.questions!);
            })
    }, []);

    const onTry2Solve = (questionId: number, value: string, buttonId: string) => {
    
        let audio = new Audio("./src/assets/correct.mp3");

        domainApi.solvables.answer(questionId, value, {
            headers: {
                "Authorization": "Bearer ".concat(getJwt())
            }
        })
            .then(response => {
                if (response.data !== true) {
                    audio = new Audio("./src/assets/wrong.mp3");

                }
                audio.play();
            }).catch((reason) => {
                console.log("Error in answer: ", reason);

            })
    }
   

    return <div>
        
        {
        questions.map((question, index) => {

            return (<div key={"questiondiv" + index}>
                <p >{question.problem}</p>

                {question.choices?.map((choice: string, choiceindex: number) => {
            

                    return <> {}<button key={index + "_" + choiceindex} id={`btn_${choice}`}
                        onClick={(event) => onTry2Solve(question.id!, choice, event.currentTarget.id)}>{choice}</button></>
                })}
            </div>);

        })}



    </div>
}