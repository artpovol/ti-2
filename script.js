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

const placeIn = document.querySelector(".skills-list");
skills.forEach(element => {
    const newSkill = document.createElement("dt");
    newSkill.classList.add(`skill-${element.cssname}`);
    newSkill.textContent = element.name;
    
    const newSkillBar = document.createElement("dd");
    newSkillBar.classList.add("level");
    newSkillBar.textContent = `${element.value}%`;
    
    const newDiv = document.createElement("div");
    newDiv.style = `width: ${element.value}%`;
    newSkillBar.append(newDiv);

    placeIn.append(newSkill, newSkillBar)
});