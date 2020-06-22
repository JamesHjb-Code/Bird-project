/**
 * Created by HJB on 2020/3/14.
 */

//查询数据
$(()=>{
  console.log(0);
  $.get("../../php/user/user-getbird.php").then(resData=>{
    console.log(1);
    var html="";
    for(var i=0;i<resData.length;i++){
      var a=resData[i];
      //1代表是雁形目
      if(a.type==1){
        console.log(a.name);
        html+=`
      <div class="img-box">
              <div class="img-small">
                <div class="top-img">
                  <img src="${a.Image}" width="100%" height="200">
                </div>
                <div class="bottom-font">
                  <div class="birdname">
                    <span>${a.name}</span>
                  </div>
                  <div class="bird_mu">
                    <span>${a.mu}</span>
                  </div>
                  <div class="bird_ke">
                    <span>${a.ke}</span>
                  </div>
                </div>
              </div>
            </div>
			`;
      }}
    $(".right-img").html(html);
  })
});
