import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
import RegisterArray from '../../app/array';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loginArray=RegisterArray;
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Register(firstName,Surname,Email,Username,Password){
    if (firstName != undefined && Surname != undefined && Email != undefined && Username != undefined && Password != undefined  ) {
      let obj = new Register(firstName,Surname,Email,Username,Password);
    RegisterArray.push(obj);
    console.log(RegisterArray);
    this.navCtrl.push(LogInPage);
      
    }
 
    else {
      const alert = this.alertCtrl.create({
        title: 'Cornfimation',
        subTitle: 'Succefully registed',
        buttons: ['OK']
      });
      alert.present();
    }
    }
    SignIn(){
      this.navCtrl.push(LogInPage);

    }
  

}


export class Register{
  firstName;
  Surname;
  Email;
  Username;
  Password;

  constructor(firstName:string,Surname:string,Email:string,Username:string,Password:string){
    this.firstName=firstName;
    this.Surname=Surname;
    this.Email=Email;
    this.Username=Username;
    this.Password=Password;
  }

}