/* function for sliding cards*/

function sideScrollCards(elementWrapper, cardCalss, direction, increment,animationFunction) {
    increment = increment || 1;
    var slideIndex = elementWrapper + 'Index';
    window[slideIndex] = (typeof window[slideIndex] != 'undefined') ? window[slideIndex] : 0;
    var cardCalssList = document.getElementsByClassName(cardCalss);
    var firstCard = cardCalssList[0];
    var wrapperDiv = document.getElementById(elementWrapper);
    wrapperDiv.style.transition = 'transform 0.6s ease';
    var cardNos = cardCalssList.length;
    var cardWidth = firstCard.offsetWidth;
    var distanceToTransalte = 0;
    var wrapperWidth = wrapperDiv.offsetWidth;
    var cardStyle =  firstCard.currentStyle || window.getComputedStyle(firstCard);
    var wrapperStyle =  wrapperDiv.currentStyle || window.getComputedStyle(wrapperDiv);
    var cardOuterWidth = cardWidth + parseFloat(cardStyle.marginRight) + parseFloat(cardStyle.marginLeft);
    var wrapperInnerWidth = wrapperWidth - (parseFloat(wrapperStyle.paddingRight) + parseFloat(wrapperStyle.paddingLeft));
    var totalWidthOfCards = cardOuterWidth*cardNos;
    if (direction === 'prev') {
        window[slideIndex] = (window[slideIndex] > 0) ? window[slideIndex] - increment : 0;
    } else if (direction === 'next') {
        window[slideIndex] = (window[slideIndex] <= cardNos) ? window[slideIndex] + increment : 0;
    }
    console.log('fnindex : '  +window[slideIndex]);
    //window[slideIndex] = (window[slideIndex] > (cardNos - 1)) ? 0 : window[slideIndex];
    distanceToTransalte = window[slideIndex] * cardOuterWidth;
    if(distanceToTransalte > ((totalWidthOfCards - wrapperInnerWidth) + (cardOuterWidth*increment))){
        window[slideIndex] = 0;
        distanceToTransalte = 0;
    }else if(distanceToTransalte > (totalWidthOfCards - wrapperInnerWidth)){
        distanceToTransalte = totalWidthOfCards - wrapperInnerWidth;
        window[slideIndex] = cardNos;
    }
    distanceToTransalte = (distanceToTransalte === 0) ? 0 : '-' + distanceToTransalte;
    wrapperDiv.style.transform = 'translateX(' + distanceToTransalte + 'px)';
    if (animationFunction) {
        animationFunction();
    }
}



$(".dropRemove").hide();
$(".dropContent").hide();

$(document).ready(function () {
    $(".dropBox").on('click', function (e) {
        e.preventDefault();
        $(".dropContent").slideUp(300);
        var dropButton = $(this);
        if (dropButton.find(".dropAdd").is(":hidden")) {
            dropButton.find(".dropRemove").hide();
            dropButton.find(".dropAdd").show();
        } else {
            $(".dropAdd").show();
            $(".dropRemove").hide();
            dropButton.closest(".dropList").find(".dropContent").slideDown(300);
            dropButton.find(".dropRemove").show();
            dropButton.find(".dropAdd").hide();
        }
    });
});

   /*Click Function*/
   $(document).ready(function () {
    $(".menuIcon").on('click', function (e) {
     e.preventDefault();
     $("#menuIcon").toggleClass("menuIconIntro");
     $(".menuIconBar").toggleClass("menuIconBarInto");
     $(".menuBarOne").toggleClass("menuBarOneIntro");
     $(".menuBarTwo").toggleClass("menuBarTwoIntro");
     $(".menuBarCenter").toggleClass("menuBarCenterIntro");
     $(".menuSection").toggleClass("menuSectionIntro");
     $(".subMenu").slideUp(300);
     $("body").toggleClass("bodyIntro");
    });
    $(".menuCloseBg").on('click', function (e) {
     e.preventDefault();
     $(".menuCloseBg").hide();
     $(".subMenuDiv").removeClass("subMenuDivIntro");
    });
    $(".mainMenuLink").on('click', function (e) {
        $(".subMenu").slideUp(300);
     e.preventDefault();
     var elem = $(this);;
     elem.closest(".menuList").find(".subMenu").slideDown(300);

    });
   });

function tabBar(parentContainer, index, event) {
    event.preventDefault();
    $(parentContainer + ' .tabMenu').removeClass("activeTabMenu");
    const elem = $(event.target);
    elem.addClass("activeTabMenu");
    let scrollValue = parseInt(index) * 100;
    if (scrollValue > 0) {
        scrollValue = '-' + scrollValue;
    }
    const tabBarWrapper = $(parentContainer + " .tabBarWrapper");
    tabBarWrapper.css("transition", 'all .5s');
    tabBarWrapper.css("transform", 'translateX(' + scrollValue + '%)');
    const tabContainers = $(parentContainer+' .tabBarSlide');
    tabContainers.css("height", '0');
    tabContainers.css("opacity", '0');
    const activeTabContainer = $(parentContainer+' .tabBarSlide:nth-of-type(' + (parseInt(index) + 1) + ')');
    activeTabContainer.css("height", 'auto');
    activeTabContainer.css("opacity", '1');
}

/*onScroll Function*/
window.onscroll = function () {
    var headerTopDiv = document.getElementById('headerSection');
    if (window.pageYOffset >= 10) {
        headerTopDiv.classList.add("headerIntro");
        headerTopDiv.classList.remove("headerMain");
    } else {
        headerTopDiv.classList.remove("headerIntro");
        headerTopDiv.classList.add("headerMain");
    }
};

//copyrightyear


let year  = new Date().getFullYear();


document.querySelector('.currentYear').textContent=year