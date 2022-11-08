
// Ví dụ: ['underscore_case', 'my_first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']
// Task 1
function camelCase() {
    let list = document.getElementById('items').value;
    let items = list.split(", ");
    var arrayList = [];
    for (var index1 = 0; index1 < items.length; index1++){
        var first = items[index1].slice( 0, items[index1].indexOf('_') ).toLocaleLowerCase();
        var mid = items[index1].charAt(items[index1].indexOf('_') + 1).toLocaleUpperCase();
        var last = items[index1].slice(items[index1].indexOf('_') + 2).toLocaleLowerCase();
        var newItem = first + mid + last ;
        while (newItem.search('_') > 0){
            first = newItem.slice( 0, newItem.indexOf('_') );
            mid = newItem.charAt(newItem.indexOf('_') + 1).toLocaleUpperCase();
            last = newItem.slice(newItem.indexOf('_') + 2).toLocaleLowerCase();
            newItem = first + mid + last; 
        }

        arrayList.push(newItem);
    }
    document.getElementById('result').innerHTML = `${arrayList}` ;
}

camelCase();


// Ví dụ ["27", "28", "29"];
// Task 2
function temperature(){
    let list = document.getElementById('degree').value;
    let degree = list.split(', ');
    for (var index1 of degree){
        // if (Number.isFinite(index1) == false){
        //     return -1;
        // }
        // else{
        var printf = "... " + index1 + "ºC in " + (index1 + 1) + " days"; 
        console.log(printf);
        // }
    }
}

temperature();