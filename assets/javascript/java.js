// buttons for showing and hiding the answers to the questions
function buttonPress() {
let coll = document.getElementsByClassName("collapsible");
        
        for (let i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
	}

// buttons for the progress bar
function detailsYearOne() {
	let EC = document.getElementById("bar_year_one").value;
	document.getElementById("EC_year_one").innerHTML = EC + " EC";
}

function detailsYearTwo() {
	let EC_second = document.getElementById("bar_year_two").value;
	document.getElementById("EC_year_two").innerHTML = EC_second + " EC";
}

function detailsYearThree() {
	let EC_third = document.getElementById("bar_year_three").value;
	document.getElementById("EC_year_three").innerHTML = EC_third + " EC";
}

function detailsYearFour() {
	let EC_fourth = document.getElementById("bar_year_four").value;
	document.getElementById("EC_year_four").innerHTML = EC_fourth + " EC";
}