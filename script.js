//topic tags
const topics = {
    "a" : ["topic_a"],
    "b" : ["topic_a", "topic_b"],
    "c" : ["topic_a", "topic_b", "topic_c"]
};

function search_topics() {

    //takes and handles input
    var input = document.getElementById('searchbar').value

    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');

    //prepares for the loop by resetting the results div
    var x = document.getElementById('topic_list');
    removeAllChildNodes(x);

    //if the input is one of the options for topic tags
    if (topics.hasOwnProperty(input)) {

        var temp_array = topics[input];

        //creates a button for each element and appends it to the container
        for (i = 0; i < temp_array.length; i++) {
            var temp_button = document.createElement("button");
            temp_button.innerHTML = temp_array[i];
            x.appendChild(temp_button);
        }

    } else {
        var no_result = document.createElement("p");
        no_result.innerHTML = "No matching results";
        x.appendChild(no_result);
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}