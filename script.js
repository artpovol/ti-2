let skills = [
    {
        "name": "HTML",
        "cssname": "html",
        "value": 30,
    },
    {
        "name": "CSS",
        "cssname": "css",
        "value": 10,
    },
    {
        "name": "C++",
        "cssname": "cpp",
        "value": 40,
    },
    {
        "name": ".NET",
        "cssname": "net",
        "value": 50,
    },
    {
        "name": "SQL",
        "cssname": "sql",
        "value": 30,
    }
]

skills.forEach(element => {
    const newSkill = document.createElement("dt");
    newSkill.classList = ["skill-" + element.cssname];
    newSkill.appendChild(document.createTextNode(element.name));

    const newSkillBar = document.createElement("dd");
    newSkillBar.classList = ["level"];
    
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style", `width: ${element.value}%;`);
    newDiv.appendChild(document.createTextNode(`${element.value}%`));
    newSkillBar.appendChild(newDiv);

    const placeIn = document.getElementsByClassName("skills-list")[0];
    placeIn.insertAdjacentElement("beforeend", newSkill);
    placeIn.insertAdjacentElement("beforeend", newSkillBar);
});