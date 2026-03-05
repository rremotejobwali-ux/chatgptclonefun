<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intelligent AI Assistant - Ask Anything</title>
    <link rel="stylesheet" href="style.css">
    <!-- Ionicons for neat icons -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body>

    <!-- Mobile Header -->
    <div class="mobile-header">
        <div class="logo"><span>AI</span>Chat</div>
        <button id="menu-btn" style="background:none; border:none; color:white; font-size:1.5rem;">
            <ion-icon name="menu-outline"></ion-icon>
        </button>
    </div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="logo">
            <ion-icon name="planet"></ion-icon>
            <span>AI</span>Chatbot
        </div>
        
        <button class="new-chat-btn" onclick="window.location.reload()">
            <ion-icon name="add-outline"></ion-icon>
            New Chat
        </button>

        <div class="history-list" id="history-list">
            <!-- History items will be populated by JS -->
            <div class="history-item">Previous Conversation...</div>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <div class="chat-container" id="chat-container">
            <!-- Welcome Message -->
            <div class="message ai">
                <div class="avatar"><ion-icon name="logo-electron"></ion-icon></div>
                <div class="bubble">
                    <strong>🌟 Welcome to Your Intelligent AI Assistant!</strong><br><br>
                    I have comprehensive knowledge about <strong>everything in the world</strong>:<br><br>
                    🔬 Science & Technology<br>
                    📚 History & Culture<br>
                    🌍 Geography & Nature<br>
                    🔢 Mathematics & Calculations<br>
                    💻 Programming & Development<br>
                    🎨 Arts & Literature<br>
                    ⚽ Sports & Entertainment<br>
                    🧠 And much more!<br><br>
                    <em>Ask me anything - I'm here to provide accurate, detailed answers to all your questions!</em>
                </div>
            </div>
        </div>

        <!-- Input Area -->
        <div class="input-area">
            <form class="input-wrapper" id="chat-form">
                <input type="text" id="chat-input" placeholder="Type your message..." autocomplete="off">
                <button type="submit" id="send-btn">
                    <ion-icon name="send"></ion-icon>
                </button>
            </form>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
