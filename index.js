const fs = require("fs");

// getting the input file name and saving into inputFileName variable;
const inputFileName = `${process.argv[2]}`;
console.log(inputFileName);

if (!inputFileName) {
  // cheking if file name is provided or not;
  console.log("Please input the file name like 'Node index.js src.json'");
} else {
  // reading the file content;
  const rowData = fs.readFileSync(inputFileName);
  // convering into JSON object;
  let data = JSON.parse(rowData);

  // creating an empty array;
  const newData = [];

  // here i am using two for loop like binary search like first compare to all then second compare to all so on;
  for (var i = 0; i < data.length; i++) {
    // saving the key first object key into a;
    var a = data[i]["id"];
    // creating object so i can insert into newly created array;
    var object = { [a]: [data[i]] };
    // inserting first object into array with key;
    newData.push(object);
    // Here i am saving object in array so i can delete id property from it;
    var idObjDel = newData[i][Object.keys(newData[i])][0];
    // before deleting checking idObjDel is exist or not;
    if (idObjDel) {
      // deleting the id;
      delete idObjDel.id;
    }

    // this loop is use to iterate and compare first to all and reap again
    for (var j = i + 1; j < data.length; j++) {
      // saving id into vaiable to compare;
      var b = data[j]["id"];
      // checking first id of an object is matching or not
      if (a === b) {
        var bb = data[j];
        // deleting the first id who id is unique;
        delete bb.id;
        // pushing data into newData arraya;
        newData[i][a].push(bb);
        // deleting the first value which added to array;
        data.splice(j, 1);
        // repeating array so value will not reapead you will understand what i mean when you delete this j = j-1
        j = j - 1;
      }
    }
  }
  // loging the value to check the value in console
  console.dir(newData, { depth: null });
  console.log(process.argv[3]);
  if (!process.argv[3]) {
    console.log("please provide the output filename");
  } else {
    var json = JSON.stringify(newData);
    fs.writeFileSync(process.argv[3], json, "utf8");
  }
}
