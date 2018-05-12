var projects = {
  image: [
    "image/loganalysis.png",
    "image/lovecoding.png",
    "image/surveydog.png",
    "image/map.JPG",
    "image/game.JPG",
    "image/webOptim.JPG",
    "image/test.JPG",
    "image/movie.png"
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
      src: "keiko.jpg",
      title: "Devops Engineer / Utrip Project Team Lead",
      say:
        "Her <span class='inlineText'>calm</span>, <span class='inlineText'>patient</span> manner was a great help to me when my frustration was at an all-time high. Her knowledge of the translation and her <span class='inlineText'>remarkable problem-solving abilities</span> are very exceptional."
    },

    {
      name: "Hejie Fan",
      src: "ceo.jpg",
      title: "Senior Project Manager / Utrip Marketing Lead",
      say:
        "She is a very capable tri-lingual who conducts Japanese and English at business level together with her native Chinese language. She is a <span class='inlineText'>hard worker</span> and a <span class='inlineText'>capable project manager</span> for our localization/translation projects. <span class='inlineText'>Good teamworker</span>."
    },

    {
      name: "Sean Wang",
      src: "prithvi.jpg",
      title: "Senior Backend Engineer / Utrip Backend Engineer",
      say:
        "Jing is warm and witty, and most of all extremely knowledgeable. Jing can grasp ideas in a holistic manner and still <span class='inlineText'>pay attention to minor details</span>. As someone who is a <span class='inlineText'>creative thinker</span> and possesses a <span class='inlineText'>can-do attitude</span>, Jing is a <span class='inlineText'>pleasure to work with</span>."
    },

    {
      name: "Homer Johnstone",
      src: "homer.jpg",
      title: "Distinguished Adjunct Professor",
      say:
        "Jing is flexible, a very <span class='inlineText'>fast learner</span>, and is clearly capable of and ready for additional challenge and responsibility. Were I looking for someone who could hit the ground running and produce in a <span class='inlineText'>team environment</span>, I would choose her. If given the opportunity, I believe Jing will perform superbly, contribute meaningfully and meet or exceed your expectations. I recommend her  without reservation."
    },

    {
      name: "Akmal Siddiqi",
      src: "akmal.jpg",
      title: "IT Project Manager",
      say:
        "Jingyi is an outstanding character and a talented professional. She is <span class='inlineText'>passionate</span>, <span class='inlineText'>self-starter</span>, and <span class='inlineText'>highly organized</span>. In addition, she is very adept at data analysis. I strongly recommend her for any organization that seeks her skills."
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