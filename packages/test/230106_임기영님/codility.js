function solution(A) {
    // 4의 배수(음수 포함)를 찾아서 합을 리턴하는 문제

    // 4로 나누어 나머지가 0인 요소를 찾아 모두 더한다. O(n)
    let sum = 0
    A.forEach(item => {
        if(item % 4 === 0) sum += item
    })

    return sum
}




function solution(S) {
    // a 또는 b가 들어있는 배열에서 b 뒤에 a가 있으면 false 리턴. 그 외는 true O(n)
    for(let i=0; i<S.length; i++){
        if(S[i] === 'a' && S[i-1] === 'b') return false
    }
    return true
}



function solution(A) {
    // 최소값을 찾고, 최소값 까지를 하나의 슬라이스로 묶고,
    // 그 다음에 있는 최소값을 찾아 슬라이스로 묶고 이를 반복하여,
    // 슬라이스의 총 개수를 출력 O(nlogn)

    let numOfSlice = 0
    let indexOfMin = -1
    let length = A.length

    while(indexOfMin < A.length-1){
        let min = Infinity

        // 이전 최소값의 인덱스 이후 새로운 최소값 찾기
        for(let i = indexOfMin + 1; i<length; i++){
            if(A[i] < min){
                min = A[i]
                indexOfMin = i
            }
        }
        numOfSlice++
    }
    return numOfSlice
}
