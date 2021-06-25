var x;

function ran()
{
    x=Math.floor(Math.random()*16);

}
var arr=["red","red","blue","blue","green","green","yellow","yellow","brown","brown","black","black","darkgray","darkgray","aqua","aqua"];
var arr1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var colour=[];
var res=[],score=0;
var i=15;
var match=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("s").innerText="Score :"+score;
var count=0;
document.getElementById("c").innerText="No. of attempts : "+count;


while(i>=0)
{
    ran();

    while(arr1[x]!=0)
    {
        ran();

    }
    arr1[x]=1;
    colour.push(arr[x]);
    i--;
}

i=15;
while(i>=0)
{
    document.getElementById("a"+(i+1).toString()).style.backgroundColor=colour[i];
    i--;
}

function result()
{
    if(res.length==2&&res[0]!=res[1])
    {
        if(colour[res[0]]==colour[res[1]])
        {score++;
            match[res[0]]=1;match[res[1]]=1;
        }
        else
        {
            document.getElementById("i"+(res[0]+1).toString()).style.display="block";
            document.getElementById("i"+(res[1]+1).toString()).style.display="block";
        }
        res=[];
        count++;
        document.getElementById("s").innerText="Score : "+score;
        document.getElementById("c").innerText="No. of attempts : "+(count);
    }
    
}

document.querySelector("#a1").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=0))&&match[0]==0)
    {document.getElementById("i1").style.display="none";
    res.push(0);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a2").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=1))&&match[1]==0)
    {document.getElementById("i2").style.display="none";
    res.push(1);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a3").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=2))&&match[2]==0)
    {document.getElementById("i3").style.display="none";
    res.push(2);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a4").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=3))&&match[3]==0)
    {document.getElementById("i4").style.display="none";
    res.push(3);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a5").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=4))&&match[4]==0)
    {document.getElementById("i5").style.display="none";
    res.push(4);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a6").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=5))&&match[5]==0)
    {document.getElementById("i6").style.display="none";
    res.push(5);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a7").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=6))&&match[6]==0)
    {document.getElementById("i7").style.display="none";
    res.push(6);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a8").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=7))&&match[7]==0)
    {document.getElementById("i8").style.display="none";
    res.push(7);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a9").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=8))&&match[8]==0)
    {document.getElementById("i9").style.display="none";
    res.push(8);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a10").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=9))&&match[9]==0)
    {document.getElementById("i10").style.display="none";
    res.push(9);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a11").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=10))&&match[10]==0)
    {document.getElementById("i11").style.display="none";
    res.push(10);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a12").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=11))&&match[11]==0)
    {document.getElementById("i12").style.display="none";
    res.push(11);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a13").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=12))&&match[12]==0)
    {document.getElementById("i13").style.display="none";
    res.push(12);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a14").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=13))&&match[13]==0)
    {document.getElementById("i14").style.display="none";
    res.push(13);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a15").addEventListener("click",function(){

    
    if((res.length==0||(res.length==1&&res[0]!=14))&&match[14]==0)
    {document.getElementById("i15").style.display="none";
    res.push(14);
    setTimeout(function(){ result(); }, 1000);}
});

document.querySelector("#a16").addEventListener("click",function(){

   
    if((res.length==0||(res.length==1&&res[0]!=15))&&match[15]==0)
    {document.getElementById("i16").style.display="none";
    res.push(15);
    setTimeout(function(){ result(); }, 1000);}
});
