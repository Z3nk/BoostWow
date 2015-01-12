var sliderTime = 5000;

var sliderTicker, slideCount, currentActive;

function startSlider()
{
    
    if($(".home-slider").length > 0)
    {
        
        clearInterval(sliderTicker);
        slideCount = 0;
        currentActive = -1;
        
        $(".home-slider > div").each(function(){
            $(this).css("background-image", "url('" + $(this).attr("data-bg") + "')");
        });
        
        slideCount = $(".home-slider > div").length;
        
        nextSlide(currentActive);

        sliderTicker = setInterval(function(){
            console.log("step");
            nextSlide(currentActive);
        }, sliderTime);
    }
    
}



function nextSlide(current)
{
    
    var next = 0;
    
    $(".home-slider > div.active").removeClass("active");
    
    if(current >= (slideCount - 1))
        next = 0;
    else
        next = current + 1;
    
    currentActive = next;
    
    $(".home-slider > div").eq(next).addClass("active");
    
}