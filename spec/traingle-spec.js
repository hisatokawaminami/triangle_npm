import { Triangle } from './../src/triangle.js';
describe('Triangle', function(){
  var reusableTriangle;

  beforeEach(function(){
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function(){
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function(){
    let triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function(){
    let notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly determine if a triangle is equalateral', function(){
    let triangle = new Triangle(3,3,3);
    expect(triangle.checkType()).toEqual("an equilateral triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    let isocTriangle = new Triangle(5,5,7)
    expect(isocTriangle.checkType()).toEqual("an isosceles triangle");
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    let scalTriangle = new Triangle(4,5,7)
    expect(scalTriangle.checkType()).toEqual("a scalene triangle");
  });
});

//debug

//
// describe('Triangle', function() {
//   it('should test whether a Triangle has three sides', function() {
//     var triangle = new Triangle(3,4,5)
//     expect(triangle.side1).toEqual(3)
//     expect(triangle.side2).toEqual(4)
//     expect(triangle.side3).not.toEqual(6)
//   });
//
//
//   it('should correctly determine whether three sides are not a triangle', function() {
//     console.log("debugger TEST next");
//     debugger;
//     var triangle = new Triangle(12,3,3)
//     console.log(triangle);
//     expect(triangle.checkType()).toEqual("not a triangle");
//   });
// });
