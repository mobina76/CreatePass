import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "" ;
  Letter = false;
  Symbol = false;
  Number = false;
  passwordLength = 0


  includeLetter(){
    this.Letter = !this.Letter
  }
  includeSymbol(){
    this.Symbol = !this.Symbol
  }
  includeNumber(){
    this.Number = !this.Number  
  }

  onChangePasswordLength(e: any) {
    this.passwordLength = e.target.value
  }

  generatePass(){
    this.password = ""

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbole = '@#$%^&*()';
      
    let candidateChars = ""
    if (this.Letter) {
      candidateChars += letters
    }   
    if (this.Number) {
      candidateChars += numbers
    }
    if (this.Symbol) {
      candidateChars += symbole
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const choosedCharIdx = Math.floor(Math.random() * candidateChars.length);
      const choosedChar = candidateChars.charAt(choosedCharIdx)

      this.password += choosedChar
    }
    
  }



}
