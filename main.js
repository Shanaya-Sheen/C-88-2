var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;
hole_y=400; 
hole_x=800;

function load_img()
{ fabric.Image.fromURL("20-bullet-shot-hole-png-image.png", function(Img)
 { hole_obj = Img; hole_obj.scaleToWidth(150); hole_obj.scaleToHeight(150); 
    hole_obj.set({ top:hole_y, left:hole_x }); 
    canvas.add(hole_obj); }
    ); new_image(); }

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("OIP.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("shift_and_p_pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("shift_and_m_pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log ("block_image_height="+block_image_height);
        console.log ("up_arrow_press x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+block_image_height;
        console.log ("block_image_height="-block_image_height);
        console.log ("down_arrow_press x"-player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("left_arrow_press x=" +player_x+ "y="+player_y);
        canvas.remove(player_object);
        player_update();

    }
}
function right(){
    if (player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block_image_width="-block_image_width);
        console.log("right_arrow_press x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}