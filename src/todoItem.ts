export class TodoItem {

    constructor(public id: number,  // аннотация типа - которая сообщает что свойству id можно присваивать значения только типа number
                public task: string,
                public complete: boolean = false) {

    }

    printDetails() : void {
        console.log('${this.id}\t${this.task} ${this.complete ? "\t(complete)": ""}');
    }
}

/*
Классы - это шаблоны, описывающие тип данных
Классом является todoItem. У него есть свойства id, task, complete, а также метод printDetails
выводящий на консоль краткую информацию об элементе списка дел.
*/