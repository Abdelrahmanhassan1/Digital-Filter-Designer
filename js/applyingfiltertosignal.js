class ApplyingFilterToSignal {
    constructor() {
        this.MAX_POINTS = 500;
        this.semiUnitCircle = this.generateSemiUnitCircle();
    }

    get frequencies() {
        return this.theta;
    }

    generateSemiUnitCircle() {
        this.theta = this.linspace(0, Math.PI, this.MAX_POINTS);
        let points = [];
        let x, y;
        for (let i = 0; i < this.MAX_POINTS; i++) {
            x = Math.cos(this.theta[i]);
            y = Math.sin(this.theta[i]);
            points[i] = [x, y]
        }
        return points;
    }

    difference(point1 = [], point2 = []) {
        return [point2[0] - point1[0], point2[1] - point1[1]];
    }

    magnitude(point) {
        return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
    }

    phase(point) {
        if (point[0] == 0) {
            return Math.PI / 2;
        }
        else {
            return - Math.atan(point[1] / point[0]);
        }
    }

    generate_Semi_Unit_Circle_With_Specific_Number_Of_Points(numberOfPoints) {
        this.theta = this.linspace(0, Math.PI, numberOfPoints);
        let points = [];
        let x, y;
        for (let i = 0; i < numberOfPoints; i++) {
            x = Math.cos(this.theta[i]);
            y = Math.sin(this.theta[i]);
            points[i] = [x, y]
        }
        return points;
    }
    filterToSignal(poles = [[]], zeroes = [[]], allPass = [[]], data = [[]], numOfPoints, signal_length ) {
        let fullMagResponse = []
        let magResponse = []
        let phaseResponse = []
        let magNum, magDenum, phaseNum, phaseDenum, diff;
        var i = 0;
        // let parts = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        // let parts = Array.from(Array(20).keys());
        let parts = Array.from(Array(Math.ceil(signal_length / numOfPoints)).keys());

        console.log(parts);

        for (const part of parts ){
            // console.log(part);   
            i = (numOfPoints * part)
            let magResponse = []
            let phaseResponse = []
            // console.log(i);
            for (const point of this.generate_Semi_Unit_Circle_With_Specific_Number_Of_Points(numOfPoints)) {
                magNum = 1;
                magDenum = 1;
                phaseNum = 0;
                phaseDenum = 0;
                for (const zero of zeroes) {
                    diff = this.difference(point, zero);
                    magNum = magNum * this.magnitude(diff);
                    phaseNum = phaseNum + this.phase(diff);
                }
                for (const pole of poles) {
                    diff = this.difference(point, pole);
                    magDenum = magDenum * this.magnitude(diff);
                    phaseDenum = phaseDenum + this.phase(diff);
                }
                for (const a of allPass) {
                    diff = this.difference(point, a);
                    phaseNum = phaseNum + this.phase([1-point[0]*a[0] - point[1]*a[1],point[0]*a[1] - point[1]*a[0]]);
                    phaseDenum = phaseDenum + this.phase(diff);
                }
                magResponse.push(data[i]*(magNum / magDenum).toFixed(5));
                phaseResponse.push(phaseNum - phaseDenum.toFixed(5));
                i+=1;
            }
            fullMagResponse = fullMagResponse.concat(magResponse);
            // console.log(fullMagResponse);
        }
        // console.log(fullMagResponse);
        return {
            "magnitudeOfFiltered": fullMagResponse,
            "phaseOfFiltered": phaseResponse
        };
    }

    linspace(start, end, num) {
        const step = (end - start) / (num - 1);
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr[i] = (start + (i * step)).toFixed(5);
        }
        return arr;
    }
}
