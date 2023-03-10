// 1. The following findFactors function.
function findFactors(num: number) {
    let factors: number[] = [];
    for (let factor: number = 2; factor <= num / 2; factor++) {
        if (num % factor === 0) {
            factors.push(factor);
        }
    }
    return factors;
}

console.log(`// 1. Find Factor Function: \n`, findFactors(500));


// 2. This LeapYear function
function leapYear(year: number): boolean {
    if (year % 400 === 0) {
        console.log("Leap Year");
        return true;
    } else if (year % 100 === 0) {
        console.log("Not a Leap Year");
        return false;
    } else if (year % 4 === 0) {
        console.log("Leap Year");
        return true;
    } else {
        console.log("Not a Leap Year");
        return false;
    }
}

console.log(`// 2. Weather Leap Year Function: \n`, leapYear(2000));

// 3. This RNATranscription function
type Nucleotide = 'A' | 'C' | 'G' | 'T'
function rnaTranscription(dna: string[] | string): string {
    let rna: string = "";
    for (let nucleotide of dna) {
        switch (nucleotide) {
            case "G":
                rna += "C";
                break;
            case "C":
                rna += "G";
                break;
            case "T":
                rna += "A";
                break;
            case "A":
                rna += "U";
                break;
            default:
                throw new Error(`The nucleotide ${nucleotide} does not exist`);
        }
    }
    return rna;
}

console.log(`// 3. RNA Transcription Function: \n`, rnaTranscription("GCTA"))
 
// 4. The factorial recursive function.
function factorial(number: number): number {
    if (number === 0 || number === 1) {
        return 1;
    }

    return factorial(number - 1) * number;
}

console.log(`// 4. The factorial recursive function: \n`, factorial(10));


// 5. The setTimeout callback function
const timeoutHandler = () => {
    console.log("Timeout happens!");
};

const timeout: number = 1000;

console.log(`// 5. The setTimeout callback function: `);

setTimeout(timeoutHandler, timeout);

// 6. The type of the variable of someValue
const someValue: number | null = Math.random() > 0.5 ? 12 : null;

const nextValue = someValue == null ? null : someValue + 1;

console.log(`// 6. The type of the variable of someValue: \n`, someValue);
console.log(someValue, nextValue);


// 7. The type of the following object
type Teacher = {
    name: string,
    age: number,
    students: Student[],
}

type Student = {
    name: string,
    age: number,
    exercises?: Exercises[],
}

type Exercises = {
    score: number,
    date: Date
}

const peter: Teacher = {
    name: "Peter",
    age: 50,
    students: [
        { name: "Andy", age: 20 },
        { name: "Bob", age: 23 },
        {
            name: "Charlie",
            age: 25,
            exercises: [{ score: 60, date: new Date("2019-01-05") }],
        },
    ],
};


function report(student: Student) {
    
}

console.log(peter);
