 function generateSingleStanza(number){
    if(number % 10 == 1 && number > 20){
        console.log(number + ' бутылка пива на стене, ' + number + ' бутылка пива! Возьми одну, пусти по кругу, '+ (number -1) + ' бутылок пива на стене!')
    }else if(number == 1){
        console.log(number + ' бутылка пива на стене, ' + number + ' бутылка пива! Возьми одну, пусти по кругу, нет бутылок пива на стене! :(')
    }else if(number % 10 == 5){
        console.log(number + ' бутылок пива на стене, ' + number + ' бутылок пива! Возьми одну, пусти по кругу, '+ (number -1) + ' бутылки пива на стене!')
    }else if((number % 10 == 3 || number % 10 == 4) && number > 20 || number < 10 && number != 2){
        console.log(number + ' бутылки пива на стене, ' + number + ' бутылки пива! Возьми одну, пусти по кругу, '+ (number -1) + ' бутылки пива на стене!')
    }else if(number % 10 == 2 && number > 20 || number < 10){
        console.log(number + ' бутылки пива на стене, ' + number + ' бутылки пива! Возьми одну, пусти по кругу, '+ (number -1) + ' бутылка пива на стене!')
    }else{
        console.log(number + ' бутылок пива на стене, ' + number + ' бутылок пива! Возьми одну, пусти по кругу, '+ (number -1) + ' бутылок пива на стене!')
    }
}

 function generateSongText(){
    for (let i = 99; i > 0; i--) {
        generateSingleStanza(i)
    }
 }
generateSongText();