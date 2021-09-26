import { createImportClause } from "typescript";

export default function sketch(p5) {
  let x = 0
  let z = 0
  
  let y = 600
  let speed = 0.45

  p5.setup = function() {
    p5.createCanvas(800,800);
  }

  p5.draw = function() {
    p5.background('#fff6f2')

    p5.fill('#6B93FF')
    p5.stroke('#e1fc14')
    p5.triangle(10, 26, 580, 490, 10, 98)

    p5.fill('#61ff66')
    p5.stroke('#ffffff')
    p5.triangle(10, 60, 580, 490, 10, 98)

    p5.stroke('#FFCCA6')
    p5.circle(600, y, 20)
    y = y + speed

    console.log('height', p5.height)
    if (y > p5.height - 200 || y < p5.height - 700) { speed = -speed }

    p5.fill('#ff4400')
    p5.noStroke()
    p5.ellipse(580, 640, 3, 280)

    p5.fill('#ff0099')
    p5.noStroke()
    p5.ellipse(592, 640, 3, 265)

    p5.fill('#fce514')
    p5.noStroke()
    p5.ellipse(598, 640, 3, 250)

    x = x + 0.0002
    p5.rotate(x)
    p5.fill('#FFF2FC')
    p5.stroke('#7DFF59')
    p5.strokeWeight(.5)
    p5.triangle(56, 500, 250, 391, 400, 280)

    z = z + 0.0002
    p5.rotate(z)
    p5.fill('#FFF2FC')
    p5.stroke('#CCE5FF')
    p5.strokeWeight(.5)
    p5.triangle(386, 50, 598, 100, 758, 120)

  }
}