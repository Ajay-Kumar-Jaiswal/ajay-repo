let string="";
let btns=document.querySelectorAll('.btn')
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string.replace(/x/g,'*').replace(/÷/g,'/')).toString()
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML.charCodeAt(0) === 0x232B){
            if(string.length>0){
                string=string.slice(0,-1);
                document.querySelector('input').value=string;
            }
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
