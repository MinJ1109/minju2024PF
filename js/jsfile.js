$(document).ready(function(){
    pubSlide();
});

function pubSlide(){
    var slideTarget = $(".publContainer ol > li"); 
    var targetCount = slideTarget.length;
    var prevBtn = $(".publContainer > span input:first-child"); 
    var nextBtn = $(".publContainer > span input:last-child");
    var indi = $(".publContainer > span input.indi");

    indi.eq(0).addClass('active'); 

    indi.on('click', function(){
        var targetId = $(this).data('indi');
        var targetIndex = slideTarget.index($('#' + targetId));

        slideTarget.removeClass('active');
        slideTarget.eq(targetIndex).addClass('active');

        updateIndi(targetIndex);
    });

    function updateIndi(targetIndi){
        indi.removeClass('active');
        indi.eq(targetIndi).addClass('active');
    }

    prevBtn.on('click', function(){
        var targetIndex = slideTarget.index($(".publContainer ol > li.active"));
        var prevIndex = (targetIndex === 0) ? targetCount - 1 : targetIndex - 1;

        slideTarget.eq(targetIndex).removeClass('active');
        slideTarget.eq(prevIndex).addClass('active');

        updateIndi(prevIndex);
    });

    nextBtn.on('click', function(){
        var targetIndex = slideTarget.index($(".publContainer ol > li.active"));
        var nextIndex = (targetIndex === targetCount - 1) ? 0 : targetIndex + 1;

        slideTarget.eq(targetIndex).removeClass('active');
        slideTarget.eq(nextIndex).addClass('active');

        updateIndi(nextIndex);
    });
}
