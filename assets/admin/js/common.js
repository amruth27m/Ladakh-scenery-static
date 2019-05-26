

function isNumber(evt)
{
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
  {
    return false;
  }
  return true;
}

function isFloat(evt)
{
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if(charCode == 46){ return true; }
  if (charCode > 31 && (charCode < 48 || charCode > 57))
  {
    return false;
  }
  return true;
}

  $('#pwd-forgot-btn').click(function(){
  $.ajax({
      url: baseUrl+"account/recover_password", 
      type: 'post',
      dataType: 'json',
      data: $('#frmForgotPwd').serialize(),
      crossDomain: true,
      beforeSend: function(){$('input').css('border','1px solid #ccc');},
      success: function(response){
        if(!response.success)
        {
          $('#frmForgotPwd .error').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>'+response.msg+'</div>');
          $('#frmForgotPwd .error').show();
           $.each(response.errorList, function(i, item) {
          $('#frmForgotPwd #'+i).css('border','1px solid #ff0000');
       });
      }
        else
        {
          $('#frmForgotPwd .error').hide();
          $('#frmForgotPwd .error').html('');
          $('#frmForgotPwd .success').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>'+response.msg+'</div>');
          $('.success').show();
          $('#frmForgotPwd #email').val('');
          }
      },
    }); 
  return false;
 });
 
 
 $('#pwd-reset-btn').click(function(){
  $.ajax({
      url: baseUrl+"account/reset_password", 
      type: 'post',
      dataType: 'json',
      data: $('#frmChangePwd').serialize(),
      crossDomain: true,
      beforeSend: function(){$('input').css('border','1px solid #ccc');},
      success: function(response){ 
        if(!response.success)
        {
          $('#frmChangePwd .error').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>'+response.msg+'</div>');
          $('#frmChangePwd .error').show();
           $.each(response.errorList, function(i, item) {
          $('#'+i).css('border','1px solid #ff0000');
       });
           
        }
        else
        {
          alert(response.msg);
          $('#frmChangePwd .error').hide();
          $('#frmChangePwd .error').html('');
          $('#frmChangePwd .success').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>'+response.msg+'</div>');
          window.location.reload();
        }
      },
    }); 
  return false;
 });
 
 $('#change-pwd-btn').click(function(){
  $.ajax({
      url: baseUrl+"account/changePassword", 
      type: 'post',
      dataType: 'json',
      data: $('#changePWD').serialize(),
      crossDomain: true,
      beforeSend: function(){$('#changePWD input').css('border','1px solid #ccc');},
      success: function(response){ 
        if(!response.success)
        {
          $('#changePWD .error').html('<div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>'+response.msg+'</div>');
          $('#changePWD .error').show();
           $.each(response.errorList, function(i, item) {
          $('#'+i).css('border','1px solid #ff0000');
       });
           
        }
        else
        {
          $('#changePWD .error').hide();
          $('#changePWD .error').html('');
          $('#changePWD .success').html('<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>'+response.msg+'</div>');
        }
      },
    }); 
  return false;
 });
 