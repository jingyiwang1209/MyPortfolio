
var projects={
    image:['map.JPG','game.JPG','webOptim.JPG','test.JPG'],
    name:['Museum Tour Map','Arcade Game Clone','Web Optimization','Feed Reader Testing'],
    link:['https://github.com/jingyiwang1209/MuseumTourMap','https://github.com/jingyiwang1209/MuseumTourMap','https://github.com/jingyiwang1209/MuseumTourMap','https://github.com/jingyiwang1209/MuseumTourMap'],
    description:['San Francisco museum tour map using APIs','Classic arcade game clone using HTML5 Canvas','Load pages faster', 'Feed read testing using Jasmine'],
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
       name:"Homer Johnstone",
       src:'homer.jpg',
       title:"Distinguished Adjunct Professor",
       say:"Jing is flexible, a very <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>fast learner</span>, and is clearly capable of and ready for additional challenge and responsibility. Were I looking for someone who could hit the ground running and produce in a <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>team environment</span>, I would choose her. If given the opportunity, I believe Jing will perform superbly, contribute meaningfully and meet or exceed your expectations. I recommend her  without reservation.",
    },

    {
       name:"Yuko Miyata",
       src:'ceo.jpg',
       title:"Owner and CEO of Satellite Station, Inc",
       say:"She is a very capable tri-lingual who conducts Japanese and English at business level together with her native Chinese language. She is a <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>hard worker</span> and a <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>capable project manager</span> for our localization/translation projects. <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>Good teamworker</span>.",
    },
    {
       name:"Keiko Tamura",
       src:'keiko.jpg',
       title:"Senior Project Manager",
       say:"Her <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>calm</span>, <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>patient</span> manner was a great help to me when my frustration was at an all-time high. Her knowledge of the translation and her <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>remarkable problem-solving abilities</span> are very exceptional.",
    },

    {
       name:"Akmal Siddiqi",
       src:'akmal.jpg',
       title:"IT Project Manager",
       say:"Jingyi is an outstanding character and a talented professional. I had the opportunity to take several classes with her at the Golden Gate University, and had the privilege to work on several projects at the university with her. She is <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>passionate</span>, <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>self-starter</span>, and <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>highly organized</span>. In addition, she is very adept at data analysis. I strongly recommend her for any organization that seeks her skills.",
    },
    {
       name:"Prithvi Mattur",
       src:'prithvi.jpg',
       title:"Business Analyst",
       say:"Jing is warm and witty, and most of all extremely knowledgeable. Jing can grasp ideas in a holistic manner and still <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>pay attention to minor details</span>. Jing has a well-deserved reputation as someone who is diligent and personable – two qualities that define her completely. I worked with Jing in more than two academic projects. As someone who is a <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>creative thinker</span> and possesses a <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>can-do attitude</span>, Jing is a <span style='color:#000;font-weight: bold;font-size:1.5rem;text-shadow: 1px 1px 2px rgba(0,0,0,0.4)'>pleasure to work with</span>. I recommend her highly for any project management position for any organization that chooses to take benefit from her diverse skills.",
    }
  ]
};

recommendations.display=function(){
    var recommendationContainer=$(".recommendationContainer");
    var innerHTML='';
    for(var i=0;i<recommendations.people.length;i++){
        innerHTML+='<div class="recomendationItem"><div class="peopleBio"><img src="'+recommendations.people[i].src+'"><p>'+recommendations.people[i].name+'<br>'+
        recommendations.people[i].title+'</p></div><div class="peopleWords"><p>'+recommendations.people[i].say+'</p></div>';
    }
    recommendationContainer.append(innerHTML);

};
recommendations.display();