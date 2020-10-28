const ScoreDolphins=(96+108+89)/3;
const ScoreKoalas=(88+91+110)/3;
console.log(ScoreDolphins,ScoreDolphins);

if(ScoreDolphins>ScoreKoalas){

    console.log('Dophins win the trophy');
}
    
else if(ScoreKoalas>ScoreDolphins)
{
console.log('Koalas win the trophy');

}
else if(ScoreDolphins===ScoreKoalas)
{
console.log("both win the trophy")
}

//BOUNS 1   
 ScoreDolphins=(97+112+80)/3;
 ScoreKoalas=(109+95+50)/3;
console.log(ScoreDolphins,ScoreKoalas); 

if(ScoreDolphins>ScoreKoalas&&ScoreKoalas >=100) 
  {
console.log('Dolphins win th etrohpy')
  }  
  else if(ScoreKoalas>ScoreDolphins&&ScoreKoalas>=100){

console.log('koalas win the trophy')

  }
  else if(ScoreDolphins===ScoreKoalas&&ScoreDolphins>=100&&ScoreKoalas>=100){
      console.log('Both win the trophy !')
  }
  else {

    console.log('no one win the trophy')
  }



