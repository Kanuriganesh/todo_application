📝 Persistent Todo Application
A lightweight, high-performance task management web application built with Vanilla JavaScript. This project demonstrates the core principles of DOM manipulation, Event Handling, and State Persistence using LocalStorage.

🚀 Key Features
Real-time Task Creation: Add tasks via the "Add" button or by pressing the Enter key.

State Persistence: Uses LocalStorage to ensure your tasks and their "Checked" status remain saved even after a page refresh.

Dynamic UI Updates: Efficiently updates the DOM without re-rendering the entire list for every change.

Interactive Design: Features custom hover states and a "line-through" styling for completed tasks.

Unique ID Tracking: Every task is assigned a Date.now() timestamp to ensure precise deletion and status updates.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Attribute Selectors & Pseudo-classes)

Logic: JavaScript (ES6+, Functional Programming)

Storage: Web Storage API (LocalStorage)

📂 Project Structure
Plaintext
├── index.html      # Semantic HTML5 structure
├── index.css       # Custom styling with hover effects and specialized classes
└── index.js        # Core logic: State management and DOM manipulation
📖 How it Works
1. The Data Model
The application stores data in an array of objects called usersDataList. Each object follows this schema:

JavaScript
{
    id: 1775185481549, // Unique timestamp
    input: "Playing Cricket",
    isChecked: false
}
2. Selective Rendering
To maintain performance, the app uses a selective rendering approach. Instead of clearing the list for every addition, it only appends the newest item to the existing <ul> container.

3. Event Delegation
The app utilizes addEventListener for:

Keyboard Events: Tracking the Enter key for quick entry.

Mouse Events: Handling deletions and checkbox toggles.

💻 Installation & Usage
Clone the repository:

Bash
git clone https://github.com/your-username/todo-app.git
Open in Browser:
Simply open index.html in your preferred browser or use the Live Server extension in VS Code.

📈 Future Roadmap
[ ] Search Functionality: Filter tasks by keywords in real-time.

[ ] Categories: Group tasks into "Work," "Personal," or "Sports."

[ ] Backend Integration: Migrate from LocalStorage to a MongoDB database (MERN Stack).

[ ] AI Integration: Implementing "Agentic Logic" to automatically prioritize tasks based on urgency.

👤 Author
Kanuri Ganesh

MSc AI Student

Full-Stack Developer 