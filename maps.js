var input = [
    {
        name: "Person1",
        marks:{
            english: 80,
            maths: 60,
            social: 70
        }
    },
    {
        name: "Person2",
        marks:{
            english: 78,
            maths: 63,
            social: 78
        }
    },
    {
        name: "Person3",
        marks:{
            english: 90,
            maths: 86,
            social: 65
        }
    },
    {
        name: "Person4",
        marks:{
            english: 64,
            maths: 80,
            social: 60
        }
    }
]



var result = input.map(student => {
    var total = 0;
    var mark = Object.values(student.marks)
    console.log(mark)
    total = mark.reduce((a,b) => a+b)
   
    return {
        name: student.name,
        totalMarks: total
    }
})


console.log(result)