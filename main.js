const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let count = 0
    let i = begin
    while(i <= end) {

        count += i
        i += step
    }
        console.log(count)
}
    

  sequenceSum(1, 5, 3);