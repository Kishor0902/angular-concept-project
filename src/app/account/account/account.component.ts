import { Component, OnInit,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
      @Input() account: {name: string, status: string};
      @Input() id: number;
      @Output() statusChanged = new EventEmitter<{id: number,newStatus: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSet(status: string){
    this.statusChanged.emit({id: this.id, newStatus: status });
    console.log("Account Status has been Changed New "+ status);
  }

}
