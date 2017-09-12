/*
 *规定标准的key值为划分数组的最左元素的值
 *规订首尾指针i,j方向先为j--，当a[j]<key时，a[i]=a[j]
  进行i++，当a[i]>key时，a[j]=a[i];
  当i=j a[i]=key
 */
function sort(array){
	let count=0;
	function quikSort(left, right){
		count++;
		let key = array[left];
		let i = left;
		let j = right;
		if(i<j){
			while(i<j){
				while(i<j&&key<=array[j]){
					j--;
				}
				array[i] = array[j];
				while(i<j&&key>=array[i]){
					i++;
				}
				array[j] = array[i];
			}
			array[i] = key;
			console.log(array);
			quikSort(left, i-1);
			quikSort(i+1, right);
		}else{
			return null;
		}
	}
	quikSort(0, array.length-1);
	console.log(count);
	return array;
}
let test = [6,1,2,7,9,3,4,5,8,10];
let result = sort(test);
console.log(result);