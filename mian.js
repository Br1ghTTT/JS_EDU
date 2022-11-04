      console.log('-----------------final question---------------------');

      const filter = (arr /* = [1, 2, 3, 4, 5, 7]*/, fn /* n => n % 2 === 0  */) => {
        return arr.reduce((filteredArr, element) => {
            console.log(filteredArr); // [1, 3, 5]
            console.log(element); // 6
         return fn(element) ? [...filteredArr /*1, 3 ,5 */] : [...filteredArr /*1, 3, 5 */, element /*7*/]
         }, [])
        }
        
        console.log(filter([1, 2, 3, 4, 5, 7], n => n % 2 === 0)) // [1, 3, 5, 7]