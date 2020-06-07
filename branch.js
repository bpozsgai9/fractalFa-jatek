class Branch{
    constructor(begin, end, weight){
        
        this.begin = begin;
        this.end = end;
        this.weight = weight
        this.finished = false;

        this.show = () => {
            stroke(100);
            strokeWeight(weight);
            line(this.begin.x, this.begin.y, this.end.x, this.end.y);
        }
        this.branchA = (vastagsag) => {
            
            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(PI/6);
            dir.mult(0.7);
            var newEnd = p5.Vector.add(this.end, dir);

            var right = new Branch(this.end, newEnd, vastagsag);
            return right;   
        }

        this.branchB = (vastagsag) => {

            var dir = p5.Vector.sub(this.end, this.begin);
            dir.rotate(-PI/6);
            dir.mult(0.7);
            var newEnd = p5.Vector.add(this.end, dir);

            var left = new Branch(this.end, newEnd, vastagsag);
            return left;   
        }

        this.mozgas = () => {
            this.end.x += random(-1, 1);
            this.end.y += random(-1, 1);
        }

    }


}
