export class LoggingService{
    logStatusChange(status: string){
        console.log('The server status Changed to new status: '+ status);
    }
}