define(["jquery","hbs!templates/contact","backbone","models/Model","marionette"],function($,e,t,a){return t.Marionette.ItemView.extend({template:e,model:null,events:{"click .contact-send":"sendMessage"},initialize:function(e){},onRender:function(){nest.api.core.cleanView(this,".contact-menu")},sendMessage:function(e){e.preventDefault();var t=$("#name").val(),a=$("#email").val(),n=$("#subject").val(),s=$("#message").val();""===t&&$("#fullname-error").after('<small style=color:red;position:relative;left:-200px;  class="name-error">*Please enter your Fullname</small>'),""===a&&$("#email-error").after('<small style=color:red;position:relative;left:-170px;  class="phone-error">*Please enter your email address</small>'),""===s&&$("#message-error").after('<small style=color:red;position:relative;left:-200px;  class="Air-error">*Type message here</small>'),console.log("VALUES ->",t,a,n,s),t&&a&&n&&s?($(".contact-wait").show(),console.log("send message!"),$.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send-template.json",data:{key:"1ZhveFmXFPmbGWpENrJ0yQ",template_name:"nest-contact-us-internal",template_content:[{name:"name",content:t}],message:{from_email:a,to:[{email:"o.edinbus@nestav.com.ng",type:"to"}],merge_vars:[{rcpt:"o.edinbus@nestav.com.ng",vars:[{name:"qname",content:"NestAv"},{name:"name",content:t},{name:"email",content:a},{name:"subject",content:n},{name:"message",content:s}]}],autotext:"true"}}}).done(function(e){$(".contact-wait").hide(),$(".contact-message").show()})):($(".contact-wait").hide(),$(".contact-error").html("Message Successfully sent").show())}})});