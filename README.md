# 🤖 Advanced AI Chatbot - Setup Guide

## 📋 Database Configuration

**Current Database Settings:**
- Database Name: `rsk0_08`
- Username: `rsk0_08`
- Password: `123456`
- Host: `localhost`

## 🚀 Installation Steps

### 1. Import Database
1. Open phpMyAdmin or your database management tool
2. Create database `rsk0_08` (if not exists)
3. Import the `database.sql` file
4. The `messages` table will be created automatically

### 2. Configure AI API (Choose ONE - All are FREE!)

Your chatbot now supports **3 FREE AI APIs**. Choose any one:

---

#### ⚡ **OPTION 1: Groq API (RECOMMENDED - Fastest & Free)**

**Why Groq?**
- ✅ Completely FREE
- ✅ Super fast responses (fastest in the market)
- ✅ GPT-4 level intelligence
- ✅ 14,400 requests per day free tier
- ✅ No credit card required

**Setup:**
1. Visit: https://console.groq.com
2. Sign up for free account
3. Go to API Keys section
4. Create new API key (starts with `gsk_`)
5. Open `api/chat_handler.php`
6. Find line: `$groqApiKey = 'gsk_YOUR_GROQ_API_KEY_HERE';`
7. Replace with your actual key: `$groqApiKey = 'gsk_abc123...';`

**Models Available:**
- `mixtral-8x7b-32768` (Recommended - Very intelligent)
- `llama2-70b-4096` (Alternative)
- `gemma-7b-it` (Lightweight)

---

#### 🌐 **OPTION 2: Cohere API (Great Alternative)**

**Why Cohere?**
- ✅ FREE tier available
- ✅ Excellent for conversations
- ✅ 100 requests per minute
- ✅ No credit card required

**Setup:**
1. Visit: https://cohere.com
2. Sign up for free
3. Go to Dashboard → API Keys
4. Copy your API key
5. Open `api/chat_handler.php`
6. Find line: `$cohereApiKey = 'YOUR_COHERE_API_KEY_HERE';`
7. Replace with your key

---

#### 🤗 **OPTION 3: Hugging Face (Open Source Models)**

**Why Hugging Face?**
- ✅ Completely FREE
- ✅ Access to thousands of AI models
- ✅ Open source community
- ✅ No credit card required

**Setup:**
1. Visit: https://huggingface.co/settings/tokens
2. Sign up for free account
3. Create new token (Read access is enough)
4. Copy token (starts with `hf_`)
5. Open `api/chat_handler.php`
6. Find line: `$hfApiKey = 'hf_YOUR_HUGGINGFACE_API_KEY_HERE';`
7. Replace with your token

---

### 3. Test Your Chatbot

1. Upload all files to your web server
2. Make sure `api` folder has proper permissions
3. Open `index.php` in your browser
4. Start chatting!

---

## 🧠 AI Capabilities

Your chatbot is configured to be **extremely intelligent** with knowledge about:

- 🔬 **Science & Technology** - Physics, Chemistry, Biology, Computer Science
- 📚 **History & Culture** - World history, civilizations, cultural facts
- 🌍 **Geography** - Countries, capitals, landmarks, natural features
- 🔢 **Mathematics** - Calculations, formulas, theorems
- 💻 **Programming** - All programming languages, frameworks, algorithms
- 🎨 **Arts & Literature** - Books, authors, art movements
- ⚽ **Sports & Entertainment** - Sports facts, movies, music
- 🌟 **Current Events** - General knowledge about world affairs
- 🧮 **Calculations** - Can solve math problems
- ⏰ **Time & Date** - Current time and date information

---

## 🎯 Features

✅ **Smart Conversation History** - Remembers last 10 messages for context
✅ **Multiple AI Providers** - Automatic fallback if one fails
✅ **Enhanced Knowledge Base** - Works even without API keys
✅ **Fast Responses** - Optimized for speed
✅ **Secure Database** - MySQL with prepared statements
✅ **Beautiful UI** - Modern, responsive design
✅ **Mobile Friendly** - Works on all devices

---

## 🔧 Troubleshooting

### Chatbot not responding?
1. Check database connection in `db.php`
2. Verify database credentials are correct
3. Make sure `messages` table exists
4. Check browser console for errors

### Want better answers?
1. Set up one of the FREE API keys (Groq recommended)
2. The fallback knowledge base works, but APIs provide much better responses

### Database errors?
1. Import `database.sql` file
2. Check database name is `rsk0_08`
3. Verify user has proper permissions

---

## 📝 Files Structure

```
Chatgpt functional/
├── index.php           # Main chatbot interface
├── db.php             # Database connection
├── database.sql       # Database schema
├── style.css          # Styling
├── script.js          # Frontend logic
└── api/
    ├── chat_handler.php   # AI response handler
    └── get_history.php    # Chat history loader
```

---

## 🎨 Customization

### Change AI Personality
Edit the system prompt in `api/chat_handler.php`:
```php
'content' => 'You are an extremely intelligent AI assistant...'
```

### Adjust Response Length
Change `max_tokens` value:
```php
'max_tokens' => 2000  // Increase for longer responses
```

### Add More Knowledge
Expand the fallback knowledge base in the `FALLBACK` section of `chat_handler.php`

---

## 🌟 Pro Tips

1. **Groq is fastest** - Use it for real-time conversations
2. **Cohere is best for chat** - Natural conversation flow
3. **Hugging Face** - Best if you want to experiment with different models
4. **No API Key?** - The enhanced fallback still provides intelligent responses!

---

## 📞 Support

If you need help:
1. Check the troubleshooting section
2. Verify all files are uploaded correctly
3. Check database connection
4. Make sure PHP version is 7.4 or higher

---

## 🔐 Security Notes

- Database credentials are in `db.php` - keep this file secure
- API keys should never be shared publicly
- The chatbot uses prepared statements to prevent SQL injection
- All user inputs are sanitized

---

## 🎉 Enjoy Your Intelligent AI Chatbot!

Your chatbot now has access to vast knowledge and can answer questions about virtually anything in the world!

**Remember:** For the BEST experience, set up a FREE Groq API key - it takes only 2 minutes!
