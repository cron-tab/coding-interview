// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, K) {
    // 가장 큰 글라스 용량이 담으려는 용량보다 크면 무조건 한번에 담김
    if (N >= K) {
        return 1;
    }

    const totalSum = (N * (N + 1)) / 2; // 총 글라스 용량 계산

    // 총 글라스용량보다 담으려는 용량이 크면 담을 수 없는 걸로 간주
    if (K > totalSum) {
        return -1;
    }

    let glassCount = 0; // 글라스 수
    let currentSum = 0; // 현재까지 담은 용량

    // 가장 큰 글라스부터 채움
    for (let i = N; i > 0; i--) {
        const checkSum = currentSum + i;
        if (K === checkSum) { // 용량이 일치함
            glassCount++;
            return glassCount;
        } else if (K > checkSum) { // 담을 수 있는 상태이면 글라스 추가
            glassCount++;
            currentSum = checkSum; // 용량 추가 함
        }
    }

    return -1;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    let numValue = parseInt(S, 2); // 2진수를 10진수로 변환
    let count = 0; // 연산 카운트

    // 0이 될때까지 반복
    while (numValue > 0) {
        if (numValue % 2 === 1) {
            numValue--; // 홀수인 경우 -1
        } else {
            numValue /= 2; // 짝수인 경우 나누기 2
        }
        count++; // 연산한 카운트 +1
    }

    return count;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A, B) {
    const graph = Array(N).fill().map(() => []); // 그래프를 저장할 배열 (인접 리스트)

    // 인접 리스트 생성
    for (let i = 0; i < A.length; i++) {
        graph[A[i]].push(B[i]);
        graph[B[i]].push(A[i]);
    }

    const removeQueue = []; // 한개의 간선만 연결된 정점들의 리스트(삭제할 정점)

    for (let i = 0; i < N; i++) {
        // 초기에는 1개 이하의 간선으로 연결된 정점을 찾음
        if (graph[i].length <= 1) {
            removeQueue.push(i);
        }
    }

    let seconds = 0; // 삭제하는데 걸린 시간
    while (removeQueue.length > 0) {
        const length = removeQueue.length;
        for (let i = 0; i < length; i++) {
            const vertex = removeQueue.shift(); // 제거 할 정점

            if (graph[vertex].length > 0) {
                const connectedVertex = graph[vertex][0]; // 인접한 정점을 찾음
                graph[connectedVertex] = graph[connectedVertex].filter((item) => item !== vertex); // 인접한 정점에서 현재 정점값을 제거 함

                // 연결된 간선이 1개인 경우 삭제할 큐에 추가
                if (graph[connectedVertex].length === 1) {
                    removeQueue.push(connectedVertex);
                }
            }
        }

        seconds++; // 1초 증가
    }

    return seconds;
}

