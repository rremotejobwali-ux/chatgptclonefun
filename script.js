document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatContainer = document.getElementById('chat-container');
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');

    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    // Add message to UI
    const addMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        avatarDiv.innerHTML = sender === 'user'
            ? '<ion-icon name="person"></ion-icon>'
            : '<ion-icon name="logo-electron"></ion-icon>';

        const bubbleDiv = document.createElement('div');
        bubbleDiv.classList.add('bubble');
        bubbleDiv.textContent = text;

        msgDiv.appendChild(avatarDiv);
        msgDiv.appendChild(bubbleDiv);

        chatContainer.appendChild(msgDiv);
        scrollToBottom();
    };

    // Add Loading Indicator
    const showLoading = () => {
        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('message', 'ai', 'loading-msg');
        loadingDiv.innerHTML = `
            <div class="avatar"><ion-icon name="logo-electron"></ion-icon></div>
            <div class="bubble">
                <div class="typing-indicator">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        `;
        chatContainer.appendChild(loadingDiv);
        scrollToBottom();
        return loadingDiv;
    };

    // Handle Form Submit
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const startMessage = chatInput.value.trim();
        if (!startMessage) return;

        // Clear input
        chatInput.value = '';

        // Add User Message
        addMessage(startMessage, 'user');

        // Show loading
        const loadingEl = showLoading();

        try {
            // Send to Backend
            const response = await fetch('api/chat_handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: startMessage })
            });

            const data = await response.json();

            // Remove loading
            loadingEl.remove();

            if (data.status === 'success') {
                addMessage(data.reply, 'ai');
            } else {
                addMessage('Error: ' + (data.message || 'Something went wrong'), 'ai');
            }

        } catch (error) {
            console.error(error);
            loadingEl.remove();
            addMessage('Sorry, I could not reach the server.', 'ai');
        }
    });

    // Load History
    const fetchHistory = async () => {
        try {
            const response = await fetch('api/get_history.php');
            const data = await response.json();
            if (data.status === 'success') {
                data.messages.forEach(msg => {
                    addMessage(msg.content, msg.role);
                });
            }
        } catch (error) {
            console.error('Failed to load history', error);
        }
    };

    fetchHistory();
});
