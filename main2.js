var fs = require('fs');

var device_id
window.onload=function(){
  device_id = fs.readFileSync('./device_id.txt','utf8');
  console.log(device_id.toString());

  console.log("main2 test = "+fs.readFileSync("test.txt","utf-8"));


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
