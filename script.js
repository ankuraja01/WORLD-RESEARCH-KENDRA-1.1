document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Experiment List
    const experimentList = document.getElementById("experiment-list");
    const experiments = [
        { title: "Chemical Reaction Study", description: "Exploring the effects of catalysts.", category: "chemistry" },
        { title: "Physics Experiment", description: "Analyzing the properties of light.", category: "physics" },
        { title: "Biological Analysis", description: "Studying cell behavior under microscopes.", category: "biology" }
    ];

    const renderExperiments = (filter = "all") => {
        experimentList.innerHTML = "";
        experiments
            .filter(exp => filter === "all" || exp.category === filter)
            .forEach(experiment => {
                const experimentDiv = document.createElement("div");
                experimentDiv.className = "experiment-card";
                experimentDiv.innerHTML = `
                    <h3>${experiment.title}</h3>
                    <p>${experiment.description}</p>
                    <span>Category: ${experiment.category}</span>
                `;
                experimentList.appendChild(experimentDiv);
            });
    };

    renderExperiments();

    // Filter Experiments
    const filterCategory = document.getElementById("filter-category");
    filterCategory.addEventListener("change", (e) => {
        renderExperiments(e.target.value);
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you soon.");
        contactForm.reset();
    });

    // Search Functionality
    const searchBar = document.getElementById("search");
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", () => {
        const query = searchBar.value.toLowerCase();
        const filteredExperiments = experiments.filter(
            exp => exp.title.toLowerCase().includes(query) || exp.description.toLowerCase().includes(query)
        );
        experimentList.innerHTML = "";
        if (filteredExperiments.length > 0) {
            filteredExperiments.forEach(exp => {
                const experimentDiv = document.createElement("div");
                experimentDiv.className = "experiment-card";
                experimentDiv.innerHTML = `
                    <h3>${exp.title}</h3>
                    <p>${exp.description}</p>
                    <span>Category: ${exp.category}</span>
                `;
                experimentList.appendChild(experimentDiv);
            });
        } else {
            experimentList.innerHTML = "<p>No experiments found.</p>";
        }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode");
    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Chatbot
    const chatbotButton = document.getElementById("chatbot-button");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    chatbotButton.addEventListener("click", () => {
        chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                const userMessageDiv = document.createElement("div");
                userMessageDiv.textContent = You: ${userMessage};
                chatMessages.appendChild(userMessageDiv);

                const botMessageDiv = document.createElement("div");
                botMessageDiv.textContent = "Bot: Thank you for your message! How can I assist you?";
                chatMessages.appendChild(botMessageDiv);

                chatInput.value = "";
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    });
});