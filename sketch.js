var tree = [];
var leaves = [];
var count = 0;
var csokkenoVonal = 10;

function setup() {

  createCanvas(820, 360);
  
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height-100);
  var root = new Branch(a, b, 10);

  tree[0] = root;
}

function mousePressed(){

    csokkenoVonal--;
    for (let i = tree.length-1; i >= 0 ; i--) {
        
        if (!tree[i].finished){
            tree.push(tree[i].branchA(csokkenoVonal));
            tree.push(tree[i].branchB(csokkenoVonal));
            
        }
        tree[i].finished = true;
    }
    count++;
    if (count === 10){
        for (let i = 0; i < tree.length; i++) {
            if (!tree[i].finished){
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }

}

function draw() {

    background(255, 204, 0);
    for (let i = 0; i < tree.length; i++) {
        tree[i].show();
        //tree[i].mozgas();
    }

    for (let i = 0; i < leaves.length; i++) {
        
        fill(54, 128, 40, 50);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8 ,8);
        //leaves[i].y += random(0,3);
    }
}