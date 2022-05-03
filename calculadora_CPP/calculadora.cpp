#include <iostream>

using namespace std;

char operador;
float somar(float a , float b){
    return a+b;
}
float subtrair(float a , float b){
    return a-b;
}
float multiplicar(float a , float b){
    return a*b;
}
float dividir(float a , float b){
    return a/b;
}

int main(){

    float a ,b, res;
    cout<<"Calculadora"<<endl;
    cin>>a>>operador>>b;
    switch (operador)
    {
    case '+':
        res = somar(a,b);
        cout<<"A soma de "<< a << " + " << b << "eh igual a "<< res << endl;
        break;
    case '-':
        res = subtrair(a,b);
        cout<<"A subtracao de "<< a << " - " << b << "eh igual a "<< res << endl;
        break;
    case '*':
        res = multiplicar(a,b);
        cout<<"A multiplicação de "<< a << " * " << b << "eh igual a "<< res << endl;
        break;
    case '/':
        res = dividir(a,b);
        if(b == 0){
            cout<<"Impossivel dividir por valor 0";
        }else{
            cout<<"A divisao de "<< a << " + " << b << " eh igual a "<< res << endl;
        }
        break;
    default:
        cout<<"Valores invalidos tente novamente";
        break;;
    }


    return 0;
}
