//Creates the elements on the video player page
define(function (require) {
    var parse_json = require("app/page_functionality/parse_file");
    var Plyr = require("Plyr");
    var displayArticles = require("app/page_functionality/create_cards");

    return {
        loadContent: function () {

            //Gets url parameter to know which videoid it is
            let url_string = window.location.href;
            let url = new URL(url_string);

            //THIS IS TO BE RE_ENABLED
            let video_id = parseInt(url.searchParams.get("videoid"));


            //Get the csv file
            parse_json.parse_csv("/PlanningU/src/assets/articles/video_metadata.csv")
                .then(data => {

                    //Dynamically sets the page meta description to the description of the video
                    $('meta[name="description"]').attr("content", data[video_id][1]);
                    //Sets the page title to be the title of the video
                    document.title = data[video_id][0];


                    //Creating the video element and its children
                    let video = document.getElementsByTagName('iframe')[0];


                    video.src = data[video_id][2];

                    //video.appendChild(source);
                    //const player = new Plyr(video, {});
                    // window.player = player;
                    //----------------------------------------

                    //Setting descriptions TODO: Make it more dynamic and not repeat the same code found in
                    // create_cards?

                    var text_elements = document.querySelectorAll('.video-player.video-text')[0];

                    let sub_element;
                    sub_element = document.createElement("h3");
                    sub_element.className = "video-title";
                    sub_element.innerHTML = data[video_id][0];
                    text_elements.appendChild(sub_element);

                    //VIDEO TAGS DIV
                    sub_element = document.createElement("div");
                    sub_element.className = "tags";
                    let sub_sub_element = text_elements.appendChild(sub_element);

                    //VIDEO INDIVIDUAL TAG
                    let tags = data[video_id][4].replace(/"/g, "").split(',');
                    for (let i = 0; i < tags.length; i++) {
                        let tag = document.createElement("span");
                        tag.className = "tag";
                        tag.innerHTML = tags[i];
                        sub_sub_element.appendChild(tag);

                    }

                    //VIDEO DESCRIPTION
                    sub_element = document.createElement("p");
                    sub_element.className = "video-description";
                    sub_element.innerHTML = data[video_id][1];
                    text_elements.appendChild(sub_element);


                });


        }
    }


})
