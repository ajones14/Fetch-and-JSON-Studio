// TODO: add code here

window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let array = [];
            let newArray = [];
            for (let i = 0; i < json.length; i++) {
                array.push(json[i])
            }
            console.log(json);
            // while (array.length > 0) {
                
            // }
            array.sort();
            console.log(array);
            let container = document.getElementById("container");
            let h2 = document.getElementById("count");
            let count = 0;

            for (let i = 0; i < json.length; i++) {
                if (json[i].active === true) {
                    count += 1;
                    container.innerHTML += `
                        <div class="astronaut">

                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li style="color:green">Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    `;
                } else {
                    count +=1;
                    container.innerHTML += `
                        <div class="astronaut">

                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li>Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    `;
                }
                
            }
            h2.innerHTML += count;
            
        });
    });
});


