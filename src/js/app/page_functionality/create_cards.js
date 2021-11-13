//This creates a video card complete with title, thumbnail, description, and tags
//based on csv data


"use strict"

/*
CSV DATA AS OF 2020-08-03:
[i][0]: Title
[i][1]: Video Description
[i][2]: Video Link
[i][3]: Video Thumbnail link
[i][4]: List of tags, separated by a comma
*/


define(function (require) {
    var parse_file = require('app/page_functionality/parse_file');

    return {
        VideoCards: class {
            //Constructor takes three items:
            //1. The file to be read from (csv)
            //2. The class name of the element that these cards will be inserted into
            //3. The index of a card we want to remove (for example, if we are creating cards
            //   beside the video player, we don't want to create a card for the video that's
            //   being played currently
            constructor(source_file, insert_section, remove) {
                parse_file.parse_csv(source_file).then(data => {
                    this.parent = document.getElementById(insert_section);
                    if (typeof remove !== "undefined") {
                        data.splice(remove, 1);
                    }
                    this.build(data, this.parent);


                });
            }


            build(data, parent) {
                this.createCards(data, parent, "div", "video-card");
                this.cards = document.getElementsByClassName("video-card");
                Array.from(this.cards).forEach((card, index) => {
                    this.addData(card, index + 1, data);
                    //index is +1 because the first row of data (json file) is the column headers
                });
                const video_cards = document.querySelectorAll('.video-card');
                for (let i = 0; i < video_cards.length; i++) {
                    video_cards[i].addEventListener('click', (function (e) {
                        console.log("hi");
                        //When a video-card is clicked, open new page and pass the item's index as var in url
                        window.location.href = "/PlanningU/pages/watch.html?videoid=" + parseInt(this.getAttribute("id"));

                    }));
                }
            }


            //Simply creates the empty div.card element
            createCards(data, parent, element, class_name) {
                for (let i = 1; i < data.length; i++) {
                    let div = document.createElement(element);
                    div.className = class_name;
                    parent.appendChild(div);
                }
            }

            //Adds data from the csv file
            addData(card, i, data) {

                card.setAttribute("id", data[i][5]);

                //The thumbnail image
                let element;
                element = document.createElement("img");
                element.className = "thumbnail";
                element.src = data[i][3];
                element.alt = data[i][1];
                card.appendChild(element);


                //div.video-text to store all the text (title, description, tags)
                element = document.createElement("div");
                element.className = "video-text";
                let text_elements = card.appendChild(element);
                this.addText(text_elements, i, data);
            }

            //adds the text to the text div
            addText(text_elements, i, data) {
                //Video Title
                let sub_element;
                sub_element = document.createElement("h3");
                sub_element.className = "video-title";
                sub_element.innerHTML = data[i][0];
                text_elements.appendChild(sub_element);

                //Video tags div
                sub_element = document.createElement("div");
                sub_element.className = "tags";
                let sub_sub_element = text_elements.appendChild(sub_element);

                //Inserting each tag into the tags div
                let tags = data[i][4].replace(/"/g, "").split(',');
                for (let i = 0; i < tags.length; i++) {
                    let tag = document.createElement("span");
                    tag.className = "tag";
                    tag.innerHTML = tags[i];
                    sub_sub_element.appendChild(tag);

                }

                //Video description
                sub_element = document.createElement("p");
                sub_element.className = "video-description";
                sub_element.innerHTML = data[i][1];
                text_elements.appendChild(sub_element);
            }


        }
    }


})

