let ballX = 290;
let ballY = 190;

let speedX = 13;
let speedY = 13;

let ball = document.querySelector('.ball');

let tri = false;

let player1 = document.querySelector('.goal1')
let player2 = document.querySelector('.goal2')

let player1Y = 290;
let player2Y = 290;


const playerheight = 333;
const totalHeight = 600;

function moveBall(){
    requestAnimationFrame(moveBall);
    
    if(ballY <= 0 || ballY >= 600){
        speedY *= -1;
    }

    ballX = ballX + speedX;
    ballY = ballY + speedY;

    ball.style.top = `${ballY}px`
    ball.style.left = `${ballX}px`


    const player1Top = (player1Y - playerheight / 2) + 190;
    const player1Bottom =  player1Y + playerheight / 2;

    if(player1Bottom >= ballY && ballY >= player1Top && ballX <= 230){
        speedX *= -1;
        ballX = 230.5;
    }

    const player2Top = (player2Y - playerheight / 2) + 120;
    const player2Bottom =  (player2Y + playerheight / 2) - 10;

    const r = Math.random();
    if(player2Bottom >= ballY && ballY >= player2Top && ballX >= 1200){
        speedX *= -1;
        ballX = 1199.5;
    }

    if(ballX <= 0){
        document.querySelector('.score').innerText = Number(document.querySelector('.score').innerText) + 1;
        if(r >= 0 && r <= 0.1){
            ballX = 290;
            ballY = 190;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.1 && r<=0.2){
            ballX = 390;
            ballY = 290;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.2 && r<=0.3){
            ballX = 390;
            ballY = 290;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }if(r >= 0.3 && r <= 0.4){
            ballX = 190;
            ballY = 190;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.4 && r<=0.5){
            ballX = 310;
            ballY = 110;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.5 && r <=0.6){
            ballX = 370;
            ballY = 150;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.6 && r<=0.7){
            ballX = 210;
            ballY = 111;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }if(r >= 0.7 && r <= 0.8){
            ballX = 384;
            ballY = 178;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.8 && r<=0.9){
            ballX = 352;
            ballY = 263;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.9 && r<=1){
            ballX = 390;
            ballY = 150;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else{
            ballX = 232;
            ballY = 321;
            speedX = 13; // 왼쪽으로 속도 설정
            speedY = 13;
        }
    }else if(ballX >= 1400){
        document.querySelector('.score2').innerText = Number(document.querySelector('.score2').innerText) + 1;
        if(r >= 0 && r <= 0.3){
            ballX = 290;
            ballY = 190;
            speedX = -13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.3 && r<=0.6){
            ballX = 390;
            ballY = 290;
            speedX = -13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else if(r > 0.6 && r<=0.9){
            ballX = 490;
            ballY = 290;
            speedX = -13; // 왼쪽으로 속도 설정
            speedY = 13;
        }else{
            ballX = 790;
            ballY = 150;
            speedX = -13; // 왼쪽으로 속도 설정
            speedY = 13;
        }
    }

    if(ballX > 1650){
        alert('emotional damage!');
        ballX = 350;  // 중앙으로 초기화
        ballY = 250;  // 중앙으로 초기화
        speedX = -13; // 왼쪽으로 속도 설정
        speedY = 13;  // 임의의 방향으로 설정
    }else if(ballX < -10){
        alert('sorry error accured but muaz is better then sardoric jopa sharic');
        ballX = 350;  // 중앙으로 초기화
        ballY = 250;  // 중앙으로 초기화
        speedX = 13;  // 오른쪽으로 속도 설정
        speedY = -13; // 임의의 방향으로 설정
    }
}

document.addEventListener('keydown', (event) => {
    if(event.code === 'Space' && tri === false){
        tri = true;
        moveBall();
    }
})

/*document.addEventListener('keydown', (event) => {
    if(event.key === 'i'){
        if(player2Y <= -10){
            console.log('the end')
        }else{
            player2Y = Number(player2Y) - 30;
            player2.style.top = `${player2Y}px`;
        }
    }else if(event.key === 'k'){
        if(player2Y >= 580){
            console.log('the end')
        }else{
            player2Y = Number(player2Y) + 30;
            player2.style.top = `${player2Y}px`
        }
    }
    else if(event.key === 'w'){
        if(player1Y <= -10){
            console.log('the end');
        }else{
            player1Y = Number(player1Y) - 30;
            player1.style.top = `${player1Y}px`
        }
    }else if(event.key === 's'){
        if(player1Y >= 580){
            console.log('the end');
        }else{
            player1Y = Number(player1Y) + 30;
            player1.style.top = `${player1Y}px`
        }
    }

})
*/


const keys = {
    w: false,
    s: false,
    i: false,
    k: false,
}

function p1(){
    if(keys.i){
        if(player2Y <= -10){
            console.log('the end')
        }else{
            player2Y = Number(player2Y) - 15;
            player2.style.top = `${player2Y}px`;
        }
    }else if(keys.k){
        if(player2Y >= 580){
            console.log('the end')
        }else{
            player2Y = Number(player2Y) + 15;
            player2.style.top = `${player2Y}px`
        }
    }
    requestAnimationFrame(p1);
}

function p2(){
    if(keys.w){
        if(player1Y <= -10){
            console.log('the end');
        }else{
            player1Y = Number(player1Y) - 15;
            player1.style.top = `${player1Y}px`
        }
    }else if(keys.s){
        if(player1Y >= 580){
            console.log('the end');
        }else{
            player1Y = Number(player1Y) + 15;
            player1.style.top = `${player1Y}px`
        }
    }
    requestAnimationFrame(p2);
}


document.addEventListener('keydown', (event) => {
    if(event.key === 'w'){
        keys.w = true;
    }else if(event.key === 's'){
        keys.s = true;
    }
});
document.addEventListener('keydown', (event) => {
    if(event.key === 'i'){
        keys.i = true;
    }else if(event.key === 'k'){
        keys.k = true;
    }
});


document.addEventListener('keyup' , (event) => {
    if(event.key === 'w'){
        keys.w = false
    }else if(event.key === 's'){
        keys.s = false
    }
});
document.addEventListener('keyup' , (event) => {
    if(event.key === 'i'){
        keys.i = false
    }else if(event.key === 'k'){
        keys.k = false
    }
});



p1();
p2();
