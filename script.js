//topic tags
const topics = {
    "a" : ["topic_a"],
    "b" : ["topic_a", "topic_b"],
    "c" : ["topic_a", "topic_b", "topic_c"]
};

//called whenever a letter is entered into the searchbar
function searchTopics() {

    //takes and handles input
    var input = document.getElementById('searchbar').value

    input = input.toLowerCase();
    input = input.replace(/\s+/g, '');

    //prepares for the loop by resetting the results div
    var x = document.getElementById('topicList');
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
        //case where no matching tags are found
        var no_result = document.createElement("p");
        no_result.innerHTML = "No matching results";
        x.appendChild(no_result);
    }

}

//remvoes stuff from an html element
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}