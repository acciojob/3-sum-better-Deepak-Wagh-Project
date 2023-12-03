function threeSum(arr, target) {
	let min=Infinity;
	let nearestSum=0;
	for(let i=0;i<arr.length-2;i++){
		for(let j=i;j<arr.length-1;j++){
			for(let k=j;k<arr.length;k++)
				let sum=arr[i]+arr[j]+arr[k];
			   if(Math.abs(target-sum)<min){ 
				   min=Math.abs(target-sum);
				   nearestSum=sum;
}
		}
		return nearestSum;
	}
// write your code here
  
}

module.exports = threeSum;
