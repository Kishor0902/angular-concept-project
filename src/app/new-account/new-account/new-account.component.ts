import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { LoggingService } from '../../logging.service';
import { AccountService } from '../../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor(private loggingService: LoggingService,private accountService: AccountService) { 
    this.accountService.statusUpdated.subscribe(
      (status) => alert('new status is'+status)
    );
  }

  ngOnInit() {
  }

  onCreatedAccount(accountName: string,accountStatus: string){
    this.accountService.addAccount(accountName,accountStatus);
   // this.loggingService.logStatusChange(accountStatus);
    //console.log('The server status Changed to new status: '+ accountStatus);
  }

}
