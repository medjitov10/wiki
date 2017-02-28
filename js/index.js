$(document).ready(function(){
    $("#search").click(function(){
       var valuetext=$("#searchtext").val();
      $("#searchtext").val('');
       var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+valuetext+"&format=json&callback=?";
      $.ajax({
        type:"Get",
        url:url,
        async:false,
        dataType:"json",
        success:function(json){
          var html="";
          for(i=0;i<json[1].length;i++){
              html+="<div id='test'><a href=" + json[3][i] + " target='_blank> <div class='results well'><h1>"+json[1][i]+"</h1><p style='font-size: 15px'>" + json[2][i] + "</p></div></a></div>";
            
          }
          $("#output").html(html);
        },
        error: function(errorMessage){
          alert("Error")
        }
      })
    })     
  *$("#searchtext").keypress(function(e){
    if(e.which==13){
     $("#search").click();
   }
  });
})