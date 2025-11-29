let bgStartColor;
let bgEndColor;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255);
  bgStartColor = color(0);
  bgEndColor = color(20);
  frameRate(20);
}

function draw() {
  let t = millis() * 0.0003;
  let mix = (sin(t) + 1) / 2;             // 0 ~ 1 사이
  let bg = lerpColor(bgStartColor, bgEndColor, mix);
  background(bg);

  // 반짝이는 별 (크기 변화 + 색 변화)
  drawStar(50, 60, 3, 0.0, color(255));
  drawStar(120, 150, 6, 0.5, color(255, 255, 0));
  drawStar(300, 80, 4, 1.0, color(255, 0, 255));
  drawStar(360, 200, 2, 1.5, color(255));
  drawStar(200, 300, 3, 2.0, color(255));
  drawStar(100, 300, 5, 2.5, color(255));
  drawStar(500, 50, 3, 3.0, color(135, 206, 250));
  drawStar(550, 100, 5, 3.5, color(255, 165, 0));
  drawStar(450, 150, 4, 4.0, color(173, 216, 230));
  drawStar(520, 200, 3, 4.5, color(255, 20, 147));
  drawStar(580, 250, 2, 5.0, color(255, 255, 255));
  drawStar(400, 300, 4, 5.5, color(0, 191, 255));
  drawStar(350, 370, 3, 6.0, color(255, 255, 255));
  drawStar(250, 350, 4, 6.5, color(221, 160, 221));
  drawStar(80, 200, 2, 7.0, color(255, 255, 255));
  drawStar(60, 300, 3, 7.5, color(255, 192, 203));
  drawStar(150, 80, 4, 8.0, color(255, 255, 224));
  drawStar(180, 50, 3, 8.5, color(176, 224, 230));
  drawStar(280, 180, 2, 9.0, color(240, 248, 255));
  drawStar(320, 250, 5, 9.5, color(255, 99, 71));
  drawStar(420, 90, 3, 10.0, color(0, 255, 255));
  drawStar(500, 280, 4, 10.5, color(255, 255, 255));

  // 스파클 효과
  noStroke();
  fill(255, 255, 255, 80);
  circle(random(width), random(height), 2);

  // 우주비행사 애니메이션
  let astroFloatY = sin(frameCount * 0.05) * 10; // 위아래
  let astroFloatX = cos(frameCount * 0.03) * 5;  // 좌우 약간

  // 몸통
  fill(230);
  rect(170 + astroFloatX, 200 + astroFloatY, 60, 80, 10);

  fill(180);
  rect(185 + astroFloatX, 230 + astroFloatY, 30, 20, 3);
  fill(255, 80, 80);
  circle(192 + astroFloatX, 240 + astroFloatY, 5);
  fill(80, 255, 120);
  circle(200 + astroFloatX, 240 + astroFloatY, 5);
  fill(80, 140, 255);
  circle(208 + astroFloatX, 240 + astroFloatY, 5);

  // 배낭
  fill(200);
  rect(160 + astroFloatX, 210 + astroFloatY, 15, 60, 5);

  // 머리
  fill(240);
  ellipse(200 + astroFloatX, 170 + astroFloatY, 70, 70); // 헬멧 외곽
  fill(40, 60, 90);
  ellipse(200 + astroFloatX, 170 + astroFloatY, 50, 50); // 안쪽 유리창
  fill(220);
  arc(190 + astroFloatX, 160 + astroFloatY, 20, 10, PI + QUARTER_PI, TWO_PI); // 반짝임

  // 팔
  stroke(230);
  strokeWeight(10);
  line(170 + astroFloatX, 220 + astroFloatY, 140 + astroFloatX, 200 + astroFloatY); // 왼팔
  line(230 + astroFloatX, 220 + astroFloatY, 260 + astroFloatX, 240 + astroFloatY); // 오른팔
  noStroke();
  fill(230);
  circle(140 + astroFloatX, 200 + astroFloatY, 15); // 왼손
  circle(260 + astroFloatX, 240 + astroFloatY, 15); // 오른손

  // 다리
  stroke(230);
  strokeWeight(12);
  line(185 + astroFloatX, 280 + astroFloatY, 175 + astroFloatX, 320 + astroFloatY); // 왼쪽 다리
  line(215 + astroFloatX, 280 + astroFloatY, 225 + astroFloatX, 320 + astroFloatY); // 오른쪽 다리
  noStroke();
  fill(210);
  rect(165 + astroFloatX, 320 + astroFloatY, 20, 10, 2); // 왼쪽 신발
  rect(215 + astroFloatX, 320 + astroFloatY, 20, 10, 2); // 오른쪽 신발

  // 우주선 애니메이션 (좌우 움직이기)
  let shipXOffset = sin(frameCount * 0.03) * 100;
  let flameWiggle = sin(frameCount * 0.3); // 엔진 불꽃 흔들림 그대로 유지

  // 우주선 몸통
  fill(210);
  triangle(300 + shipXOffset, 100, 350 + shipXOffset, 100, 350 + shipXOffset, 50);
  rect(350 + shipXOffset, 50, 100, 50);

  fill(0);
  triangle(300 + shipXOffset, 100, 310 + shipXOffset, 100, 310 + shipXOffset, 90);

  // 창문 패턴
  stroke(0, 0, 0);
  strokeWeight(3);
  line(380 + shipXOffset, 60, 390 + shipXOffset, 60);
  line(380 + shipXOffset, 60, 380 + shipXOffset, 70);
  line(380 + shipXOffset, 70, 390 + shipXOffset, 70);
  line(390 + shipXOffset, 70, 390 + shipXOffset, 80);
  line(380 + shipXOffset, 80, 390 + shipXOffset, 80);

  line(400 + shipXOffset, 60, 410 + shipXOffset, 60);
  line(400 + shipXOffset, 60, 400 + shipXOffset, 70);
  line(400 + shipXOffset, 70, 410 + shipXOffset, 70);
  line(410 + shipXOffset, 70, 410 + shipXOffset, 80);
  line(400 + shipXOffset, 80, 410 + shipXOffset, 80);

  line(420 + shipXOffset, 60, 420 + shipXOffset, 80);
  line(420 + shipXOffset, 80, 430 + shipXOffset, 80);
  line(430 + shipXOffset, 80, 430 + shipXOffset, 60);

  noStroke();
  fill(135, 206, 250);
  triangle(325 + shipXOffset, 75, 350 + shipXOffset, 75, 350 + shipXOffset, 50); // 창문
  rect(350 + shipXOffset, 50, 20, 25);

  // 엔진
  fill(230);
  rect(450 + shipXOffset, 75, 15, 15);

  // 엔진 불꽃
  fill(255, 0, 0);
  triangle(
    465 + shipXOffset,
    75 + flameWiggle * 2,
    465 + shipXOffset,
    90 - flameWiggle * 2,
    490 + shipXOffset + flameWiggle * 5,
    83.5
  );

  let planetMix = (sin(frameCount * 0.02) + 1) / 2;
  let planetColor1 = color(200, 160, 100);
  let planetColor2 = color(255, 180, 150);
  let planetColor = lerpColor(planetColor1, planetColor2, planetMix);

  noStroke();
  fill(planetColor);
  ellipse(600, 400, 300, 300);

  // 크레이터
  fill(160, 120, 80);
  ellipse(530, 370, 40, 30);
  ellipse(580, 330, 25, 18);
  ellipse(550, 310, 30, 20);
  ellipse(500, 340, 20, 15);

  let angle = frameCount * 0.02;
  let orbitX = 520 + cos(angle) * 80;
  let orbitY = 340 + sin(angle) * 40;
  fill(255, 255, 0);
  circle(orbitX, orbitY, 8);
}

// 반짝이는 별을 그리는 함수
function drawStar(x, y, baseSize, phase, col) {
  let twinkle = 1 + 0.5 * sin(frameCount * 0.1 + phase);
  noStroke();
  fill(col);
  circle(x, y, baseSize * twinkle);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('과제4_20201747', 10);
  }
}
