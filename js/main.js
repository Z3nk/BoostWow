var currentAccNum = -1;
var EURtoUSD = 1.268;
var promo = 0;
var accOptionsPrice = [40, 10, 50, 70];
var accOptionsName = ['Bronze', 'Silver', 'Gold', 'Platinum'];
var accOptionsRP = [19000, 0, 17000, 32000];
var accOptionsIP = [35000, 20000, 45000, 70000];
var accOptionsWarwick = [0, 0, 1, 1];
var accOptionsTwitch = [0, 0, 1, 1];

var giftOptionsPrice = [8, 15, 25, 45];
var giftOptionsName = [5, 10, 20, 40];

$(document).ready(function(){
    
    //Get starting hash on pageload
    var startHash = window.location.hash;
    
    //If found, let's load it
    /*if(startHash)
    {
        loadPage(startHash);
    }
    //If not, load the defaul page
    else
    {
        loadPage("home");
    }*/
    
    $(".navigation li a[href='" + startHash + "']").parent().addClass("active");
    
    $('.navigation').lavalamp({
        duration: 300,
        setOnClick: true,
        activeObj: ".active"
    });
    
    //Check for hashchange event
    $(window).on('hashchange', function() {
        if(window.location.hash)
        {
            loadPage(window.location.hash);
        }
        else
        {
            loadPage("home");
        }
    });
    
    $(document).on("click", ".faq-element", function(){
        if($(this).hasClass("active"))
        {
            $(this).removeClass("active");
            $(this).find(".faq-a").slideUp(400);
        }
        else
        {
            $(this).addClass("active");
            $(this).find(".faq-a").slideDown(400);
        }
    });

    
    $(document).on('keyup', '.referral-email', function(){
        $(".invoice-email span").text($(".referral-email").val());
    });
    
	
	$(document).on('click', '.payment-order .pPSC', function(){
	});
    
	
	$(document).on('click', '.accounts-packages .package', function(){
        if(!$(this).hasClass("out") && !$(this).hasClass("active"))
        {
			currentAccNum = $(this).index();
            $(".accounts-packages .package.active").removeClass("active");
            $(this).addClass("active");			
			$(".reward-referrals td").eq(0).text(accOptionsName[currentAccNum] + " Account - " + $("#ref-region-input").val().toUpperCase());
			$(".price-eur").text("€ " + accOptionsPrice[currentAccNum]);
			$(".price-usd").text("$ " + Math.round(accOptionsPrice[currentAccNum] * EURtoUSD));
			$(".reward-referrals td").eq(2).text("€ " + accOptionsPrice[currentAccNum]);
			$(".package-price span").text("€ " + accOptionsPrice[currentAccNum]);
			$(".reward-ip td").eq(1).text((accOptionsIP[currentAccNum]));
			$(".reward-rp td").eq(1).text((accOptionsRP[currentAccNum]));
			
			if(currentAccNum == 1)
			{
				$(".promo-code-input").hide();
			}
			else
			{
				$(".promo-code-input").show();
			}
			
			if(accOptionsTwitch[currentAccNum] != 0)
			{
				$(".reward-twitch").slideDown(200);
			}
			else
			{
				$(".reward-twitch").slideUp(200);
			}
			
			if(accOptionsWarwick[currentAccNum] != 0)
			{
				$(".reward-warwick").slideDown(200);
			}
			else
			{
				$(".reward-warwick").slideUp(200);
			}
        }

    });
	
	$(document).on('click', '.gifts-packages .package', function(){
        if(!$(this).hasClass("out") && !$(this).hasClass("active"))
        {
			currentAccNum = $(this).index();
            $(".gifts-packages .package.active").removeClass("active");
            $(this).addClass("active");			
			$(".reward-referrals td").eq(0).text(giftOptionsName[currentAccNum] + " Mystery Gifts - " + $("#ref-region-input").val().toUpperCase());
			$(".price-eur").text("€ " + giftOptionsPrice[currentAccNum]);
			$(".price-usd").text("$ " + Math.round(giftOptionsPrice[currentAccNum] * EURtoUSD));
			$(".reward-referrals td").eq(2).text("€ " + giftOptionsPrice[currentAccNum]);
			$(".package-price span").text("€ " + giftOptionsPrice[currentAccNum]);
			$("#ref-price").text("€ " + giftOptionsPrice[currentAccNum]);
			
			
			//$(".promo-code-input").show();
        }

    });
	
	$(document).on('click', 'section.accounts .step-1', function(){
        if(!$("section.payment").hasClass("visible"))
        {
            if(currentAccNum != -1 && $(".referral-email").val())
            {				
                $("section.payment").slideDown(400, function(){
                    $("section.payment").addClass("visible");
					$("#contentWrapper").mCustomScrollbar("scrollTo", "#container");
                });
            }
            else
            {
                if($(".referral-email").val().length < 1)
                    $(".referral-email").shake();
            }
        }
    });
	
	$(document).on('click', '.payment-accounts .pPaypal', function() {
		var rRegion = $("#ref-region-input").val();
		var rPackage = accOptionsName[currentAccNum];
		var contact = $('.referral-email').val();
		var qty = parseInt($(".account-quantity").text());
		var amount = accOptionsPrice[currentAccNum] * qty;
		
		$('.amount').val(amount);
		$('.custom').val(rRegion+"|"+rPackage+"|"+contact+"|"+qty+"|"+promo);
		$('#paypal').submit();
	});
	
	$(document).on('click', '.payment-gifts .pPaypal', function() {
		var user = $('.gift_user').val();
		var pass = $('.gift_pass').val();
		
		if(user && pass)
		{
			var rRegion = $("#ref-region-input").val();
			var rPackage = giftOptionsName[currentAccNum];
			var contact = $('.referral-email').val();
			
			$('.amount').val(giftOptionsPrice[currentAccNum]);
			$('.custom').val(rRegion+"|"+rPackage+"|"+contact+"|"+user+"|"+pass+"|"+promo);
			$('#paypal_g').submit();
		}
	});
	
	$("body").on("change", ".promo-code", function() {
		
		$.post("inc/promo.php",
		{
			promo: $(this).val()
		},
		function(data) {
			if(data == "Success")
			{
				accOptionsPrice = [30, 10, 45, 65];
				promo = 1;
				var newP = (parseInt($(".account-quantity").text()) * accOptionsPrice[currentAccNum]);
				
				$(".price-eur").text("€ " + newP);
				$(".price-usd").text("$ " + Math.round(newP * EURtoUSD));
				//$(".reward-referrals td").eq(2).text("€ " + newP);
				$(".package-price span").text("€ " + newP);
			}
			else
			{
				promo = 0;
				accOptionsPrice = [35, 10, 50, 70];
				var newP = (parseInt($(".account-quantity").text()) * accOptionsPrice[currentAccNum]);
				
				$(".price-eur").text("€ " + newP);
				$(".price-usd").text("$ " + Math.round(newP * EURtoUSD));
				//$(".reward-referrals td").eq(2).text("€ " + newP);
				$(".package-price span").text("€ " + newP);
			}
		});
	});
    
	$(document).on('submit', '#contactform', function(){
        $(".response").html("");
		if ($(this)
			.data('formstatus') !== 'submitting') {

			var form = $(this),
				formData = form.serialize(),
				formUrl = form.attr('action'),
				formMethod = form.attr('method'),
				responseMsg = $('.response');

			form.data('formstatus', 'submitting');

			responseMsg.hide()
				.addClass('response-waiting')
				.text('Please Wait...')
				.fadeIn(200);

			$.ajax({
				url: formUrl,
				type: formMethod,
				data: formData,
				success: function (data) {
					var responseData = jQuery.parseJSON(data),
						klass = '';

					switch (responseData.status) {
						case 'error':
							klass = 'response-error';
							break;
						case 'success':
							klass = 'response-success';
							break;
					}
					if (responseData.message == "OK") {
						responseMsg.fadeOut(400, function () {
							$('.input')
								.fadeOut(400, function () {
								responseMsg.css({
									marginTop: "10px"
								});
								responseMsg.removeClass('response-waiting')
									.addClass(klass)
									.text(responseMessage)
									.fadeIn(400);
							});
						});
					}
					else {
						responseMsg.fadeOut(400, function () {
							$(this)
								.removeClass('response-waiting')
								.addClass(klass)
								.text(responseData.message)
								.fadeIn(400);
                            $('#contactform').data("formstatus", "");
                            console.log($('#contactform').data('formstatus'));
						});
					}
				}
			});
		}

		return false;
	});
	
	$(document).on('click', '.accss .region-item', function(){
		var $this = $(this);
		$('.region-item.active').removeClass('active');
		$(this).addClass('active');
		$("#ref-region-input").val($this.attr("data-region"));
		$(".accounts-packages .package.active").removeClass("active");
		$(".reward-referrals td").eq(0).text(accOptionsName[currentAccNum] + " Account - " + $("#ref-region-input").val().toUpperCase());
		
		if($this.attr("data-region") == "euw")
		{
		/*	$(".package-b").addClass("out");*/
			$(".package-g").addClass("out");
			$(".package-s").addClass("out");
			$(".package-p").addClass("out");
		}
		else if($this.attr("data-region") == "eune")
		{
	/*		$(".package-g").removeClass("out");*/
			$(".package-b").addClass("out");
			$(".package-g").addClass("out");
			$(".package-s").addClass("out");
			$(".package-p").addClass("out");
		}
		else if($this.attr("data-region") == "na")
		{
			$(".package-b").addClass("out");
			$(".package-g").addClass("out");
			$(".package-s").addClass("out");
			$(".package-p").addClass("out");
		}
	});
	
	$(document).on('click', '.giftss .region-item', function(){
		var $this = $(this);
		$('.region-item.active').removeClass('active');
		$(this).addClass('active');
		$("#ref-region-input").val($this.attr("data-region"));
		$(".gifts-packages .package.active").removeClass("active");
		$(".reward-referrals td").eq(0).text(giftOptionsName[currentAccNum] + " Mystery Gifts - " + $("#ref-region-input").val().toUpperCase());
		
	});
	
	$(document).on('click', '.quantity-button', function(){
		var $this = $(this);
		
		if($(this).hasClass("fa-minus"))
		{
			if(parseInt($(".account-quantity").text()) > 1)
			{
				$(".account-quantity").text(parseInt($(".account-quantity").text()) - 1);
				$(".package-price span").text("€ " + (parseInt($(".account-quantity").text()) * accOptionsPrice[currentAccNum]) );
				$(".price-eur").text("€ " + (parseInt($(".account-quantity").text()) * accOptionsPrice[currentAccNum]) );
				
			}
		}
		
		if($(this).hasClass("fa-plus"))
		{
			$(".account-quantity").text(parseInt($(".account-quantity").text()) + 1);
			$(".package-price span").text("€ " + (parseInt($(".account-quantity").text()) * accOptionsPrice[currentAccNum]) );
			$(".price-eur").text("€ " + (parseInt($(".account-quantity").text()) * accOptionsPrice[currentAccNum]) );
		}
		
	});
});

