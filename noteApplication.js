let notes=[];
if(localStorage.getItem("notes")){
    notes=JSON.parse(localStorage.getItem("notes"));
}
function isAccepted(msg, ...keys){
    const value=prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        alert("hatalı tuşlama yaptınız");
        return isAccepted(msg, ...keys);
    }

}

function addNote(){
    const addNotes=prompt("Notunuzu giriniz");
    notes.push(addNotes);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function listNotes(){
    const listNote= notes.map((notes, index) => `${index+1}. ${notes}`).join("\n");
    alert(listNote);
}

function mainMenu(){
    const value=isAccepted("Yapmak iştediğiniz işlemi seciniz:\n1.Notunuzu giriniz\n2.notlarınızı listeleyiniz\n3.çıkış","1","2","3")
    if(value==1){
        return addNote();
    }else if(value==2){
        return listNotes();
    }else{
        alert("Çıkış Yapıldı.")
        return ;
    }
}
mainMenu();