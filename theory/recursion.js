// рекурсия
function pow(x, n) {
    let result = 1;

    for (let i = 0; x < n; i++) {
        result *= x;
        
    };
    return result;
};

function pow(x, n) { // рекурсивная функция
    if (x === 1) {
        return x;
    } else {
        return x * pow(x, n - 1) 
    };

};


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Anm',
            progress: 10
        }],

        pro: [{
            name: "Sam",
            progress: 10
        }]
    }
};

// пример перебора данных с обычным циклом и рекурскией.
// будем считать средний прогресс по всем студентам

// более простой метод с рекурсией
function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total , data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

// через обычные циклы
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
            
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students
}

console.log(getTotalProgressByIteration(students));

