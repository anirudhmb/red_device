(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


var device_id
window.onload=function(){
  device_id = "0d97d1f5-2ee3-4c70-860c-e4edcea37015\r\n";
  console.log(device_id.toString());

  console.log("main2 test = "+"abcdef\r\n");


  $(document).ready(function(){
		const url='https://user-red-server.herokuapp.com/user/alloc';
		$('#allocbtn').click(function(e){
			e.preventDefault();
      var adhaar = document.getElementById("adhaartxt").value;

			console.log(adhaar);
			$.ajax({
				url:url,
				type:"POST",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					"adhaar": adhaar,
					"device_id": device_id
				}),
				dataType: "json",
				success:function(result){
          document.getElementById('adhaartxt').value=''
          console.log(result)
        },
				error:function(error){
          document.getElementById('adhaartxt').value=''
					console.log(`Error ${error}`)
				}
			})
		})
  })
}

},{}]},{},[1]);
