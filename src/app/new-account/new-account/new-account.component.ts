import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
    @Output() accountAdded = new EventEmitter<{name: string,status: string}>();
  constructor() { }

  ngOnInit() {
  }

  onCreatedAccount(accountName: string,accountStatus: string){
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('The server status Changed to new status: '+ accountStatus);
  }

}
