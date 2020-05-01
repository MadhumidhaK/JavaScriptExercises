var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": [
                                {
                                    "id": 6,
                                    "title": "Title 6",
                                    "childrens": []
                               },
                               {
                                "id": 7,
                                "title": "Title 7",
                                "childrens": []
                                }
                             ]
                        }
                   ]
              }
         ]
    }
]



function manipulation(arr, result = []){
    // var result = [];
    let length = arr.length;
    let i = 0;
    while(i < length){
        result.push(arr[i]);
        if(arr[i].childrens.length > 0){
            manipulation(arr[i].childrens, result)
        }
        arr[i].childrens = [];
        i++;
    }
    return result;
}

console.log(manipulation(input))