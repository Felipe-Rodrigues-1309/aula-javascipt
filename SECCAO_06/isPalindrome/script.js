function isPalindrome(){
    let palavra = (prompt("digite uma palavra para verificar se ela e um Palindrome"));
    let reverso = palavra.split("").reverse().join("");
    if(reverso === palavra){
        alert("essa palavra é um Palindrome");
    }else{
        alert("essa palavra nao é um Palindrome");
    }
}

isPalindrome();