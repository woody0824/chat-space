$(function(){
  function buildHTML(message){
     let a = message.message?`<p class="lower-message__content">${message.message}</p>` :'';
     let b = message.image?`<img class="lower-message__image" src=${message.image} >` :'';
    var html =    
                  `<div class="midlle-content__info">
                  <div class="midlle-content__info__talker">
                  ${message.user_name}
                  </div>
                  <div class="midlle-content__info__date">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="midlle-content__info__comment">
                  ${a}
                  ${b}
                  </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.send-content').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      return false
    })
    .fail(function(){
      alert('error');
    })
  })
})
