var count=prompt("enter length of fibonacci Series to be printed")
var a=0,b=1;
if(count==1)
{
	console.log(a);
}
else if(count==2)
{
	console.log(a)
	console.log(b)
}
else if(count>2)
{	console.log(a)
	console.log(b)
 	for(i=2;i<count;i++)
	{
	sum=a+b;
	console.log(sum);
	a=b;
	b=sum;
	}
}
else
{
	console.log("Invalid input")
}