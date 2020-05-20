(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

var data = [{"museum":"Bay Area Discovery Museum","city":"Sausalito","state":"California","what":"Weekly Q&As for parents and a series of workshops/activities centered on one of three areas of early childhood development – Talk & Play, Science & Math, or Body & Brain.","link":"https://bayareadiscoverymuseum.org/bringing-badm-to-you","age":"Early Childhood","tech":"Most of the videos are posted on Youtube and embedded into their website, so you can watch any of the Q&As or workshops from their website. The more recent Q&A videos do not use Youtube; they appear to be using a combination of Facebook Live and Zoom. It is possible to hold a Zoom meeting with multiple participants on both Facebook live and Youtube live, so I do not have a good guess as to why they switched to Facebook, especially because the embedding doesn't look quite as good.","time":"Workshops for kids are usually just a few (1-5) minutes long, while live video Q&As for parents are around 30 minutes. Q&As are weekly, and new workshops appear to be posted about every 2-3 days.","educators":"Each Q&A or workshop appears to be hosted by one educator. Q&As often have other ","money":"No cost, but donation is encouraged","notes":"All of the resources on the website are directed toward parents to do activities with their younger children or to learn teaching techniques on their own; this is not a place for kids to come learn on their own online."},
{"museum":"Children's Discovery Museum of San Jose","city":"San Jose","state":"California","what":"Virtual Purple Museum","link":"https://www.cdm.org/virtual-museum/","age":"Not specified on website, but seems like generally for younger kids: some activities designed for toddlers, other more science-oriented activities could probably work for up to age 10","tech":"Broadcasts are streamed live on Facebook, then added to a Youtube video archive. At-home activities either have an accompanying video from a broadcast or an accompanying pdf worksheet for kids to fill out.","time":"Broadcasts are every MWF and range from 10 to 30 minutes.","educators":"Each broadcase series is taught by a different educator, and there are about 6 educators that regularly contribute to broadcasts.","money":"No cost, but donation is encouraged","notes":"It's worth noting that the broadcasts are super frequent and seem like they took a lot of effort, but they don't have too many views on Youtube...all the videos I saw had less than 100 views, and most had less than 50, or even 20. Many of the activities and parent resources are links to outside sources."},
{"museum":"Habitot Children's Museum","city":"Berkeley","state":"California","what":"Newsletter with some at-home activities & parenting tips","link":"https://www.habitot.org/hab/newsletter/enews_archive/current_newsletter/current_enews_homepage1-15.html","age":"Not specified, but generally younger children.","tech":"Just a newsletter with links to external activities - no videos or content on website.","time":"NA","educators":"NA","money":"No cost, but donation is encouraged","notes":"None"},
{"museum":"Monterey Youth Museum","city":"Monterey","state":"California","what":"No virtual learning","link":"https://mymuseum.org/","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"},
{"museum":"The New Children's Museum","city":"San Diego","state":"California","what":"Think Play Create From Home","link":"https://thinkplaycreate.org/learn/creative-resources/","age":"Regular toddler-specific activities; other at-home activities are for a wide range of ages, not specified but maybe up to around 13-14 years old with the more complicated crafts.","tech":"Using Zoom for weekly talks for givers, a private Facebook group for members-only event, and blog posts & other social media channels like instagram to share at-home activities.","time":"Weekly talks are , toddler time videos are usually just a few minutes.","educators":"1-2 educators for each weekly zoom call.","money":"Most of the ","notes":"The San Diego Padres are in several of the videos. Lots of videos directed toward kids, not just parents. Should be noted that this museum has had an online presence with at-home activities since before COVID, with blog posts as far back as 2016."},
{"museum":"Sacramento Children's Museum","city":"Sacramento","state":"California","what":"No virtual learning","link":"https://sackids.org/hours-admission/coronavirus-precautions","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"},
{"museum":"Pretend City Children's Museum","city":"Irvine","state":"California","what":"Play at Home","link":"https://www.pretendcity.org/play-home/","age":"All ages, different age groups for different activities and they are specified in the activity description.","tech":"Mostly Youtube videos embedded in website; some Facebook Live activities and Zoom webinars.","time":"Storytime and activity videos are short: 1-10 minutes. Not sure about Facebook Live videos or Zoom webinars, or how often storytime videos are posted.","educators":"1 educator is in each activity or storytime video, sometimes with another child. It seems like one educator is doing most of the videos.","money":"No cost.","notes":"The layout of the activities is really nice, and the videos are short and engaging; also nice that they specify ages for each activity."},
{"museum":"Children's Discovery Museum of the Desert","city":"Rancho Mirage","state":"California","what":"Weekly conversation starters, Story Time videos, and other video series such as ","link":"https://cdmod.org/programs/discover-at-home/","age":"All ages, different age groups for different activities (i.e. there is a series ","tech":"Youtube videos embedded in website.","time":"Storytime is less than 10 minutes, done every Tuesday, Thursday, and Saturday. Other series such as are done weekly and video length depends on the series; usually around 8-10 minutes.","educators":"1 educator per video usually, sometimes 2, and different educators seem to focus on specific areas (i.e. cooking vs storytime) ","money":"No cost.","notes":"Another case of having a lot of videos and a lot of effort put in and not many views...most of the videos here have less than 5 views, and most have none. The videos are directed toward children."},
{"museum":"Children's Museum at La Habra","city":"La Habra","state":"California","what":"No virtual learning","link":"http://www.lhcm.org/349/Childrens-Museum","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"},
{"museum":"Children's Museum at the Paso Robles Volunteer Firehouse","city":"Paso Robles","state":"California","what":"Some at-home activities posted on Facebook, but not much.","link":"http://www.pasokids.org/","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"},
{"museum":"Children's Museum of Sonoma County","city":"Santa Rosa","state":"California","what":"Weekly newsletter with at-home activities, daily social media posts with at-home activities, virtual video programming on Facebook and Youtube with series such as ","link":"https://www.cmosc.org/resources/","age":"Activities for all ages; ages specified for virtual programming activities.","tech":"Videos are not embedded directly within museum website; there are links to Facebook events or Youtube playlists. Activities without videos have directions and photos directly in the website.","time":"Videos are short, usually less than 5 minutes. Videos and activities are posted frequently, and there appears to be some sort of programming every day.","educators":"Not clear how many educators are participating; there is one educator who does all the storytime videos, but it isn't clear who is working on the rest of the programming.","money":"Sold $20 ","notes":"This museum has had a blog with at-home programming since 2015."},
{"museum":"Children's Museum of Stockton","city":"Stockton","state":"California","what":"At-home crafts and songs. All virtual programming is short videos.","link":"https://www.childrensmuseumstockton.org/fun-stuff-on-video","age":"Not specified; seems geared toward younger children.","tech":"All Youtube videos embedded in museum website.","time":"Videos are short, usually around 2 minutes. Initially, videos were posted more frequently (a few videos per week), but are now becoming less frequent (1 every week or 2 weeks).","educators":"A couple different educators, also kids involved participating in crafts.","money":"No cost.","notes":"None"},
{"museum":"Redwood Discovery Museum","city":"Eureka","state":"California","what":"No virtual programming","link":"https://www.discovery-museum.org/","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"},
{"museum":"San Diego Children's Discovery Museum","city":"Escondido","state":"California","what":"Multiply daily broadcasts with at-home activities including storytime, art activities, music activities, and more.","link":"https://www.sdcdm.org/online-activities","age":"Not specified; seems more geared toward younger children but with at-home activities for different age groups.","tech":"Mostly, using Youtube videos not embedded within site; using Facebook events to spread awareness of broadcasts; also putting videos on Facebook and Instagram.","time":"","educators":"1 educator for each video, seems like 3-4 different educators making videos.","money":"No cost.","notes":"None"},
{"museum":"Pennypickle's Workshop, Temecula Children's Museum","city":"Temecula","state":"California","what":"No virtual programming","link":"http://www.pennypickles.org/news.html","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"},
{"museum":"ImagineU Children's Museum","city":"Visalia","state":"California","what":"At-home activities like coloring pages; weekly story time and science lab broadcasts.","link":"https://www.imagineumuseum.org/","age":"Not specified; seems geared toward younger children.","tech":"Coloring pages are shared as pdf on their website. Video broadcasts cannot be found from their website! Video broadcasts can only be watched on Instagram.","time":"Videos posted weekly; videos are short, 2-5 minutes.","educators":"1 educator for each video, seems like 1-2 educators making most of the videos.","money":"No cost for virtual programming, but the museum did sell ","notes":"I thought it was weird at first to have all the videos on Instagram instead of a more accessible platform like youtube, but most of the videos had between 200 to 500 views, which is a lot more than any of the Youtube videos from other museums."},
{"museum":"Kern Country Museum (Lori Brock Discovery Center)","city":"Bakersfield","state":"California","what":"No virtual programming","link":"https://kerncountymuseum.org/","age":"0","tech":"0","time":"0","educators":"0","money":"0","notes":"0"}]

function addDataWith(museum, city, state, link, what, age, tech, time, educators, money, notes){
  var item = $('<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">')
  var content = $('<div class="resume-content">')
  var header = $('<h2 class="mb-0">')
  header.append(museum)
  var location = $('<div class="h3 text-primary">')
  location.append(city, ", ", state)
  var button = $('<a target="_blank" class="card-link btn btn-outline-info">')
  button.attr("href", link)
  button.append("Website")
  var what_h = $('<div class="subheading mb-3 text-secondary">')
  what_h.append("What programming are they offering?")
  var what_p = $("<p>")
  what_p.append(what)
  var age_h = $('<div class="subheading mb-3 text-secondary">')
  age_h.append("What age group is the programming for?")
  var age_p = $("<p>")
  age_p.append(age)
  var tech_h = $('<div class="subheading mb-3 text-secondary">')
  tech_h.append("What technology is being used?")
  var tech_p = $("<p>")
  tech_p.append(tech)
  var time_h = $('<div class="subheading mb-3 text-secondary">')
  time_h.append("How often & how long is the programming?")
  var time_p = $("<p>")
  time_p.append(time)
  var educators_h = $('<div class="subheading mb-3 text-secondary">')
  educators_h.append("How many educators are participating?")
  var educators_p = $("<p>")
  educators_p.append(educators)
  var money_h = $('<div class="subheading mb-3 text-secondary">')
  money_h.append("Are they charging any money?")
  var money_p = $("<p>")
  money_p.append(money)
  var notes_h = $('<div class="subheading mb-3 text-secondary">')
  notes_h.append("Other Notes")
  var notes_p = $("<p>")
  notes_p.append(notes)
  content.append(header, location, "<br>", button, "<br>", "<br>",what_h, what_p, age_h, age_p, tech_h, tech_p, time_h, time_p, educators_h, educators_p, money_h, money_p, notes_h, notes_p)
  item.append(content)
  $("#data-with").append(item)

}

function addDataWithout(museum, city, state, link){
  var item = $('<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">')
  var content = $('<div class="resume-content">')
  var header = $('<h3 class="mb-0">')
  header.append(museum)
  var location = $('<div class="text-primary">')
  location.append(city, ", ", state)
  var button = $('<a target="_blank" class="card-link btn btn-outline-info">')
  button.attr("href", link)
  button.append("Website")
  content.append(header, location, "<br>", button, "<br>")
  item.append(content)
  $("#data-without").append(item)
}

function parseData(){
  for (i in data){
    var dict = data[i]
    var museum = dict["museum"]
    var city = dict["city"]
    var state = dict["state"]
    var link = dict["link"]
    var age = dict["age"]
    if (age == "0"){
      addDataWithout(museum, city, state, link)
    } else {
      addDataWith(museum, city, state, link, dict["what"], age, dict["tech"], dict["time"], dict["educators"], dict["money"], dict["notes"])
    }
    $("#experience").append(museum, city, state)
  }
}


$(document).ready(function() {
  parseData()
})
