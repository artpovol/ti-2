'use strict'

fetch('db/skills.json')
    .then(data => data.json())
    .then(json => {
        const skills = {
            skillBars: json,
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
        
        document.querySelector(".sort-buttons").addEventListener('click', function(event) {
                document.querySelector(".skills-list").remove();
                skills.skillBars.sort(
                    event.target.closest(".sort-name") ?
                    skills.nameSort : skills.valueSort
                );
                if (skills.topSorted = !skills.topSorted) 
                    skills.skillBars.reverse();
                skills.drawSkillBars();
        });
        
        skills.drawSkillBars();
        
    })
    .catch(() => console.error("не удалось загрузить список навыков"));