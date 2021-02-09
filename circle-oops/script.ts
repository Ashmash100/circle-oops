type colorData = "Red" | "Orange" | "Purple" | "Green"
class Circle{
   
    radius : number = 1.0
    color: colorData = "Red"

   
    constructor(radius?:number, color?:colorData){
        if(typeof(radius)!=="undefined") { this.radius = radius }
        if(typeof(color)!=="undefined") { this.color = color }
    }
   
    getRadius():number{
        return this.radius
    }

   
    setRadius(radius:number){
        this.radius = radius
    }

    
    getColor():colorData{
        return this.color
    }

    
    setColor(color:colorData){
        this.color = color
    }

    
    toString():String{
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    
    getArea():number{
        return ((Math.PI)*this.radius*this.radius)
    }

    
    getCircumference():number{
        return (2*(Math.PI)*this.radius)
    }
}


let c = new Circle(2.2, 'Orange')
c.setRadius(3.3)
c.setColor("Green")
console.log("Radius: "+c.getRadius())
console.log("SetRaduis value: " +c.getRadius())
console.log("getColor: "+c.getColor())
console.log("Setcolour value: " + c.getColor())
console.log(c.toString())
console.log("Area: "+c.getArea())
console.log("Circumference: "+c.getCircumference())