var arr=[
  {
  a:[{id:1,count:1}],
  b:{id:1,type:1}
  },
  {
  a:[{id:1,count:0}],
  b:{id:2,type:1}
  },
  {
  a:[{id:1,count:1}],
  b:{id:1,type:2}
  },
  {
  a:[{id:1,count:1}],
  b:{id:1,type:2}
  }
]
var arr2 = [];
for (let index = 0; index < arr.length; index++) {
  var obj = {};
  obj.b = arr[index].b;
  obj.count = arr[index].a[0].count;
  arr2.push(obj);
}
console.log(arr2)