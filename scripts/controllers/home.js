
'use strict';

app.controller('HomeController', function($scope, $location) {


var $animation_blocks = $('.animation-block');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_blocks, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$scope.searchChapter = '';


    var tabs = [
          { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
          { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;


$scope.articles = [
    {
      title: "New Project Civility fosters kindness, positivity at Talawanda High School",
      date: "MAY 22, 2016",
      url: "http://www.wcpo.com/news/insider/new-project-civility-fosters-kindness-positivity-at-talawanda-high-school",
      exampleText: "HAMILTON — It’s Character Week in Hamilton through Sunday, under a city council proclamation that honored a Miami University organization that promotes civility in Butler County. Accepting the proclamation was Segi Adeseha, 20, of Fairfield, a junior kinesiology major who plans a career in occupational therapy. She’s co-director of Miami University’s Project Civility, which began in 2011 at Miami University Hamilton, and since has spread to Miami’s Middletown and Oxford campuses."
    },
    {
      title: "Miami’s Project Civility branches out to schools, community",
      date: "FEBRUARY 11, 2016",
      url: "http://www.journal-news.com/news/news/local/miamis-project-civility-branches-out-to-schools-co/nqNpW/",
      exampleText: "HAMILTON — It’s Character Week in Hamilton through Sunday, under a city council proclamation that honored a Miami University organization that promotes civility in Butler County. Accepting the proclamation was Segi Adeseha, 20, of Fairfield, a junior kinesiology major who plans a career in occupational therapy. She’s co-director of Miami University’s Project Civility, which began in 2011 at Miami University Hamilton, and since has spread to Miami’s Middletown and Oxford campuses."
    },
    {
      title: "Project Civility for change",
      date: "APRIL 17, 2015",
      url: "http://miamistudent.net/?p=17005311",
      exampleText: "With the vandalism that took place in Wells Hall on March 4, Project Civility, a subcommittee under the Student Government Association (SGA) of the regional campuses, is working to promote courtesy and respect within the Miami community. Project Civility was founded by Kofi Ansah and Shan Qureshi in 2012 “in response to rude, disrespectful and hurtful comments and behaviors demonstrated by students at the beginning of the 2011-12 academic year,” according to its profile on The Hub."
    },
    {
      title: "Seniors receive President's Distinguished Service Award",
      date: "APRIL 23, 2014",
      url: "http://miamioh.edu/news/campus-news/2014/04/presidents-service.html",
      exampleText: "Shan J. Qureshi – zoology major from Liberty Township. Qureshi was awarded for his service to the Miami University Hamilton Student Government Association and his contributions to the Project Civility Initiative at the Hamilton and Oxford campuses."
    },
    {
      title: "Hamilton set to become ‘City of Character’",
      date: "OCTOBER 8, 2013",
      url: "http://www.journal-news.com/news/news/hamilton-set-to-become-city-of-character/nbJYy/",
      exampleText: "HAMILTON — Inspired by the success of the Hamilton City School District in becoming a national “District of Character,” a group of citizens have banded together to make Hamilton a “City of Character.” Led by Mayor Pat Moeller, the group includes representatives from local service organizations, the school district, the Chamber of Commerce and Miami University Hamilton, the mayor said, as well as several residents."
    }
  ]

  $scope.chapters = [
    {
      name: "Edgewood High School",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/edgewoodHS.jpg",
      members: 22,
      adminName: "Jason Bentley"
    },
    {
      name: "Hamilton High School",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/hamiltonHS.jpg",
      members: 11,
      adminName: "Julie Barns"
    },
    {
      name: "Lakota High School",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/lakotaHS.jpg",
      members: 18,
      adminName: "Bella Star"
    },
    {
      name: "Madison High School",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/madisonHS.jpg",
      members: 8,
      adminName: "Shane Madison"
    },
    {
      name: "Miami University Oxford",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/miamiUniversity.jpg",
      members: 15,
      adminName: "Shar Qureshi"
    },
    {
      name: "Miami University Hamilton",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/miamiHamilton.jpg",
      members: 22,
      adminName: "Shan Qureshi"
    },
    {
      name: "Miami University Middletown",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/miamiMiddletown.jpg",
      members: 18,
      adminName: "Sandra"
    },
    {
      name: "New Miami High School",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/chapters/newMiami.jpg",
      members: 13,
      adminName: "Jessica Hail"
    },
    {
      name: "Talawanda High School",
      url: "http://hotdot.pro/en/404/",
      imageUrl: "images/chapters/talawanda.jpg",
      members: 13,
      adminName: "Gabe Jackson"
    },
    {
      name: "University of Florida",
      url: "http://hotdot.pro/en/404/",
      imageUrl: "images/chapters/uofflorida.jpg",
      members: 12,
      adminName: "Ben Briskan"
    },
    {
      name: "University of Dayton",
      url: "http://hotdot.pro/en/404/",
      imageUrl: "images/chapters/uofdayton.jpg",
      members: 8,
      adminName: "Michael Mitrakos"
    }
  ]

  // Team

      TweenLite.set(".cardWrapper", {perspective:800});
      TweenLite.set(".card", {transformStyle:"preserve-3d"});
      TweenLite.set(".back", {rotationY:-180});
      TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

      $(".cardWrapper").hover(
        function() {
          TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
        },
        function() {
          TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});
        }
      );

      //a nice little intro;)
      TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);

        $scope.myInterval = 3000;
        $scope.slides = [
          {
            image: 'http://lorempixel.com/400/200/'
          },
          {
            image: 'http://lorempixel.com/400/200/food'
          },
          {
            image: 'http://lorempixel.com/400/200/sports'
          },
          {
            image: 'http://lorempixel.com/400/200/people'
          }
        ];
});

app.directive('imageonload', function() {
    return {
        restrict: 'A',

        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
});
