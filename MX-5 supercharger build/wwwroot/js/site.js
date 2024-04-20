// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    let siteuser = document.getElementById("user");

    // If the user has left a recommendation, display a pop-up
    if (recommendation.value && siteuser.value != null && recommendation.value.trim() != "") {
        console.log("New comment added");
        //Call showPopup here
        showPopup(true);
        // Create a new 'recommendation' element and set it's value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\>" + siteuser.value + "<br>" + recommendation.value + "\<span\>&#8221;\</span\>";
        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // Reset the value of the textarea
        recommendation.value = "";
        siteuser.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}
