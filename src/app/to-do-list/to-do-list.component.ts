import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../models/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  @ViewChildren(TaskComponent)
  taskItems: QueryList<TaskComponent>;
  tasks: Task[];

  constructor() {
    this.tasks = [];
    this.tasks.push({
      id: 1,
      name: 'Coffee',
      description: 'huhuihfsuihuishahjhaufcgaugv',
    });
    this.tasks.push({
      id: 2,
      name: 'Breakfast',
      description: 'jifjoijoisyhgsnjhiuyhdsjmfkaljsojgup9o',
    });
  }

  ngOnInit(): void {}

  addItem(newTask: Task) {
    if (newTask) {
      this.tasks.push(newTask);
    }
  }

  deleteItem(index: number) {
    alert('Do you want delete this item?');
    this.tasks.splice(index, 1);
  }
  selectedItem(taskComponent: TaskComponent) {
    alert(`Detail : ${taskComponent.task.description}`);
    this.taskItems.forEach((p) => {
      p.isSelected = false;
    });
    taskComponent.isSelected = true;
  }
}
