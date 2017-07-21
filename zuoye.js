/**
 * Created by xxx on 17-7-21.
 */
'use strict';
function different(c1,c2){
    var flag=0;
    var col1=(c1+"").split(',');
    var col2=(c2+"").split(',');
    for(var item of col2){
        col1.push(item);
    }
    for(var i=0;i<col1.length;){
        flag=0;
        for(var j=i+1;j<col1.length;){
            if(col1[i]==col1[j]){
                col1.splice(j,1);
                flag=1;
            }
            else{
                j++;
            }
        }
        if(flag==1){
            col1.splice(i,1);
        }
        else{
            i++;
        }
    }

    col1.sort(function (a,b) {
        return a-b;

    })
    return col1;
}

var c1=[1,2,3];
var c2=[100,2,1,10];
console.log(different(c1,c2));
var c3=[1,2,3,4,5];
var c4=[1, [2], [3, [[4]]],[5,6]];
console.log(different(c3,c4));