$(window).load(function(){
    
    //doStuff();
    
});

function loadPage(page)
{
    //if(page.replace("#!/", "") == "accounts")
		//setStockCount();
		
    //$("#contentWrapper").append("<div id='content'/>");
	
    if($("#content").children().length == 0)
    {	
		$("#content").load("pages/"+page.replace("#!/", "")+".html", function(){
			doStuff();
		});
    }
    else
    {
        $("#contentWrapper").mCustomScrollbar("destroy").addClass("oldcontent");
        //$("#content").addClass("old");
        $("#contentWrapper").after("<div id='contentWrapper' class='newcontent'><div id='content'></div></div>");
        $("#contentWrapper.newcontent").css({"position":"absolute", "width":"100%", "left":"0", "top":"100%"});
			
        $("#contentWrapper.newcontent").find("#content").load("pages/"+page.replace("#!/", "")+".html", function(){
            $("#contentWrapper.oldcontent").addClass("byebye");
            $("#contentWrapper.newcontent").animate({top: "0"}, 500);
            setTimeout(function(){
                $("#contentWrapper.oldcontent").remove();
                doStuff();
                $("#contentWrapper.newcontent").removeClass("newcontent");
                $("#contentWrapper").last().mCustomScrollbar();
            }, 500);
        });
    }
}

function doStuff()
{
    $(".testimonials-container").slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
    
    $(".dynamic-bg").each(function(){
        $(this).css("background-image", "url('" + $(this).attr("data-bg") + "')");
    });
    
    $(".data-table").last().dataTable({bFilter: false, bInfo: false});
    
    startSlider();
    
    $("#contentWrapper").last().mCustomScrollbar();
    
}