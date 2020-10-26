// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// // Q 1
let moji = document.getElementById("q1-text").textContent;{
	console.log(moji);
}

// // Q 2

let moji1 = document.getElementById('q2-text');
moji1.textContent = "テキストを変更しました。";


// // Q 3
document.getElementById("q3-text").style.color="red";

// // Q 4 (難)
// // 「for of」を使います。



 let list = document.getElementsByClassName("q4-text");
for (let iro of list){
		iro.style.color = "red";
}

// // Q 5

 let list2 = document.getElementsByClassName("q5-text");
for (let iro1 of list2){
		iro1.style.backgroundColor = "red";
}


