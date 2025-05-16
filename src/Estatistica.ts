export class Estatistica {
  private _numeros: number[];

  constructor(numeros: number[]) {
    this._numeros = numeros;
  }

  media() {
    let soma = 0;
    for(let i = 0; i < this._numeros.length; i ++){
      soma = soma + this._numeros[i];
    }
    return soma / this._numeros.length;
  }

  mediana() {
    let conjunto = this._numeros;
    let metade = Math.floor(conjunto.length / 2);

    conjunto.sort((a, b) => a - b);

    if(conjunto.length % 2 === 1) {
      return conjunto[metade];
    }
    else{
      return (conjunto[metade - 1] + conjunto[metade]) / 2;
    }
  }

  moda() {
    const m = Math.max(...this._numeros);
    const f = new Array(m + 1);
    for (let i = 0; i < f.length; i++) { 
      f[i] = 0; 
   }

   let maxFreq = 0;
   let r;

    for (let i = 0; i < this._numeros.length; i++) { 
   const item = this._numeros[i]; 
 
   f[item]++; 
 
   if (f[item] > maxFreq) { 
     maxFreq = f[item]; 
     r = item; 
   } 
 
  return r; 
  }


    
  }

  variancia() {
    const numeros = this._numeros;
    let soma = 0;
    for(let i = 0; i < numeros.length; i ++) {
      soma = soma + numeros[i];
    }
    let media = soma / numeros.length;

    let somaQuad = 0;
    for(let i =0; i < numeros.length; i++) {
      let diferença = numeros[i] - media;
      somaQuad += diferença * diferença;
    }
    let variancia = somaQuad / (numeros.length - 1);
    return variancia;

  }

  desvioPadrao() {
    const numeros = this._numeros;
    let soma = 0;
    for(let i = 0; i < numeros.length; i ++) {
      soma = soma + numeros[i];
    }
    let media = soma / numeros.length;

    let somaQuad = 0;
    for(let i =0; i < numeros.length; i++) {
      let diferença = numeros[i] - media;
      somaQuad += diferença * diferença;
    }
    let variancia = somaQuad / (numeros.length - 1);
    
    let raiz = Math.sqrt(variancia);
    return raiz;
  }

  coeficienteDeVariacao() {
    const numeros = this._numeros;
    let soma = 0;
    for(let i = 0; i < numeros.length; i ++) {
      soma = soma + numeros[i];
    }
    let media = soma / numeros.length;
    
    let somaQuad = 0;
    for(let i =0; i < numeros.length; i++) {
      let diferença = numeros[i] - media;
      somaQuad += diferença * diferença;
    }
    let variancia = somaQuad / (numeros.length - 1);
    
    let raiz = Math.sqrt(variancia);

    let coeficiente = (raiz / media) * 100;

    return coeficiente;
  }
}
