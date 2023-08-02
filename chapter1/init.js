var a;
do{
  a=parseInt(prompt('Choisisser un nombre compris entre 0 et 99:'));
}while(a<0 && a>99);
function trans10(n){
    var a='';
        if (n<10){
        if (n==0){
            a='zero';
        }
        else if(n==1){
            a='un';
        }
        else if(n==2){
            a='deux';
        }
        else if(n==3){
            a='trois';
        }
        else if(n==4){
            a='quatre';
        }
        else if(n==5){
            a='cinq';
        }
        else if(n==6){
            a='six';
        }
        else if(n==7){
            a='sept';
        }
        else if(n==8){
            a='huit';
        }
        else{
            a='neuf';
        }
    }
    return a;
}
function trans10plus(n){
     var a='',b='',c='';
     if(n>=10 && n<17){
        if (n==10){
            b='dix';
        }
        else if(n==11){
            b='onze';
        }
        else if(n==12){
            b='douze';
        }
        else if(n==13){
            b='treize';
        }
        else if(n==14){
            b='quatorze';
        }
        else if(n==15){
            b='quinze';
        }
        else if(n==16){
            b='seize';
        }
        c=b;
    }
    else if(n>=17){
        if (n>=17&&n<20){
            n=n%10;
            b='dix';
        }       
        else if (n==20){
            b='vingt';
            n=n%20;
        }
        else if (n==21){
            b='vingt-et-un';
            n=n%20;
        }
        else if (n>21&&n<30){
            n%20;
            b='vingt';
        }
        else if (n==30){
            b='trente';
            n=n%20;
        }
        else if (n==31){
            b='trente-et-un';
            n=n%30;
        }
        else if (n>31&&n<40){
            n=n%30;
            b='trente';
        }
        else if (n==40){
            b='quarante';
            n=n%40;
        }
        else if (n==41){
            b='quarante-et-un';
            n=n%40;
        }
        else if (n>41&&n<50){
            n=n%40;
            b='quarante';
        }
        else if (n==50){
            b='cinquante';
            n=n%50;
        }
        else if (n==51){
            b='cinquante-et-un';
            n=n%50;
        }
        else if (n>51 && n<60){
            n=n%50;
            b='cinquante';
        }
        else if (n==60){
            b='soixante';
            n=n%60;
        }
        else if (n==61){
            b='soixante-et-un';
            n=n%60;
        }
        else if (n>61 && n<70){
            n=n%60;
            b='soixante';
        }
        
        else if(n>=70&&n<80){
                b='soixante';          
                n=n%70;
        }
        else if (n==80){
            b='quatre-vingts';
            n=n%80;
        }
        else if (n==81){
            b='quatre-vingts-et-un';
            n=n%80;
        }
        else if (n>81 && n<90){
            n=n%80;
            b='quatre-vingts';
        }
        /*else if(n==90){
            b='quatre-vingts-dix';
            n=n%90;
        }
        else if (n==91){
            b='quatre vingts onze';
            n=n%90;
        }*/
        else if (n>=90 && n<100){
            /*if(n==95)
            {
                b='quatre-vingts-quinze';
            }
            else{
            b='quatre-vingts-dix';
            }*/
            b='quatre-vingts'
            n=n%90;
        }
    }
    var sauv=[b,n];
    return sauv; 
}
var let,let1,let2;
if (a<10){
alert(let=trans10(a));
} 
else {
var q=a,set=a-10*7,nef=a-10*9;
//les nombres qui ne se termine ni pas 1 ni pas 0,différent des nombre dérivant de 70 et 90
if((a%10!=0 && a%10!=1) && (a<70||a>79 && a<90)){
let1=trans10plus(a)[0];
let2=trans10(trans10plus(q)[1]);
alert(let1+'-'+let2);
}
else if((a%10==0 || a%10==1)&&(a<70||a>79 && a<90)){
    let=trans10plus(a)[0];
    alert(let);
}
 else{
    var sec;
    sec=trans10plus(a)[1]+10;
    let1=trans10plus(a)[0];
    let2=trans10plus(sec)[0];
 
    if (sec!=10){
    let=trans10(trans10plus(sec)[1]);
    alert(let1+'-'+let2+'-'+let);
    }
    else{
    alert(let1+'-'+let2);
    }     
}
}