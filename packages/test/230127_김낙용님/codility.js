function solution(N, K) {
    let result = 0;

    if(N*(N+1)/2 < K){
        result = -1;
    }else if(N*(N+1)/2 == K){
        result = N;
    }else{
        let glasses = [];

        for(let i = N; i>=1; i--){
            glasses.push(i);
        }
        while(K> 0){
            K = glasses.slice(0).reduce((acc,cur,i,arr)=>{
                if(acc>=cur){
                    result++;
                    arr.splice(1);
                    glasses.splice(i,1);;
                    return acc-cur;
                }else{
                    return acc;
                }
            },K);
        }
    }

    return result;
}


function solution(S) {
    let sum = 0;

    //앞에 0제거
    S = S.replace(/(^0+)/,"");

    for(let i = 0; i<S.length; i++){
        if(i == 0){
            sum += S.length;
        }else if(S[i] == 1){
            sum += 1;
        }
    }
    return sum;
}



function solution(N, A, B) {
    let answer = 0;
    let totalCount = {};

    //0으로 채움
    for(let i = 0; i<N; i++){
        totalCount[i] = 0;
    }

    //지워진 노드의 인덱스위치(A,B배열에서 지워주기위함)
    let removeIndex = -1;

    //이번실행에서 지워진 노드가 있는지
    let isRemove = true;

    //노드가 제거되었다면 없애야할 노드가있는지 탐색해야함
    while(isRemove){
        isRemove = false;
        totalCount = countNode(A,B,totalCount);

        for(let key in totalCount){
            if(totalCount[key] == 1){
                isRemove = true;
                removeIndex = A.findIndex(e=>e == key);
                if(removeIndex < 0){
                    removeIndex = B.findIndex(e=>e == key);
                }
                A.splice(removeIndex,1);
                B.splice(removeIndex,1);

                removeIndex = -1;
                delete totalCount[key];
            }else if(totalCount[key] == 0){
                isRemove = true;
                delete totalCount[key];
            }else{
                totalCount[key] = 0;
            }

        }
        //지워진 노드가있으면 answer++
        if(isRemove){
            answer++;
        }
    }
    return answer;
}

function countNode(A,B,totalCount){
    A.reduce((counter, num)=>{
        counter[num] += 1;
        return counter;
    },totalCount);

    B.reduce((counter, num)=>{
        counter[num] += 1;
        return counter;
    },totalCount);
    return totalCount;
}
