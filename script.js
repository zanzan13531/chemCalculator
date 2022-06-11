var topics = {
    "a" : ["topic_a"],
    "b" : ["topic_a", "topic_b"],
    "c" : ["topic_a", "topic_b", "topic_c"]
};

function search_topics() {

    var input = document.getElementById('searchbar').value

    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');

    var x = document.getElementsById('topic_list');

    if (topics.hasOwnProperty(input)) {
        var temp_array = topics[input];
        for (i = 0; i < temp_array; i++) {
            x.innerHTML = x.innerHTML + " " + topics[i];
        }
    }
    
}