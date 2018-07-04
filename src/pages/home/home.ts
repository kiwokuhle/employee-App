import { Component } from '@angular/core';
import { NavController, PopoverController,AlertController } from 'ionic-angular';
import { EmployeeObjectPage} from '../../app/object';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url:any;
  employeeArray = new Array();

  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }

  employee( Surname,Name,IdNumber,EmployeePosition ){
   

   let obj = new EmployeeObjectPage(Surname,Name,IdNumber,EmployeePosition, this.url);

   this.employeeArray.push(obj);
   console.log(this.employeeArray); 
  }
  MethodDelete(i,){
    this.employeeArray.splice(i,1);
  }
  insertpic = function(event:any){
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
      
    }
  }
  MethodEdit(i) {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'Surname',
          placeholder: 'Title'
        },
        {
          name: 'IdNumber ',
          placeholder: 'Id Number'
        },
        {
          name: 'EmployeePosition',
          placeholder: 'Employee Position'
        },
        {
        name: 'image',
        type: 'file'
      },


      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        
        {
          text: 'Save',
          handler: data => {
            var temps = data.Image.replace("fakepath", " ");
    var temp = temps.split(" ", 2)
    var str = temp[1];
    str = str.substring(1,str.length);
     var url = "../../assets/imgs/" + str;


            let obj = new EmployeeObjectPage(data.Surname,data.Name,data.IdNumber,data.EmployeePosition, "");

            this.employeeArray.splice(i,1,obj);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
  


}


  





