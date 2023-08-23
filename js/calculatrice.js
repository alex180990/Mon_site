const tabNumber1 = [];
const tabNumber2 = [];
let operator = " ";

const recherchePoint = '.';

const ecran = document.getElementById("affichage");

const btn0 = document.getElementById("btn0").addEventListener("click",entre);
const btn1 = document.getElementById("btn1").addEventListener("click",entre);
const btn2 = document.getElementById("btn2").addEventListener("click",entre);
const btn3 = document.getElementById("btn3").addEventListener("click",entre);
const btn4 = document.getElementById("btn4").addEventListener("click",entre);
const btn5 = document.getElementById("btn5").addEventListener("click",entre);
const btn6 = document.getElementById("btn6").addEventListener("click",entre);
const btn7 = document.getElementById("btn7").addEventListener("click",entre);
const btn8 = document.getElementById("btn8").addEventListener("click",entre);
const btn9 = document.getElementById("btn9").addEventListener("click",entre);
const btnpoint = document.getElementById("btnpoint").addEventListener("click",entre);

const add = document.getElementById("add").addEventListener("click",entre);
const soustraction = document.getElementById("soustraction").addEventListener("click",entre);
const divide = document.getElementById("divide").addEventListener("click",entre);
const multiply = document.getElementById("multiply").addEventListener("click",entre);

const equal = document.getElementById("equal").addEventListener("click",entre);
const clear = document.getElementById("clear").addEventListener("click",entre);

function entre() {
 
  if(this.id === 'btn1'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='1';
        return ecran.value = '1';
      }
      tabNumber1.push('1');
    }else{
      tabNumber2.push('1');
    }
  };
  
  if(this.id === 'btn2'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='2';
        return ecran.value = '2';
      }
      tabNumber1.push('2');
    }else{
      tabNumber2.push('2');
    }
  }
  
  if(this.id === 'btn3'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='3';
        return ecran.value = '3';
      }
      tabNumber1.push('3');
    }else{
      tabNumber2.push('3');
    }
  }
  
  if(this.id === 'btn4'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='4';
        return ecran.value = '4';
      }
      tabNumber1.push('4');
    }else{
      tabNumber2.push('4');
    }
  }
  
  if(this.id === 'btn5'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='5';
        return ecran.value = '5';
      }
      tabNumber1.push('5');
    }else{
      tabNumber2.push('5');
    }
  }
  
  if(this.id === 'btn6'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='6';
        return ecran.value = '6';
      }
      tabNumber1.push('6');
    }else{
      tabNumber2.push('6');
    }
  }
  
  if(this.id === 'btn7'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='7';
        return ecran.value = '7';
      }
      tabNumber1.push('7');
    }else{
      tabNumber2.push('7');
    }
  }
  
  if(this.id === 'btn8'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='8';
        return ecran.value = '8';
      }
      tabNumber1.push('8');
    }else{
      tabNumber2.push('8');
    }
  }
  
  if(this.id === 'btn9'){
    if(operator === " "){
      if(tabNumber1[0]==='0'&&tabNumber1[1]!=='.'){
        tabNumber1[0]='9';
        return ecran.value = '9';
      }
      tabNumber1.push('9');
    }else{
      tabNumber2.push('9');
    }
  }
  
  if(this.id === 'btn0'){
    if(operator === " " && tabNumber1[0]!=='0'){
      tabNumber1.push('0');
    }else if(operator === " " && tabNumber1[0]==='0' && tabNumber1[1]==="."){
      tabNumber1.push('0');
    }
    else if(operator !== " "){
      tabNumber2.push('0');
    }
  }

  if(this.id === 'btnpoint'){
    if(operator === " "){

      let pointTrouve = tabNumber1.find(item => item === recherchePoint);

      if(pointTrouve === undefined){

        if(tabNumber1.length === 0){
          tabNumber1[0] = '0';
          tabNumber1[1] = '.';
        }else{
          tabNumber1.push('.');
        }
      }
    }else if(operator !== " "){

      let pointTrouve = tabNumber2.find(item => item === recherchePoint);

      if(pointTrouve === undefined){

        if(tabNumber2.length === 0){
          tabNumber2[0] = '0';
          tabNumber2[1] = '.';
        }else{
          tabNumber2.push('.');
        }
      }
    }
  }
  
  /**********/
  
  if(this.id === 'add'){
    operator = "+";
  }
  
  if(this.id === 'soustraction'){
    operator = "-";
  }
  
  if(this.id === 'divide'){
    operator = "/";
  }
  
  if(this.id === 'multiply'){
    operator = "*";
  }
  
  let strignNumber1 = tabNumber1.join('');
  let strignNumber2 = tabNumber2.join('');
  
  ecran.value = strignNumber1 + operator + strignNumber2;
  
  if(this.id === 'equal'){
    if(strignNumber1 == ""){
      alert('Vouz devez inscrir une équation !');
      return ecran.value = '0';
    }else{

      let pointTrouveTb1 = tabNumber1.find(item => item === recherchePoint);
      let pointTrouveTb2 = tabNumber2.find(item => item === recherchePoint);
      let nb1;
      let nb2;

      if(pointTrouveTb1 === undefined || pointTrouveTb2 === undefined){
        nb1 = parseInt(strignNumber1);
        nb2 = parseInt(strignNumber2);
      }else{
        nb1 = parseFloat(strignNumber1);
        nb2 = parseFloat(strignNumber2);
      }

      if(operator === "+"){
      result = nb1 + nb2;
      ecran.value = result;
      };
    
      if(operator === "-"){
      result = nb1 - nb2;
      ecran.value = result;
      };
    
      if(operator === "/"){
      result = nb1 / nb2;
      ecran.value = result;
      };
    
      if(operator === "*"){
      result = nb1 * nb2;
      ecran.value = result;
      };
    
      let mumber3 = result.toString();
      tabNumber1.length = 0;
      tabNumber2.length = 0;
      tabNumber1.push(mumber3);
      operator = " ";

    }

  };

  if(this.id === 'clear'){
    result = '0';
    ecran.value = result;
    tabNumber1.length = 0;
    tabNumber2.length = 0;
    operator = " ";
  };
}