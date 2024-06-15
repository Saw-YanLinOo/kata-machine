export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;

    do{
        const mid = Math.floor(lo +(hi -lo)/2);
        const v = haystack[mid];

        if(v === needle){
            return true;
        }else if(needle > v){
           lo = mid +1;
        }else{
            hi = mid;
        }

    }while(lo<hi)

    return false;
}