"use strict"

loadItems();

class VideoCard {


    constructor(json) {
        this.data = json;
        this.parent = document.getElementById("video-section");
        this.createCards(this.data, this.parent, "div", "video-card");
        this.cards = document.getElementsByClassName("video-card");

        Array.from(this.cards).forEach((card, index) => {
            this.addData(card, index + 1, this.data);
            //index is +1 because the first row of data (json file) is the column headers
        });


    }

    createCards(data, parent, element, class_name) {

        for (let i = 1; i < data.length; i++) {
            let div = document.createElement(element);
            div.className = class_name;
            parent.appendChild(div);
        }
    }

    addData(card, i, data) {
        let element;
        element = document.createElement("img");
        element.className = "thumbnail";
        element.src = data[i][3];
        element.alt = data[i][1];
        card.appendChild(element);


        element = document.createElement("div");
        element.className = "video-text";
        let text_elements = card.appendChild(element);

//Adding sub-element to div.video-text;
        //Video TITLE
        let sub_element;
        sub_element = document.createElement("h3");
        sub_element.className = "video-title";
        sub_element.innerHTML = data[i][0];
        text_elements.appendChild(sub_element);

        //VIDEO TAGS DIV
        sub_element = document.createElement("div");
        sub_element.className = "tags";
        let sub_sub_element = text_elements.appendChild(sub_element);

        //VIDEO INDIVIDUAL TAG
        let tags = data[i][4].replace(/"/g,"").split(',');
        for (let i = 0; i < tags.length; i++){
            let tag = document.createElement("span");
            tag.className = "tag";
            tag.innerHTML = tags[i];
            sub_sub_element.appendChild(tag);

        }

        //VIDEO DESCRIPTION
        sub_element = document.createElement("p");
        sub_element.className = "video-description";
        sub_element.innerHTML = data[i][1];
        text_elements.appendChild(sub_element);


    }


}


function loadItems() {
    fetch("/src/assets/articles/video_metadata.csv")
        .then(raw => raw.text())
        .then(data => Papa.parse(data))
        .then(json => new VideoCard(json.data));
}