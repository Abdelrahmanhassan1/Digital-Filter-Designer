class Plot {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    plot = (x1, y1, x2, y2, x3, y3,x4, y4,x5,y5, label1, label2, label3, label4, label5) => {
        this.freq = d3.select("#plot1").append("div")
            .attr("id", "freqResp")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#freqResp").append("canvas")
            .attr("id", "myChart1");

        this.phase = d3.select("#plot2").append("div")
            .attr("id", "phaseResp")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#phaseResp").append("canvas")
            .attr("id", "myChart2");

        this.phase = d3.select("#plot3").append("div")
            .attr("id", "allPassResp")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#allPassResp").append("canvas")
            .attr("id", "myChart3");

        this.phase = d3.select("#plot4").append("div")
            .attr("id", "plottedsignal")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#plottedsignal").append("canvas")
            .attr("id", "myChart4");
        
        this.phase = d3.select("#plot5").append("div")
            .attr("id", "plottedsignalFiltered")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#plottedsignalFiltered").append("canvas")
            .attr("id", "myChart5");

            
        this.ctx1 = document.getElementById('myChart1');
        this.ctx2 = document.getElementById('myChart2');
        this.ctx3 = document.getElementById('myChart3');
        this.ctx4 = document.getElementById('myChart4');
        this.ctx5 = document.getElementById('myChart5');

        let data1 = {
            labels: x1,
            datasets: [{
                label: label1,
                data: y1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
            }]
        }

        let data2 = {
            labels: x2,
            datasets: [{
                label: label2,
                data: y2,
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
            }]
        }

        let data3 = {
            labels: x3,
            datasets: [{
                label: label3,
                data: y3,
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
            }]
        }
        let data4 = {
            labels: x4,
            datasets: [{
                label: label4,
                data: y4,
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
            }]
        }
        let data5 = {
            labels: x5,
            datasets: [{
                label: label5,
                data: y5,
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
            }]
        }
        let options = {
            maintainAspectRatio: false,
            animation: false,
            scales : {
                x : {
                    ticks : {
                        sampleSize : 5
                    }
                }
                
            },
            elements : {
                point : {
                    backgroundColor : "	#FF8CAEB0",
                    borderWidth : "0"
                }
            }
        }
        var myChart1 = new Chart(this.ctx1, {
            type: 'line',
            options: options,
            data: data1
        });

        var myChart2 = new Chart(this.ctx2, {
            type: 'line',
            options: options,
            data: data2
        });

        var myChart3 = new Chart(this.ctx3, {
            type: 'line',
            options: options,
            data: data3
        });
        var myChart4 = new Chart(this.ctx4, {
            type: 'line',
            options: options,
            data: data4
        });
        var myChart5 = new Chart(this.ctx5, {
            type: 'line',
            options: options,
            data: data5
        });
        return {myChart1 , myChart2 , myChart3, myChart4, myChart5 };
    }
    destroy = () => {
        d3.select("#myChart1").remove();
        d3.select("#myChart2").remove();
        d3.select("#myChart3").remove();
        d3.select("#myChart4").remove();
        d3.select("#myChart5").remove();
    }
}