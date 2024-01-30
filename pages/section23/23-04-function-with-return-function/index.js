// 1. A function that return a function
function aaa() {
  const apple = 10;

  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}

aaa()();

// 2
function aaa(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}

// 3
const ccc = (apple) => (banana) => {
    console.log(banana);
    console.log(apple);
}


// 4
const ddd = (apple) => (banana) => (orange) => (pear) {
    console.log(banana);
    console.log(apple);
    console.log(orange);
    console.log(pear);
}

ddd(10)(20)(30)(40);


