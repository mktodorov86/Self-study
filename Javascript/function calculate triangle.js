function calculateTriangleAreaByHeightAndSide(height,side){
   const area = (height*side)/2;return area
}
const triangleHeight = 6;
const triangleSide = 4;
const area = calculateTriangleAreaByHeightAndSide(triangleHeight,triangleSide);
console.log("The area of the triangle is, " + area)