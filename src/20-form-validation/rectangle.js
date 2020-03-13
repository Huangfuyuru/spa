
$(function(){
  //get dom
  var $width  = $('#width'),
      $height = $('#height');
  var $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
  $btnCal.click(function(){
    //validate if error return
    if(!validate('#width') || !validate('#height')) return;

    var rect = new Rectangle($width.val(),$height.val());
  
    $perimeter.val(rect.perimeter());
    $area.val(rect.area());
  });

  $width.focusout(function(){
    //if(!validate(width)) select this;
    if(!validate('#width')){
      $width.select()
    } 
  });

  $height.focusout(function(){
    if(!validate('#$height')){
      $height.select();
    }
  });

  function validate(field){
    //var DOM error message
    var $data = $(field),
        $msg = $(field + '-vm');
    //validate null
    if($data.val() === ''){
      $msg.html('不能为空!');
      $data.select();
      return false;
    }

    //validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值!');
      $data.select();
      return false;
    }
    //validate>0
    if(Number($data.val())<0){
      $msg.html('必须大于零');
      $data.select();
      return false;
    }
    //prompt error message
    // return false
    $msg.html("");
    return true;
  }
});
