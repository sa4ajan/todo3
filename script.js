var token = "Bearer" +  " " + localStorage.name;
//document.getElementById('dambro').innerHTML = token;// localStorage.getItem('name');
function back(){
	  window.location.href ='file:///F:/Saajan/Intern/Todo/form2.html';
}


   


   $("#register").submit(function(event){
      event.preventDefault();
      

      var data = {
      				title:$("#tittle").val(),
      				date:$("#date").val(),
      				description:$("#description").val()
      				
      }
       
   $.ajax({
            url: "http://localhost:8000/api/todo",
            type: "POST",
            data:data,
            headers: {"Authorization": token},
            success:function(result){
                alert("Successfully Add!");
                console.log(result);
                $("#tittle").val(''),
                $("#date").val(''),
                $("#description").val('')
            },
            error:function(xhr,status,error){
            	alert("error");
                console.log(error);
            }
        });
});


$(document).ready(function(){
	$("#back").click(function(){
		 window.location.href ='file:///F:/Saajan/Intern/Todo/form2.html';
	});
});

$("#register").validate();
