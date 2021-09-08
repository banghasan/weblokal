let data = {};
data.body = { "Key": { "row": 1, "data": ["Key", "Hasil"] }, "ID-KeyA 111": { "row": 2, "data": ["ID-KeyA 111", "Data 01"] }, "ID-KeyA 112": { "row": 3, "data": ["ID-KeyA 112", "Data 02"] }, "ID-KeyA 113": { "row": 4, "data": ["ID-KeyA 113", "Data 03"] }, "ID-KeyA 114": { "row": 5, "data": ["ID-KeyA 114", "Data 04"] }, "ID-KeyA 115": { "row": 6, "data": ["ID-KeyA 115", "Data 05"] }, "ID-KeyB 111": { "row": 7, "data": ["ID-KeyB 111", "Data 06"] }, "ID-KeyB 112": { "row": 8, "data": ["ID-KeyB 112", "Data 07"] }, "ID-KeyB 113": { "row": 9, "data": ["ID-KeyB 113", "Data 08"] }, "ID-KeyB 114": { "row": 10, "data": ["ID-KeyB 114", "Data 09"] }, "ID-KeyB 115": { "row": 11, "data": ["ID-KeyB 115", "Data 10"] }, "ID-KeyB 116": { "row": 12, "data": ["ID-KeyB 116", "Data 11"] }, "ID-KeyB 117": { "row": 13, "data": ["ID-KeyB 117", "Data 12"] }, "ID-KeyC 111": { "row": 14, "data": ["ID-KeyC 111", "Data 13"] }, "ID-KeyC 112": { "row": 15, "data": ["ID-KeyC 112", "Data 14"] }, "ID-KeyC 113": { "row": 16, "data": ["ID-KeyC 113", "Data 15"] }, "ID-KeyC 114": { "row": 17, "data": ["ID-KeyC 114", "Data 16"] }, "ID-KeyC 115": { "row": 18, "data": ["ID-KeyC 115", "Data 17"] }, "ID-KeyC 116": { "row": 19, "data": ["ID-KeyC 116", "Data 18"] }, "ID-KeyC 117": { "row": 20, "data": ["ID-KeyC 117", "Data 19"] }, "ID-KeyC 118": { "row": 21, "data": ["ID-KeyC 118", "Data 20"] } }

function check(value) {
    const return_value = Object.prototype.toString.call(value);
    // we can also use regex to do this...
    const type = return_value.substring(
        return_value.indexOf(" ") + 1,
        return_value.indexOf("]"));

    return type.toLowerCase();
}

function search(key, stop = true) {
    if (!data) return false;

    let regex = check(key) === 'regexp' ? key : new RegExp(key, 'mi');


    var result = stop ? false : [];
    let found = false;
    Object.keys(data.body).forEach(v => {
        if (found && stop) return;
        let match;


        if (match = regex.exec(v)) {
            console.log(regex, 'vs', v);
            found = true;
            let range = true;
            let getIt = {
                //col: true,
                ...data.body[v],
                //pos: true,
                //range, regex, match
            }
            if (stop) return result = getIt;
            result.push(getIt);
        }
    });
    return result;
}



let teks = 'KeyB';
let regex = new RegExp(teks, 'i');

let result = search(teks, false);

console.log(result)
