let tongueOut = false; // 메롱 상태 여부

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // 얼굴
  fill(255, 224, 189);
  ellipse(width / 2, height / 2, 200, 250);

  // 머리
  fill(30);
  arc(width / 2, height / 2 - 50, 210, 230, PI, TWO_PI, CHORD);

  // 귀
  fill(255, 224, 189);
  ellipse(width / 2 - 100, height / 2, 30, 50);
  ellipse(width / 2 + 100, height / 2, 30, 50);

  // 눈 위치
  let leftEyeX = width / 2 - 40;
  let rightEyeX = width / 2 + 40;
  let eyeY = height / 2 - 20;

  // 눈
  fill(255);
  ellipse(leftEyeX, eyeY, 35, 20);
  ellipse(rightEyeX, eyeY, 35, 20);

  // 마우스에 따른 동공 움직임
  let dxL = constrain(map(mouseX, 0, width, -5, 5), -5, 5);
  let dyL = constrain(map(mouseY, 0, height, -3, 3), -3, 3);
  let dxR = constrain(map(mouseX, 0, width, -5, 5), -5, 5);
  let dyR = constrain(map(mouseY, 0, height, -3, 3), -3, 3);

  fill(0);
  ellipse(leftEyeX + dxL, eyeY + dyL, 12, 12);
  ellipse(rightEyeX + dxR, eyeY + dyR, 12, 12);

  // 눈썹
  stroke(0);
  strokeWeight(3);
  if (tongueOut) {
    // 오른쪽 눈썹
    line(width / 2 - 60, height / 2 - 45, width / 2 - 20, height / 2 - 40);
    // 왼쪽 눈썹
    line(width / 2 + 20, height / 2 - 40, width / 2 + 60, height / 2 - 45); 
  }
  else {
    // 평상시 눈썹
    line(width / 2 - 60, height / 2 - 40, width / 2 - 20, height / 2 - 45);
    line(width / 2 + 20, height / 2 - 45, width / 2 + 60, height / 2 - 40);
  }
  noStroke();

  // 코
  fill(220, 180, 160);
  triangle(width / 2, height / 2 - 5, width / 2 - 8, height / 2 + 25, width / 2 + 8, height / 2 + 25);

  // 입
  stroke(200, 80, 80);
  strokeWeight(3);
  noFill();

  if (tongueOut) {
    // 메롱 표정
    arc(width / 2, height / 2 + 65, 50, 20, 0, PI);
    fill(255, 100, 100);
    noStroke();
    ellipse(width / 2, height / 2 + 80, 25, 30);

    stroke(150);
    strokeWeight(2);
    line(width / 2, height / 2 + 70, width / 2, height / 2 + 90);
  }
  else {
    arc(width / 2, height / 2 + 65, 50, 20, 0, PI);
  }

  // 옷
  noStroke();
  fill(0, 150, 0);
  rect(width / 2 - 100, height / 2 + 120, 200, 100, 50);

  fill(0, 120, 0);
  triangle(width / 2 - 70, height / 2 + 120, width / 2 - 20, height / 2 + 120, width / 2 - 45, height / 2 + 160);
  triangle(width / 2 + 70, height / 2 + 120, width / 2 + 20, height / 2 + 120, width / 2 + 45, height / 2 + 160);
}

// 스페이스바로 표정 변경
function keyPressed() {
  if (key === ' ') {
    tongueOut = !tongueOut;
  }
  
  if (key === 's') {
    saveGif('20201747_이건영_3번째_과제', 10);
  }
} 

