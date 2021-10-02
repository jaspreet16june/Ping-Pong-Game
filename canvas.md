The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.

The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.

Canvas has several methods for drawing paths, boxes, circles, text, and adding images

<canvas id="myCanvas" width="200" height="100"></canvas>

Note: Always specify an id attribute (to be referred to in a script), and a width and height attribute to define the size of the canvas. To add a border, use the style attribute.

<script>
    //we have to take out our canvas 
var c = document.getElementById("myCanvas");

    //have to specify the context in which we wants our drawing
var ctx = c.getContext("2d");
    //For pointing to the starting point that is  0,0
ctx.moveTo(0, 0);
    //lineTo used for moving the point from 0,0 to 200,100
ctx.lineTo(200, 100);
    //to make it visible we will use stroke method
ctx.stroke();


//fillRectange
//by this we can fill the shape by this color 
ctx.fillStyle = "colorName"
//to make a rectangle
ctx.fillRect(x,y,width,height);










</script>