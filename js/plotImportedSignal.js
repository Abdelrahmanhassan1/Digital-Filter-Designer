class PlotImportedSignal {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    plotimported = (x1, y1, label1) => {
        this.freq = d3.select("#plot4").append("div")
            .attr("id", "plottedsignal")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#plottedsignal").append("canvas")
            .attr("id", "myChart4");
            
        this.ctx1 = document.getElementById('myChart4');

        let data1 = {
            labels: x1,
            datasets: [{
                label: label1,
                data: y1,
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
                    backgroundColor : "	#FF8C00",
                    borderWidth : "0"
                }
            }
        }
        var myChart4 = new Chart(this.ctx1, {
            type: 'line',
            options: options,
            data: data1
        });

        
        return {myChart4};
    }
    destroy = () => {
        d3.select("#myChart4").remove();
        
    }
}