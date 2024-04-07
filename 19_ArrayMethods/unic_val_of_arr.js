function unique(arr) {
    let result = [];

    for (item of arr){
        if (!result.includes(item)){
            result.push(item);
        }
    }
    return result;
  }
  
  let strings = ["кришна", "кришна", "hare", "hare",
    "hare", "hare", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O