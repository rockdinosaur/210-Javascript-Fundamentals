function generateClassRecordSummary(students) {
  var averageScores = Object.keys(students).map(function(student) {
    return 0.65 * (students[student].scores.exams.reduce(function(total, examScore) {
      return total + examScore;
    }) / students[student].scores.exams.length) + 0.35 * (students[student].scores.exercises.reduce(function(total, exerciseScore) {
      return total + exerciseScore;
    }))
  }).map(function(score) {
    return String(Math.round(score)) + ' ' + calculateLetterGrade(score);
  });
  
  
 var examScores = studentScores.student1.scores.exams.map(function(score, idx) {
    return Object.keys(students).map(function(student) {
      return students[student].scores.exams[idx];
    });
  })

 var examStats = examScores.map(function(exam) {
   return {
     average: exam.reduce(function(total, examScore) {return total + examScore;}) / exam.length,
     minimum: sortedGrades(exam)[0],
     maximum: sortedGrades(exam)[exam.length - 1],
   };
 });

 return {
   studentGrades: averageScores,
   exams: examStats,
 };
}

function calculateLetterGrade(score) {
  if (score >= 93) {
    return '(A)';
  } else if (score >= 85) {
    return '(B)';
  } else if (score >= 77) {
    return '(C)';
  } else if (score >= 69) {
    return '(D)';
  } else if (score >= 60) {
    return '(E)'; 
  } else {
    return '(F)'; 
  }
}

function sortedGrades(gradesArr){ 
  return gradesArr.slice().sort(function(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }) 
}

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

generateClassRecordSummary(studentScores);



// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }