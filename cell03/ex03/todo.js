const list = document.getElementById("ft_list");
const button = document.getElementById("new");

function save() {
    const tasks = [];
    for (let i = 0; i < list.children.length; i++) {
        tasks.push(list.children[i].textContent);
    }
    const data = encodeURIComponent(JSON.stringify(tasks));
    document.cookie = `ft_todos=${data}; max-age=31536000`;
}

function createTask(text) {
    const task = document.createElement("div");
    task.textContent = text;
    task.onclick = () => {
        if (confirm("Delete this task?")) {
            list.removeChild(task);
            save();
        }
    };
    return task;
}

button.onclick = () => {
    const text = prompt("New task:");
    if (text === null || text.trim() === "") {
        return;
    }
    const task = createTask(text.trim());
    list.insertBefore(task, list.firstChild);
    save();
};

const cookies = document.cookie.split(";");
for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("ft_todos=")) {
        try {
            const tasks = JSON.parse(decodeURIComponent(cookie.substring(9)));
            if (Array.isArray(tasks)) {
                for (let j = 0; j < tasks.length; j++) {
                    if (typeof tasks[j] === "string") {
                        list.appendChild(createTask(tasks[j]));
                    }
                }
            }
        } catch (error) {
            
        }
    }
}