var projects = {
  image: [
    "image/project.png",
    "image/project.png",
    "image/project.png",
    "image/project.png",
    "image/project.png",
    "image/project.png",
    "image/project.png",
    "image/project.png"
  ],
  name: [
    "Logs Analysis",
    "We Love Coding",
    "Survey Dog",
    "Museum Tour Map",
    "Arcade Game Clone",
    "Web Optimization",
    "Feed Reader Testing",
    "Movie Trailer"
  ],
  link: [
    "https://github.com/jingyiwang1209/news",
    "http://ec2-52-37-81-230.us-west-2.compute.amazonaws.com/",
    "https://warm-waters-76821.herokuapp.com/",
    "https://jingyiwang1209.github.io/MuseumTourMap/",
    "https://jingyiwang1209.github.io/ArcadeGame/",
    "https://jingyiwang1209.github.io/WebOptimization/",
    "https://github.com/jingyiwang1209/FeedReaderTesting/blob/master/jasmine/spec/feedreader.js",
    "https://github.com/jingyiwang1209/MovieTrailerWebsite"
  ],
  description: [
    "Reporting tool using Psycopg2",
    "Coding book sharing website using JQuery, Python Flask, PostgreSQL, AWS",
    "Survey creating and feedback collecting website using React.JS, Express.JS, multiple APIs, MongoDB",
    "Museum tour map using knockout.JS, Google APIs, Wiki APIs",
    "Classic arcade game clone using HTML5 Canvas",
    "Load pages faster",
    "Feed read testing using Jasmine",
    "Movie Trailer Website using Python OOP"
  ]
};

var recommendations = {
  people: [
    {
      name: "Jacky Cao",
      src: "jacky.jpg",
      title: "Devops Engineer / Utrip Project Team Lead",
      say:
        "I have been working with Jing in a start up project. Jing has always been a <span class='inlineText'>self-starter</span>, a <span class='inlineText'>collaborative developer</span>. She can learn things and apply the knowledge she learns in the project very fast. She also actively discusses business logics and technical challenges during our meetings. It is a great pleasure to work with her."
    },

    {
      name: "Hejie Fan",
      src: "hejie.jpg",
      title: "Senior Product Engineer at Microsoft / Utrip Marketing Lead",
      say:
        "I have been working with Jing on a startup project for about a year. Jing is in charge of the software for our project.  Jing has done phenomenal job not only in <span class='inlineText'>coding</span>, but also in <span class='inlineText'>user scenario simulation</span>, as well as marketing aspects. It has been a great pleasure working with Jing in the past year."
    },

    {
      name: "Sean Wang",
      src: "sean.jpg",
      title: "Senior Backend Engineer / Utrip Backend Engineer",
      say:
        "Jing has worked very hard on current project, and she is very <span class='inlineText'>self driven and motivated</span> in her work. She is always <span class='inlineText'>willing to learn new technology</span> and trying to apply them into the project. She is a great asset to the team, and I'm very glad to work with her."
    },

    {
      name: "Homer Johnstone",
      src: "homer.jpg",
      title: "Distinguished Adjunct Professor",
      say:
        "Jing is flexible, a very <span class='inlineText'>fast learner</span>, and is clearly capable of and ready for additional challenge and responsibility. Were I looking for someone who could hit the ground running and produce in a <span class='inlineText'>team environment</span>, I would choose her. If given the opportunity, I believe Jing will perform superbly, contribute meaningfully and meet or exceed your expectations. I recommend her  without reservation."
    },

    {
      name: "Prithvi Mattur",
      src: "prithvi.jpg",
      title: "Senior Analyst",
      say:
       "Jing is warm and witty, and most of all extremely knowledgeable. Jing can grasp ideas in a holistic manner and still <span class='inlineText'>pay attention to minor details</span>. Jing has a well-deserved reputation as someone who is diligent and personable – two qualities that define her completely. I worked with Jing in more than two academic projects. As someone who is a <span class='inlineText'>creative thinker</span> and possesses a <span class='inlineText'>can-do attitude</span>, Jing is a <span class='inlineText'>pleasure to work with</span>. I recommend her highly for any project management position for any organization that chooses to take benefit from her diverse skills."
    }
  ]
};

var screenshots = [
  {
    words:
      "<h3>Register Panel</h3><p>Log in / Sign up</p><p>Switch between English version and Chinese version</p>",
    src: "image/registerPanel.png"
  },
  {
    words:
      "<h3>Recommendation Page</h3><p>Selected cities and local guides</p>",
    src: "image/recommendation.png"
  },
  {
    words:
      "<h3>Event Page</h3><p>Events sorted by recent from database</p><p>Request event data to backend while scroll down</p>",
    src: "image/eventIndex.png"
  },
  {
    words: "<h3>Wish Page</h3><p>Wishes from database</p>",
    src: "image/wishIndex.png"
  },
  {
    words:
      "<h3>My Message Center Page</h3><p>All messages you have received or sent, sorted by events</p><p>Read/Unread</p><p>The number of unread is reflected on Message Bottom Navigation</p>",
    src: "image/messageCenter.png"
  },
  {
    words: "<h3>Chat Page</h3><p>*Style to be updated</p>",
    src: "image/chat.png"
  },
  {
    words:
      "<h3>Comment Page</h3><p>Nested Comment system</p><p>Repliable on each level</p><p>Fold/collapse children comments</p>",
    src: "image/comment.png"
  },
  {
    words:
      "<h3>My Event Page</h3><p>Show 'Edit My Event' button and my email/name on the top if it is my event</p>",
    src: "image/myEvent.png"
  },
  {
    words:
      "<h3>Other People's Event Page</h3><p>Default user avatar or event image if users have not uploaded images</p><p>'Favorite'/'Unfavorite' the event</p><p>Click on the bottom button to contact the event guide if interested</p>",
    src: "image/otherPeopleEvent.png"
  },
  {
    words:
      "<h3>Update My Event</h3><p>Update any info including event image</p><p>AWS S3/GM/Dropzone/ReduxForm/react-cropper</p>",
    src: "image/updateMyEvent.png"
  },
  {
    words:
      "<h3>Search Page</h3><p>Search Cities from Autocomplete List</p><p>Switch among event/wish/guide</p><p>Clickable history records shown based on user's inputs</p>",
    src: "image/search.png"
  },
  {
    words:
      "<h3>Add New Event Page</h3><p>Autocomplete feature</p><p>ReduxForm/validation</p>",
    src: "image/addEvent.png"
  },
  {
    words:
      "<h3>Update My Profile</h3><p>Update my information including my avatar and password</p>",
    src: "image/updateMyProfile.png"
  },
  {
    words:
      "<h3>My Account</h3><p>Lists my events/wishes/favorites/account information/logout ...</p>",
    src: "image/myAccount.png"
  }
];