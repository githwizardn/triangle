

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
          return false; 
        }
      }
    
  
    return true;
  }
  
  let number = Number(prompt("შეიყვანეთ რიცხვი"));
  
  if (isPrime(number)) {
    alert(`${number}  მარტივი რიცხვია !`);
  } else {
    alert(`${number} არაა მარტივი რიცხვი.`);
  }
  



 
  let side1 = Number(prompt("შეიყვანეთ 1 სამკუთხედის გვერდი:"));
  let side2 = Number(prompt("შეიყვანეთ 2 სამკუთხედის გვერდი:"));
  let side3 = Number(prompt("შეიყვანეთ 3 სამკუთხედის გვერდი:"));
  

function isTrianglePossible(side1, side2, side3) {
    /// დადებითი რიცხვები
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      console.error("სამკუთხედის გვერდები დადებით რიცხვები უნდა იყოს");
      return false;
    }
    // პატარა დიდი საშუალო
    let smallest = Math.min(side1, side2, side3);
    let middle = Math.max(Math.min(side1, side2), Math.min(side1, side3), Math.min(side2, side3));
    let biggest = Math.max(side1, side2, side3);

  // შემოწმება:
  // პატარა გვერდი დიდი უნდა იყოს დანარჩენ ორის სხვაობაზე,
  // და პატარა მათ ჯამზე :
  if (smallest > (biggest - middle) && smallest < (biggest + middle)) {
    return true; // შესაძ₾ებელია
  } else {
    return false; // შეუძლებელია
  }
  }
  
  
  if (isTrianglePossible(side1, side2, side3)) {
    alert("ამ სიგრძის გვერდებით სამკუთხედის შედგენა შესაძლებელია");
  } else {
    alert("ამ სიგრძის გვერდებით სამკუთხედის შედგენა შეუძლებელია");
  }
  




  // შევიყვანოთ რიცხვები
  const cathet1 = Number(prompt("შეიყვანეთ პირველი კათეტის მნიშვნელობა:"));
  const cathet2 = Number(prompt("შეიყვანეთ მეორე კათეტის მნიშვნელობა:"));
  
  
function calculateHypotenuse(cathet1, cathet2) {
    // დადებითი რიცხვების შემოწმება
    if (cathet1 <= 0 || cathet2 <= 0) {
      return "შეცდომა! კათეტები დადებით რიცხვები უნდა იყოს.";
    }
  
    //პითაგორას თეორემა ჰიპოთენუზის გმაოსათვლელად
    const hypotenuse = Math.sqrt(cathet1 * cathet1 + cathet2 * cathet2);
  
    // დამრგვალება
    const roundedHypotenuse = hypotenuse.toFixed(2);
  
    return `სამკუთხედის ჰიპოტენუზა  ${roundedHypotenuse} - ის ტოლია`;
  }
  

  // ფუნქციის გამოძახება
  const result = calculateHypotenuse(cathet1, cathet2);
  alert(result);
  