import {loadItems} from "./parse_json.js";


let url_string = window.location.href;
let url = new URL(url_string);
let video_id = parseInt(url.searchParams.get("videoid"));

loadItems("/src/assets/articles/video_metadata.csv")
    .then(data => {


        $('meta[name="description"]').attr("content", data[video_id][1]);
            document.title = data[video_id][0];


        let video = document.getElementById('video');
        let source = document.createElement('source');

        source.setAttribute('src', data[video_id][2]);

        video.appendChild(source);
    })


//VideoCard.loadItems().then(r => null);
