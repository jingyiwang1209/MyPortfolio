var Animation = (function() {
    var featuredProject;
    var utripPage;

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    }

    function initialize() {
        featuredProject = document.querySelector(".featuredProject");
        utripPage = document.querySelector(".utripPage");
        window.addEventListener("scroll", function() {
            if (isInViewport(featuredProject)) {
                utripPage.style.display = "block";
                utripPage.classList.add("featuredProjectAnimation");
            }
        });
    }
    return {
        init: function() {
            initialize();
        }
    };
})();