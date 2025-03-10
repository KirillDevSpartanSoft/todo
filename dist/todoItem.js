"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    id;
    task;
    complete;
    constructor(id, // аннотация типа - которая сообщает что свойству id можно присваивать значения только типа number
    task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log('${this.id}\t${this.task} ${this.complete ? "\t(complete)": ""}');
    }
}
exports.TodoItem = TodoItem;
/*
Классы - это шаблоны, описывающие тип данных
Классом является todoItem. У него есть свойства id, task, complete, а также метод printDetails
выводящий на консоль краткую информацию об элементе списка дел.
*/ 
