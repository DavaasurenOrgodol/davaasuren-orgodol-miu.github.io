const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2,4];

function scoreExams(studentAnswers, correctAnswers){
    let result = [];
    for(let ele of studentAnswers){
        let cnt =0;
        for(let i=0; i< ele.length; i++){
            if(ele[i] == correctAnswers[i]){
                cnt++;
            }
        }
        result.push(cnt);
    }
    return result;
}
console.log(scoreExams(studentAnswers, correctAnswers));