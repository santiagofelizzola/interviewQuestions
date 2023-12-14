// Staircase detail

// This is a staircase of size n = 4:

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to n . It is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

const staircase = (n) => {
  let space = " ";
  let hash = "#";

  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}


// staircase(5)

const staircase_V2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let spaces = "";
    let hashes = "";

    // Add spaces
    for (let j = 1; j <= n - i; j++) {
      spaces += " ";
    }

    // Add hashes
    for (let k = 1; k <= i; k++) {
      hashes += "#";
    }

    console.log(spaces + hashes);
  }
}


staircase_V2(5)