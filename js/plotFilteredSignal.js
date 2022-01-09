class PlotFilteredSignal {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    plotfiltered = (x1, y1, label1) => {
        this.freq = d3.select("#plot5").append("div")
            .attr("id", "plottedsignalFiltered")
            .attr("style", "position: relative;margin: auto;")
            .attr("width", this.width).attr("height", this.height);
        this.canvas = d3.select("#plottedsignalFiltered").append("canvas")
            .attr("id", "myChart5");
            
        this.ctx1 = document.getElementById('myChart5');

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
                    backgroundColor : "	#FF8CAEB0",
                    borderWidth : "0"
                }
            }
        }
        var myChart5 = new Chart(this.ctx1, {
            type: 'line',
            options: options,
            data: data1
        });

        
        return {myChart5};
    }
    destroy = () => {
        d3.select("#myChart5").remove();   
    }
}