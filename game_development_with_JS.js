window.onload = function () {
  let btn = document.getElementById('jump')
  let count = 0
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')
  var x = 300
  var y = 350

  var t = Date.now()
  let speed = 25

  context.fillStyle = 'red'
  context.fill()

  document.onkeydown = function () {
    count += 1
    y -= 25
  }
  document.ontouchstart = function () {
    count += 1
    y -= 25
  }

  function draw() {
    var timePassed = (Date.now() - t) / 1000
    t = Date.now()

    //clearing the canvas (очистка холста)
    context.clearRect(0, 0, 600, 400)

    //redrawing the circle (перерисовывание круга)
    context.beginPath()
    context.arc(x, y, 50, 0, 2 * Math.PI)
    context.fillStyle = 'red'
    context.fill()

    //drawing the count value (рисование значения счета)
    context.font = '20px Arial'
    context.fillStyle = 'white'
    context.fillText('Count: ' + count, 20, 30)

    if (y <= 350) {
      speed += 7000 * timePassed
      y += speed * timePassed
      speed = 25
    }
    if (y > 350) {
      count = 0
    }

    window.requestAnimationFrame(draw)
  }
  draw()
}
