import {useRecoilState, useRecoilValue} from "recoil";
import CreateToDo from "./CreateToDo";
import {Categories, categoryState, toDoSelector} from "./state";
import ToDo from "./ToDo";
import React from "react";


const ToDoList = () => {
    const toDos = useRecoilValue(toDoSelector);
    const [categoryAtom, setCategoryAtom] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategoryAtom(event.currentTarget.value as any);
    }
    console.log(categoryAtom);
    return <div>
        <h1>To Dos</h1>
        <hr/>
        <select value={categoryAtom} onInput={onInput}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
        <CreateToDo/>
        {toDos?.map((toDo => <ToDo key={toDo.id} {...toDo}/>))}
    </div>
}

export default ToDoList;