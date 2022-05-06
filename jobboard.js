var rssDefault = `https://kent.joinhandshake.com/external_feeds/14596/public.rss?token=bOuon-PBh-xrLAQ_e-lIgL4NE76vzSIsMDver5Y0CnihwzjSTcWv8Q`;

window.onload = getJobs(rssDefault);

// // var header = document.getElementById("part-time");
// var btns = document.getElementsByClassName("major");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active-major");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active-major", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active-major";
//   });
// }

function getJobs(rss) {
  $(".major").on("click", function () {
    $(".major").removeClass("active-major");
    $(this).addClass("active-major");
  });

  $.ajax({
    url: "https://jsonapi.ethanh.works/api?",
    method: "GET",
    dataType: "json",
    data: {
      rss: rss,
    },
    beforeSend: function () {
      // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
      $("#loader").removeClass("hide");
      $("#loader").addClass("show");
      document.getElementsByClassName("display-jobs")[0].innerHTML = "";
    },
    success: function (response) {
      // if (response.status != "ok") {
      //   throw response.message;
      // }

      console.log("====== " + response.title + " ======");

      for (var i in response.items) {
        var displayJobs = document.getElementsByClassName("display-jobs")[0];
        var item = response.items[i];
        var div = document.createElement("div");
        displayJobs.appendChild(div);
        div.classList = "job-container";
        var titleLink = document.createElement("a");
        var title = document.createElement("h2");
        title.innerHTML = item.title;
        titleLink.appendChild(title);
        titleLink.href = item.link;
        titleLink.target = "_blank";
        div.appendChild(titleLink);
        var employerContainer = document.createElement("div");
        employerContainer.classList = "employer-container";
        var split = item.description.split("Employer:");
        var employer = split[1].split("Expires:");
        var employerElement = document.createElement("p");
        var spacer = document.createElement("p");
        spacer.appendChild(document.createTextNode("●"));
        spacer.classList = "spacer";
        var date = employer[1].split("\n\n");
        var dateElement = document.createElement("p");
        dateElement.innerHTML = date[0];
        // var description = document.createElement('p')
        var descriptionContainer = document.createElement("div");
        var shortDescriptionContent = date[1].slice(0, 260);
        var longDescriptionContent = date[1].slice(260);
        var shortDescription = document.createElement("p");
        var descriptionBreak = document.createElement("span");
        var longDescription = document.createElement("span");
        descriptionBreak.appendChild(document.createTextNode("..."));
        descriptionBreak.classList = "show";

        // shortDescription.appendChild(
        //   document.createTextNode(shortDescriptionContent)
        // );
        shortDescription.innerText = shortDescriptionContent;
        descriptionContainer.appendChild(shortDescription);
        descriptionContainer.classList = "description-container";
        longDescription.appendChild(
          document.createTextNode(longDescriptionContent)
        );
        longDescription.classList = "long-description hide";
        shortDescription.appendChild(descriptionBreak);
        shortDescription.appendChild(longDescription);
        // description.innerHTML = date[1]
        console.log(date);
        employerElement.innerHTML = employer[0];
        employerContainer.appendChild(employerElement);
        employerContainer.appendChild(spacer);
        employerContainer.appendChild(dateElement);
        div.appendChild(employerContainer);
        div.appendChild(descriptionContainer);
        var buttonContainer = document.createElement("div");
        buttonContainer.classList = "button-container";
        var button = document.createElement("a");
        button.appendChild(document.createTextNode("View on HandShake"));
        button.classList = "handshake-button";
        button.href = item.link;
        button.target = "_blank";
        buttonContainer.appendChild(button);
        div.appendChild(buttonContainer);
      }
    },
    complete: function () {
      // Set our complete callback, adding the .hidden class and hiding the spinner.
      $("#loader").addClass("hide");
      $("#loader").removeClass("show");
    },
  });
}

function showFullTime() {
  document.getElementsByClassName("display-jobs")[0].innerHTML = "";
  if (document.getElementById("full-time").classList.contains("hide")) {
    document.getElementById("full-time").classList.remove("hide");
    document.getElementById("full-time").classList.add("show");
    document.getElementById("ftj-button").classList.add("active");
  }
  document.getElementById("part-time").classList.remove("show");
  document.getElementById("part-time").classList.add("hide");
  document.getElementById("full-time-internship").classList.remove("show");
  document.getElementById("full-time-internship").classList.add("hide");
  document.getElementById("fti-button").classList.remove("active");
  document.getElementById("pti-button").classList.remove("active");
}
function showFullTimeInternship() {
  document.getElementsByClassName("display-jobs")[0].innerHTML = "";
  if (
    document.getElementById("full-time-internship").classList.contains("hide")
  ) {
    document.getElementById("full-time-internship").classList.remove("hide");
    document.getElementById("full-time-internship").classList.add("show");
    document.getElementById("fti-button").classList.add("active");
  }
  document.getElementById("ftj-button").classList.remove("active");
  document.getElementById("pti-button").classList.remove("active");
  document.getElementById("part-time").classList.remove("show");
  document.getElementById("part-time").classList.add("hide");
  document.getElementById("full-time").classList.remove("show");
  document.getElementById("full-time").classList.add("hide");
}

function showPartTime() {
  document.getElementsByClassName("display-jobs")[0].innerHTML = "";
  if (document.getElementById("part-time").classList.contains("hide")) {
    document.getElementById("part-time").classList.remove("hide");
    document.getElementById("part-time").classList.add("show");
    document.getElementById("pti-button").classList.add("active");
  }
  document.getElementById("ftj-button").classList.remove("active");
  document.getElementById("fti-button").classList.remove("active");
  document.getElementById("full-time").classList.remove("show");
  document.getElementById("full-time").classList.add("hide");
  document.getElementById("full-time-internship").classList.remove("show");
  document.getElementById("full-time-internship").classList.add("hide");
}
