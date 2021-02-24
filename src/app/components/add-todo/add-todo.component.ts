import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from './../../models/Todo';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @ViewChild('inputAddTodo') inputAddTodo: ElementRef<HTMLInputElement>;
  faPlus = faPlus;
  todo: Todo = {
    id: Math.floor(Math.random() * 1000) + 1,
    title: '',
    isChecked: false,
    isOpen: false,
  };
  @Output() messageTodo = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.inputAddTodo.nativeElement.focus();
  }

  onSubmit(e) {
    e.preventDefault();
    if (e.type === 'submit') return;
  }
  sendMessage() {
    if (this.todo.title == '') return;
    this.messageTodo.emit(this.todo);
    this.todo = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: '',
      isChecked: false,
      isOpen: false,
    };
  }
}
