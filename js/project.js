var Project = (function() {
    function loadProjects() {

        projectContainer = document.getElementsByClassName("projectContainer")[0];

        for (var i = 0; i < projects.image.length; i++) {
            var projectItem = document.createElement('div');
            projectItem.className='projectItem';
            var imgSrc = projects.image[i];
            var name = projects.name[i];
            var href = projects.link[i];
            var description = projects.description[i];
            var innerHTML =
                '<img class="projectImage" src=' +
                imgSrc +
                ' alt="project image"><p class="projectName">' +
                name +
                '</p><div class="projectDescription"><a target="_blank" href="' +
                href +
                '"><p>' +
                description +
                "</p></a></div>";

            projectItem.innerHTML = innerHTML;
            projectContainer.append(projectItem);
        }
    }

    return {
        init: loadProjects
    };

    var projectContainer;

})();