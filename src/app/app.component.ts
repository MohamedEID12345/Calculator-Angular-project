import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calc = '';
  result = '0';
  getAction(item:any){
    this.calc += item
    console.log(item)
  }

  getResult(){
this.result=eval(this.calc)
  }

  getReset(){
    this.calc=''
    this.result='0'
  }
}
