/**
 * Created by HJB on 2020/2/27.
 */


/*上传图片功能*/
 function changepic() {
   $("#prompt3").css("display", "none");
   var reads = new FileReader();
   f = document.getElementById('imgage1').files[0];
   reads.readAsDataURL(f);
   reads.onload = function(e) {
     document.getElementById('img3').src = this.result;
     $("#img3").css("display", "block");
   };
//我加的
  var formData = new FormData($('form')[0]);
 formData.append('file',$(':file')[0].files[0]);
 console.log(formData);
 $.ajax({
  url:'./birdFile.php',
  type: 'POST',
  data: formData,
  contentType: false,
  processData: false,
  success:function(data){
  $("#imgUrl").val(data);
  //var srcPath = data;
  //console.log();
  //
  }
 })
 //结束
 }

 /*上传文件*/
 function getTextPath(obj) {
   var files = obj.files;
   var name = "";
   for (var i = 0; i < files.length; i++) {
    name += obj.files[i].name;
     if (i < files.length - 1) {
       name += ',';
     }
   }
   $("#filePath").val(name);
 }

/*ajax函数,add*/
$("#tijiao").click(function(){
  var xm2 = document.getElementById("name").value;
  var xm3 = document.getElementById("mu").value;
  var xm4 = document.getElementById("ke").value;
  //var xm5=document.getElementById("imgage1").files[0];
  var xm5 = document.getElementById("imgUrl").value;
  console.log(xm5);
   var sendData = {"name": $("#name").val(), "mu": $("#mu").val(),"ke":$("#ke").val(),"imgage1":xm5}
    $.ajax({
      url: "admin-addbird.php",
      type: "POST",
      data: sendData,
      success: function (data) {

         if(data==1){
          //成功
         }
         if (data == 2) {
			//发生错误
        }
      }

    })

})
