// 최종 메세지 return
function solution(S, A) {
    // 0 에서부터 출발한다
    // S[idx] 를 result에 추가한다
    // A[idx] 번째 사람에게 해당 string을 전달한다
    // 이때, 전달받는 사람이 0 이면 return 한다.
    const message = getMessage(0);
    return message;


    function getMessage(i){
        let curr = i;
        let result = "";

        while (true){
            result += S[curr];
            curr = A[curr];
            if (curr === 0){
                return result;
            }
        }
    }
}


// 모든 요소를 같게 만들기 위한 최소 step 수
// step : 특정 요소를 1 증가 시키거나 1 감소 시킬 수 있다.

function solution(A) {
    // 배열 요소의 평균값을 구한 후, (자리수는 정수로 변환)
    // 배열내 각 요소별로 평균값으로 이동하기 위한 step 수를 모두 더한다.
    const avg = A.reduce((prev,acc) => prev+acc) / A.length;
    const target = Math.round(avg);

    const minSteps = getMinStepsForTarget(A,target);
    return minSteps;

    function getMinStepsForTarget(arr,target){
        let result = 0;
        arr.forEach((n) => {
            result += Math.abs(n-target);
        });
        return result;
    }
}


// 주어진 string S의 한 자리 숫자를 다른 숫자로 변경할 때,
// 3으로 나누어 떨어지는 서로 다른 숫자의 개수
// 높은 자리 숫자가 0인 경우는, 해당 자리수를 없애고 계산한다.
function solution(S) {
    // 각 자리수를 모두 더해 3으로 나누어 떨어지면, 3의 배수이다.
    // S의 모든 자리를 순회하며 매번 해당 자리를 제외한 모든 숫자의 합을 구한다.
    // 3으로 나누어 떨어지기 위해 더할 수 있는 후보 숫자를 모두 구한 후,
    // 해당 위치의 String을 바꾼 숫자로 변환해, Set에 추가한다.
    // Set의 크기를 return 한다.
    const DIVIDER = 3;
    const digitSum = S.split("").map((str) => +str).reduce((prev,acc) => prev+acc);
    const sumExceptIdx = {};
    const divisibleNumbers = new Set();

    for (let i=0; i<S.length; i++){
        sumExceptIdx[i] = digitSum - Number(S[i]);
    }

    for (let i=0; i<S.length; i++){
        const remainder = sumExceptIdx[i] % DIVIDER;

        // 모든 후보 숫자를 구한다
        for (let j=0; j<10; j++){
            if (isDivisible(j+remainder)){
                divisibleNumbers.add(S.slice(0,i) + `${j}` + S.slice(i+1));
            }
        }
    }

    return divisibleNumbers.size;

    function isDivisible(n){
        return n % DIVIDER === 0;
    }
}



// L1,L2 두 개의 경로가 문자열로 주어지고
// "." : 길, "x": 막힌 길
// maximum number of segments with potholes that can be repaired
// 수리할 수 있는 최대 pothole의 개수 (주행 경로를 방해하지 않아야한다.)
function solution(L1, L2) {
    const LANE = {
        0: L1,
        1: L2
    }
    let potholes = 0;
    let minPotholes = Number.MAX_SAFE_INTEGER;

    for (let i=0; i<L1.length; i++){
        if (L1[i] === "x") potholes++;
        if (L2[i] === "x") potholes++;
    }

    DFS(0);
    DFS(1);

    const result = potholes - minPotholes;
    return result;

    function DFS(laneNum){
        // console.log("start DFS")
        const visited = Array.from({length:2}, () => new Array(L1.length).fill(false));
        let currLane = laneNum;
        let cnt = 0;
        let idx = 0;

        while (idx<L1.length){

            // console.log(currLane,idx,cnt);

            // 현재 위치가 pothole인 경우,
            if (isPothole(getLaneRoad(currLane,idx))) cnt++;
            visited[currLane][idx] = true;

            // 1. 오른쪽이 뚫린 길일 경우, 그대로 이동
            if (isRightSmooth(currLane,idx+1) && !visited[currLane][idx+1]){
                idx++;
            }

            // 2. 다른 길이 뚫린 길일 경우, lane을 바꿔서 이동
            else if (isOtherLaneSmooth(currLane,idx) && !visited[switchLane(currLane)][idx]){
                currLane = switchLane(currLane);
            }

            // 3. 모두 막힌 경우엔, 오른쪽으로 이동하며 visited, cnt 업데이트
            else {
                idx++;
            }
        }
        minPotholes = Math.min(cnt,minPotholes);
        // console.log(currLane,idx,cnt);
    }

    function isRightSmooth(laneNum,idx){
        return isValid(idx) && !isPothole(getLaneRoad(laneNum, idx))
    };

    function isOtherLaneSmooth(laneNum,idx){
        return isValid(idx) && !isPothole(getLaneRoad(switchLane(laneNum),idx));
    }

    function isPothole(str){
        return str === "x";
    }

    function isValid(idx){
        return idx < L1.length && -1 < idx;
    }

    function switchLane(laneNum){
        return laneNum ? 0 : 1
    }

    function getLaneRoad(laneNum,idx){
        return LANE[laneNum][idx];
    }
}
