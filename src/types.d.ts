import Todo from "./components/Todo"
import { type TODO_FILTERS } from "./consts"

export interface Todo {
    id: string
    title: string
    completed: boolean
} 

export type typeId = Pick<Todo, 'id'>

export type typeTitle = Pick<Todo, 'title' >

export type ListOfTodos =  Todo[]


export type filterSelectValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]