import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import { Task } from './Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [
    MessageService,
    ConfirmationService]
})
export class ListComponent {

  inputText: string = "";

  list : Task[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  submit() : void {
    if (this.inputText.length === 0){
      this.messageService.add(
        {severity:'error', summary:'Invalid form', detail:'The input field is empty'}
      );
      return;
    }

    this.list.push({
      name: this.inputText,
      done: false
    });

    this.messageService.add(
      {severity:'success', summary:'Item added', detail:`Added ${this.inputText}`}
    )

    this.inputText = "";
  }

  confirmDelete(event: Event, index: number, item: string)
  {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Are you sure you want to delete ${item}`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => { this.delete(index) },
      reject: () => {
        this.messageService.add(
          {severity:'error', summary:'Operation cancelled', detail:`Not deleting ${item}`}
        )
      }
    })
  }

  delete(index: number) : void{
    const deleted = this.list.splice(index,1);

    this.messageService.add(
      {severity:'success', summary:'Item deleted', detail:`Deleted ${deleted[0].name}`}
    )
  }
}
