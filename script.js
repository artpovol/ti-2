const skills = {
    skillBars: [
        {
            name: "HTML",
            cssname: "html",
            value: 30,
        },
        {
            name: "CSS",
            cssname: "css",
            value: 10,
        },
        {
            name: "C++",
            cssname: "cpp",
            value: 40,
        },
        {
            name: ".NET",
            cssname: "net",
            value: 50,
        },
        {
            name: "SQL",
            cssname: "sql",
            value: 30,
        },
        {
            name: "Python",
            cssname: "py",
            value: 40,
        }
    ],
    topSorted: true,
    drawSkillBars() {
        const dl = document.createElement("dl");
        dl.classList.add("skills-list");
        document.querySelector('.skills').append(dl);

        this.skillBars.forEach(element => {
            const newSkill = document.createElement("dt");
            newSkill.classList.add(`skill-${element.cssname}`);
            newSkill.textContent = element.name;
            
            const newSkillBar = document.createElement("dd");
            newSkillBar.classList.add("level");
            newSkillBar.textContent = `${element.value}%`;
            
            const newDiv = document.createElement("div");
            newDiv.style.width = `${element.value}%`;
            newSkillBar.append(newDiv);
    
            dl.append(newSkill, newSkillBar)
        });
    },
    nameSort(a, b) {
        let x = a.name;
        let y = b.name;
        return x < y ? -1 : x > y ? 1 : 0;
    },
    valueSort(a, b) {
        return a.value - b.value;
    },
}

document.addEventListener('click', function(event) {
    if (event.target.closest(".sort-button")) {
        document.querySelector(".skills-list").remove();
        skills.skillBars.sort(
            !event.target.closest(".sort-value") ?
            skills.nameSort : skills.valueSort
        );
        if (skills.topSorted = !skills.topSorted) 
        skills.skillBars.reverse();
        skills.drawSkillBars();
    }
});

skills.drawSkillBars();
