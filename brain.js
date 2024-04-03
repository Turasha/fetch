//this
//1. default binding

function test(){
    console.log(this);
}


test() //window



// 2. implicite binding rodesac funqcias vidzakhebt obiqtidan 
let users={
    name:'anna',
    printname: function() {
        console.log(this.name);
    }
}


users.printname()

// 3. explicit binding call, apply, bind

let user1={
    name: 'nini',
    printname: function(){
        console.log(this.name);
    }
}

let user2={
    name:"lasha"

}

let user3={
    name:'beka'
}

// user1.printname() aq daibechda nini 
// user1.printname.call(user3) // aq daibechdeba beka

let printnamefnc2=user1.printname.bind(user2) //binding

printnamefnc2()

//--
let acordeon=document.querySelectorAll('.conteiner-acordion')
acordeon.forEach(function(el){
    el.addEventListener('click', function(){
       this.classList.toggle('active')
    })
})