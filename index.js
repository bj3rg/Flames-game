
document.querySelector(".calculate-btn").addEventListener("click", function(){

    var count= []
    
    const result1 = document.getElementById("partner-1");
    const resultLowcase1 = result1.value.toLowerCase();
    const result2 = document.getElementById("partner-2");
    const resultLowcase2 = result2.value.toLowerCase();
    if(resultLowcase1 === '' || resultLowcase2 === ''){
        $(".result").text("Invalid input!");
    }else{
        const nameConcatenated = (resultLowcase1 + resultLowcase2).split('');
        const nameConcatenate = resultLowcase1 + resultLowcase2;

        for(var j = 0; j < nameConcatenate.length; j++){
            var i = nameConcatenated[j];
            if(i === 'f' || i === 'l' || i === 'a' || i === 'm' || i === 'e' || i === 's'){
                count.push(i)
            }
        }
        
        if(count.length <= 6 && count.length >= 1){
            var finalResult = count.length;
            $(".result").text(resultChecker(finalResult) );
        }else if(count.length >6 ){
            var finalResult = count.length % 6;
            $(".result").text(resultChecker(finalResult) );
        }else{
            $(".result").text("0% chance!");
        }
    }
    

})

function resultChecker(number){
    var value = '';
    switch(number){
        case 1:
            value = 'Friends';
            break;
        case 2:
            value = 'Lovers';
            playSound()
            break;
        case 3:
            value = "Anger";
            break;
        case 4:
            value = "Marriage";
            playSound()
            break;
        case 5:
            value = "Enemies";
            break;
        case 6:
            value = "Soulmate";
            break;
        default:
            value = "Theres an error";
    }
    return value;
}

function playSound(name){
    var sound = new Audio("./sounds/sheesh-harmony.mp3");
    sound.play();

}