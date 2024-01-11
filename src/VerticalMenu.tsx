import { useEffect, useState } from "react";
import { Exam } from "./components/exam/Exam";

import MyStatistics from "./components/user/MyStatistics";
import MyStudents from "./components/user/teacher/MyStudents";
import Tools from "./components/user/Tools";


export const VerticalMenu = () => {

    enum anchorIds { "exams" = "exams", "myStudents" = "myStudents", "myStatistics" = "myStatistics", "tools" = "tools" }
    const menuItemComponentMap = {
        "exams": <Exam />,
        "myStudents": <MyStudents />,
        "myStatistics": <MyStatistics />,
        "tools": <Tools />
    }
    const [state, setState] = useState({ "selectedAnchorId": anchorIds.exams as anchorIds, "selectedComponent": menuItemComponentMap[anchorIds.exams] })
    // const [selectedAnchorId, setSelectedAnchorId] = useState(anchorIds.exams as anchorIds);

    //  const [selectedComponent, setSelectedComponent] = useState(menuItemComponentMap[anchorIds.exams]);
    useEffect(() => {
        setState((prev) => {
            return { ...prev, "selectedComponent": menuItemComponentMap[state.selectedAnchorId] }
        })

    }, [state.selectedAnchorId])

    const selectionChanged = (selectedItemId: anchorIds) => {

        const oldSelectedItem: HTMLElement = document.getElementById(state.selectedAnchorId)!;
        if (oldSelectedItem.classList.contains("active")) {
            oldSelectedItem.classList.remove("active");
        }


        const newSelectedItem: HTMLElement = document.getElementById(selectedItemId)!;
        if (!newSelectedItem.classList.contains("active")) {
            document.getElementById(selectedItemId)?.classList.add("active");
        }
        setState((prev) => {
            return { ...prev, "selectedAnchorId": selectedItemId }
        });

    }

    return (<div className="ui grid">
        <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
                <a id="exams" className="active item" onClick={() => selectionChanged(anchorIds.exams)}>
                    Sınavlarım
                </a>
                <a id="myStudents" className="item" onClick={() => selectionChanged(anchorIds.myStudents)}>
                    Öğrencilerim
                </a>
                <a id="myStatistics" className="item" onClick={() => selectionChanged(anchorIds.myStatistics)}>
                    İstatistikler
                </a>
               
                    <a id="tools" className="item" onClick={() => selectionChanged(anchorIds.tools)} >
Sınav Yükle
                    </a>

               
            </div>
        </div>
        <div className="twelve wide stretched column">
            <div className="ui segment">
                {state.selectedComponent}
            </div>
        </div>
    </div>)
};


