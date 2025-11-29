function setup() {
  createCanvas(400, 400);
  background(255);

  // 얼굴
  fill(255, 224, 189); // 피부색
  ellipse(width/2, height/2, 200, 250);

  // 머리 (둥근 형태, 위쪽만)
  fill(30); 
  arc(width/2, height/2 - 50, 210, 230, PI, TWO_PI, CHORD);


  // 귀
  fill(255, 224, 189);
  ellipse(width/2 - 100, height/2, 30, 50);
  ellipse(width/2 + 100, height/2, 30, 50);

  // 눈
  fill(255);
  ellipse(width/2 - 40, height/2 - 20, 35, 20);
  ellipse(width/2 + 40, height/2 - 20, 35, 20);

  fill(0);
  ellipse(width/2 - 40, height/2 - 20, 12, 12);
  ellipse(width/2 + 40, height/2 - 20, 12, 12);

  // 눈썹
  stroke(0);
  strokeWeight(3);
  line(width/2 - 60, height/2 - 40, width/2 - 20, height/2 - 45);
  line(width/2 + 20, height/2 - 45, width/2 + 60, height/2 - 40);

  noStroke();

  // 코
  fill(220, 180, 160);
  triangle(width/2, height/2 - 5, width/2 - 8, height/2 + 25, width/2 + 8, height/2 + 25);

  // 입
  noFill();
  stroke(200, 80, 80);
  strokeWeight(3);
  arc(width/2, height/2 + 65, 50, 20, 0, PI);

  noStroke();


  // 옷 (초록색)
  fill(0, 150, 0);
  rect(width/2 - 100, height/2 + 120, 200, 100, 50);
  
    fill(0, 120, 0);
    triangle(width/2 - 70, height/2 + 120, width/2 - 20, height/2 + 120, width/2 - 45, height/2 + 160);
    triangle(width/2 + 70, height/2 + 120, width/2 + 20, height/2 + 120, width/2 + 45, height/2 + 160);
}
