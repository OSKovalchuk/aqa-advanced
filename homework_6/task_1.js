// Function Declaration
function calculateArea(width, height) {
    return width * height;
  }
  const result1 = calculateArea(5, 10);
  console.log('Function Declaration:', result1);
  
  // Function Expression
  const calculateAreaExpression = function(width, height) {
    return width * height;
  };
  const result2 = calculateAreaExpression(5, 10);
  console.log('Function Expression:', result2);
  
  // Arrow Function
  const calculateAreaArrow = (width, height) => width * height;
  const result3 = calculateAreaArrow(5, 10);
  console.log('Arrow Function:', result3);
  