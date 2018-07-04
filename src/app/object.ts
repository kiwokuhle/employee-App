export class EmployeeObjectPage {
 
    Surname;
    Name;
    IdNumber
    EmployeePosition;
    picture:any;

  
    constructor(Surname:string,Name:string,IdNumber:string,EmployeePosition:string, pic:any) {
      this.Surname=Surname;
      this.Name=Name;
      this.IdNumber=IdNumber;
      this.EmployeePosition=EmployeePosition;
      this.picture = pic;
    }


}