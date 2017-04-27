var globalIndex=2;
var projects={
    image:['image/map.JPG','image/game.JPG','image/webOptim.JPG','image/test.JPG'],
    name:['Museum Tour Map','Arcade Game Clone','Web Optimization','Feed Reader Testing'],
    link:['https://jingyiwang1209.github.io/MuseumTourMap/','https://jingyiwang1209.github.io/ArcadeGame/','https://jingyiwang1209.github.io/WebOptimization/','https://github.com/jingyiwang1209/FeedReaderTesting/blob/master/jasmine/spec/feedreader.js'],
    description:['San Francisco museum tour map using APIs, knockout.js and ES6','Classic arcade game clone using HTML5 Canvas','Load pages faster', 'Feed read testing using Jasmine'],
};

projects.display=function(){
    var projectContainer=$('.projectContainer');
    for(var i=0;i<projects.image.length;i++){
        var imgSrc=projects.image[i];
        var name=projects.name[i];
        var href=projects.link[i];
        var description=projects.description[i];
        var innerHTML='<img class="projectImage" src='+imgSrc+' alt="project image"><p class="projectName">'+name+
        '</p><div class="projectDescription"><a target="_blank" href="'+
        href+'"><p>'+description+'</p></a></div>';
        var projectItem=$('<div class="projectItem"></div>');
        projectItem.append(innerHTML);
        projectContainer.append(projectItem);
    }
};
projects.display();

var recommendations={
  people:[
    {
       name:"Keiko Tamura",
       src:'keiko.jpg',
       title:"Senior Project Manager",
       say:"Her <span class='inlineText'>calm</span>, <span class='inlineText'>patient</span> manner was a great help to me when my frustration was at an all-time high. Her knowledge of the translation and her <span class='inlineText'>remarkable problem-solving abilities</span> are very exceptional.",
    },

    {
       name:"Yuko Miyata",
       src:'ceo.jpg',
       title:"Owner and CEO of Satellite Station, Inc",
       say:"She is a very capable tri-lingual who conducts Japanese and English at business level together with her native Chinese language. She is a <span class='inlineText'>hard worker</span> and a <span class='inlineText'>capable project manager</span> for our localization/translation projects. <span class='inlineText'>Good teamworker</span>.",
    },


    {
       name:"Homer Johnstone",
       src:'homer.jpg',
       title:"Distinguished Adjunct Professor",
       say:"Jing is flexible, a very <span class='inlineText'>fast learner</span>, and is clearly capable of and ready for additional challenge and responsibility. Were I looking for someone who could hit the ground running and produce in a <span class='inlineText'>team environment</span>, I would choose her. If given the opportunity, I believe Jing will perform superbly, contribute meaningfully and meet or exceed your expectations. I recommend her  without reservation.",
    },

    {
       name:"Akmal Siddiqi",
       src:'akmal.jpg',
       title:"IT Project Manager",
       say:"Jingyi is an outstanding character and a talented professional. I had the opportunity to take several classes with her at the Golden Gate University, and had the privilege to work on several projects at the university with her. She is <span class='inlineText'>passionate</span>, <span class='inlineText'>self-starter</span>, and <span class='inlineText'>highly organized</span>. In addition, she is very adept at data analysis. I strongly recommend her for any organization that seeks her skills.",
    },
    {
       name:"Prithvi Mattur",
       src:'prithvi.jpg',
       title:"Business Analyst",
       say:"Jing is warm and witty, and most of all extremely knowledgeable. Jing can grasp ideas in a holistic manner and still <span class='inlineText'>pay attention to minor details</span>. Jing has a well-deserved reputation as someone who is diligent and personable – two qualities that define her completely. I worked with Jing in more than two academic projects. As someone who is a <span class='inlineText'>creative thinker</span> and possesses a <span class='inlineText'>can-do attitude</span>, Jing is a <span class='inlineText'>pleasure to work with</span>. I recommend her highly for any project management position for any organization that chooses to take benefit from her diverse skills.",
    }
  ]
};

var peopleImage=document.querySelectorAll(".imageList img");
var peopleTitle=document.querySelectorAll(".peopleBio p");
var peopleWords=document.querySelectorAll(".peopleWords p");
var prev=document.getElementsByClassName('prev')[0];
var next=document.getElementsByClassName('next')[0];

for(var i=0;i<peopleImage.length;i++){
        peopleImage[i].index=i;
        peopleImage[i].addEventListener('click',function(){
            globalProcess(this.index);
        });

}

function globalProcess(ind){
        for(var j=0;j<peopleImage.length;j++){
          peopleImage[j].classList.remove('active');
        }

        if(ind<0){
            ind=peopleImage.length-1;
        }

        if(ind>peopleImage.length-1){
            ind=0;
        }
        peopleImage[ind].classList.add('active');
        peopleTitle[0].innerHTML=recommendations.people[ind].name+'<br>'+
        recommendations.people[ind].title;
        peopleWords[0].innerHTML=recommendations.people[ind].say;
        globalIndex=ind;
}

prev.addEventListener('click',function(){
    globalIndex=globalIndex-1;
    globalProcess(globalIndex);
});

next.addEventListener('click',function(){
    globalIndex=globalIndex+1;
    globalProcess(globalIndex);
});

document.addEventListener('keyup',function(e){
     if(e.keyCode==37){
        globalIndex=globalIndex-1;
        globalProcess(globalIndex);
     }
     if(e.keyCode==39){
        globalIndex=globalIndex+1;
        globalProcess(globalIndex);
     }
});

