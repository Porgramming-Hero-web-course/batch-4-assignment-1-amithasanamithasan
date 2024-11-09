{
    // circule 
   
// Rectangle  
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
      };
      const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      function calculateShapeArea(shapeDetails: Rectangle): number {
        if (shapeDetails.shape === "rectangle") {
          return shapeDetails.width * shapeDetails.height;
        }
        return 0;

}
console.log(rectangleArea);
}
