# 🧠 Mental Wellness & Burnout Prevention System

**CSE 327 - Software Engineering Project**  
**North South University | Spring 2025**

A proactive mental wellness companion for university students that uses AI agents to recognize early signs of burnout and provide personalized support.

---

## 📋 Project Overview

### Problem Statement
University students face increasing mental health challenges but often lack tools for early intervention and personalized support. This system provides proactive wellness monitoring and burnout prevention through AI-powered agents.

### Solution
An intelligent web application featuring 5 autonomous AI agents that work together to:
- Monitor wellness patterns and detect stress signals
- Balance academic workload with personal capacity
- Suggest personalized self-care activities
- Connect students with campus mental health resources
- Encourage meaningful social connections

---

## 🤖 The Five AI Agents

1. **Wellness Monitor Agent**
   - Analyzes behavioral patterns and mood trends
   - Detects early signs of burnout
   - Generates personalized wellness scores

2. **Workload Balancer Agent**
   - Integrates with academic calendars
   - Identifies high-stress periods
   - Suggests optimal task scheduling

3. **Self-Care Advisor Agent**
   - Recommends activities based on mood and energy
   - Personalizes suggestions using ML
   - Tracks self-care completion

4. **Resource Navigator Agent**
   - Maintains database of campus mental health resources
   - Matches students with appropriate support
   - Provides crisis intervention access

5. **Social Connection Agent**
   - Detects social isolation patterns
   - Suggests connection opportunities
   - Facilitates peer support groups

---

## 🎨 Current Progress (Week 6)

### ✅ Completed Features

**Frontend (React):**
- ✅ Dashboard with wellness score and quick mood check
- ✅ 3-step check-in flow (mood → energy → concerns)
- ✅ Journal page (manual entries + automatic check-in logging)
- ✅ Resources page (categorized mental health resources)
- ✅ Profile page (user stats, wellness history chart)
- ✅ Explore page (AI agent recommendations with filters)
- ✅ Full navigation system
- ✅ localStorage integration (data persistence)
- ✅ Responsive design (mobile-first, 480px max-width)

**Design:**
- ✅ 9-screen Figma prototype
- ✅ Purple/teal color palette
- ✅ Consistent UI/UX across all pages

**Project Management:**
- ✅ GitHub repository
- ✅ Trello board
- ✅ Weekly sprint planning

---

## 🛠️ Current Tech Stack
```
Frontend:
- React 18.x
- React Router DOM (navigation)
- React Icons (UI icons)
- CSS3 (styling)

Development:
- Node.js v24.14.0
- Create React App
- Git & GitHub

Design:
- Figma (prototyping)
```

---

## 🔮 Backend Options (Team Decision Needed)

We need to choose our backend technology. Here are three viable options:

### Option 1: Node.js + Express ⭐ **(Recommended)**

**Tech Stack:**
```
Backend: Node.js + Express
Database: PostgreSQL (or MongoDB)
AI/ML: Hugging Face API
ORM: Prisma (PostgreSQL) or Mongoose (MongoDB)
Auth: JWT + bcrypt
```

**Pros:**
- ✅ JavaScript everywhere (same language as React)
- ✅ Huge ecosystem and community
- ✅ Industry standard for modern web apps
- ✅ Easy API development
- ✅ Great integration with React
- ✅ Team can use one language for full stack

**Cons:**
- ❌ Less structure than Django (requires discipline)
- ❌ Callback complexity (mitigated with async/await)

**Learning Curve:** Low-Medium  
**Best For:** JavaScript-focused teams, API-first architecture

---

### Option 2: Django + Django REST Framework

**Tech Stack:**
```
Backend: Django + Django REST Framework
Database: PostgreSQL
AI/ML: Hugging Face API
ORM: Django ORM (built-in)
Auth: Django Auth + JWT
```

**Pros:**
- ✅ Still Python (if team prefers)
- ✅ More structured than Flask
- ✅ Built-in admin panel
- ✅ Excellent ORM
- ✅ "Batteries included" philosophy
- ✅ Strong security features

**Cons:**
- ❌ Heavier framework (more boilerplate)
- ❌ Steeper learning curve
- ❌ Different language from frontend

**Learning Curve:** Medium-High  
**Best For:** Python-experienced teams, structured projects

---

### Option 3: Supabase (Backend-as-a-Service)

**Tech Stack:**
```
Backend: Supabase (managed)
Database: PostgreSQL (included)
AI/ML: Hugging Face API + Edge Functions
Auth: Supabase Auth (built-in)
Storage: Supabase Storage
```

**Pros:**
- ✅ No backend code needed
- ✅ Instant PostgreSQL database
- ✅ Built-in authentication
- ✅ Real-time subscriptions
- ✅ Very fast development
- ✅ Free tier available

**Cons:**
- ❌ Less control over backend
- ❌ Vendor lock-in
- ❌ May seem like "taking shortcuts" academically
- ❌ Limited customization

**Learning Curve:** Low  
**Best For:** Fast MVPs, but risky for academic evaluation

---

## 📊 Comparison Table

| Feature | Node.js + Express | Django | Supabase |
|---------|------------------|--------|----------|
| **Language** | JavaScript | Python | JavaScript |
| **Learning Curve** | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Industry Use** | ✅✅✅ | ✅✅✅ | ✅✅ |
| **Control** | High | High | Medium |
| **Setup Time** | Fast | Medium | Very Fast |
| **Academic Credit** | ✅✅✅ | ✅✅✅ | ✅✅ |
| **Team Skill** | TBD | TBD | TBD |

---

## 💻 Setup Instructions

### Prerequisites
- Node.js v24.14.0 or higher
- Git
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd wellness-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

---

## 📁 Project Structure
```
wellness-app/
├── public/              # Static files
├── src/
│   ├── App.js          # Main app component with routing
│   ├── App.css         # Global styles
│   ├── Dashboard.js    # Dashboard page
│   ├── Dashboard.css
│   ├── CheckIn.js      # Check-in flow (3 steps)
│   ├── CheckIn.css
│   ├── Journal.js      # Journal entries page
│   ├── Journal.css
│   ├── Resources.js    # Mental health resources
│   ├── Resources.css
│   ├── Profile.js      # User profile & stats
│   ├── Profile.css
│   ├── Explore.js      # AI recommendations
│   ├── Explore.css
│   └── images/         # Local images
├── package.json
└── README.md
```

---

## 🎯 Next Steps (Weeks 7-12)

### Phase 1: Backend Setup (Weeks 7-8)
- [ ] **TEAM DECISION:** Choose backend technology
- [ ] Set up backend project structure
- [ ] Configure database (PostgreSQL)
- [ ] Create user authentication system
- [ ] Build REST API endpoints

### Phase 2: AI Integration (Weeks 9-10)
- [ ] Set up Hugging Face API
- [ ] Implement Wellness Monitor Agent (sentiment analysis)
- [ ] Implement Self-Care Advisor Agent (text generation)
- [ ] Create rule-based logic for simpler agents
- [ ] Test AI agent responses

### Phase 3: Connect Frontend to Backend (Week 11)
- [ ] Replace localStorage with API calls
- [ ] Implement user authentication flow
- [ ] Connect all pages to backend
- [ ] Real-time wellness score calculation
- [ ] Test full user journey

### Phase 4: Deployment & Testing (Week 12)
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Deploy backend (Railway/Render/Heroku)
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Final presentation preparation

---

## 👥 Team Roles & Contributions

**Note:** All team members should have visible Git commits. Tasks will be distributed based on:
- Backend technology choice
- Individual strengths
- Weekly sprint planning

### Potential Task Distribution
*(To be finalized after backend decision)*

**Frontend Tasks:**
- Polish UI/UX
- Add animations and transitions
- Implement error handling
- Create loading states
- Add image assets

**Backend Tasks:**
- API endpoint development
- Database schema design
- Authentication implementation
- AI agent integration
- API documentation

**Integration Tasks:**
- Connect frontend to backend
- Testing and debugging
- Deployment configuration
- Performance optimization

---

## 📚 Resources

### Course Materials
- Sommerville - Software Engineering (Textbook)
- Pressman & Maxim - Software Engineering (Textbook)
- Professor RSY's lecture notes

### Technical Documentation
- [React Docs](https://react.dev/)
- [Node.js Docs](https://nodejs.org/docs/) *(if chosen)*
- [Django Docs](https://docs.djangoproject.com/) *(if chosen)*
- [Supabase Docs](https://supabase.com/docs) *(if chosen)*
- [Hugging Face API](https://huggingface.co/docs/api-inference)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

### Project Management
- [Trello Board](YOUR-TRELLO-LINK)
- [Figma Prototype](YOUR-FIGMA-LINK)

---

## 🤝 Contributing

### Git Workflow

1. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make changes and commit**
```bash
git add .
git commit -m "Description of changes"
```

3. **Push to GitHub**
```bash
git push origin feature/your-feature-name
```

4. **Create Pull Request on GitHub**

### Commit Message Guidelines
- Use clear, descriptive messages
- Start with verb: "Add", "Fix", "Update", "Remove"
- Example: `Add user authentication endpoint`

---

## 📞 Team Contact

- **Project Lead:** [Your Name]
- **Team Members:** [Member 2], [Member 3]
- **Professor:** Reeshoon Sayera (RSY)
- **Office Hours:** Thu & Sat 9:30-11:20am
- **Email:** reeshoon.sayera@northsouth.edu

---

## 📝 License

This project is for academic purposes as part of CSE 327 at North South University.

---

## 🙏 Acknowledgments

- Professor Reeshoon Sayera for project guidance
- North South University CSE Department
- Anthropic Claude for development assistance
- Figma community for design inspiration

---

**Last Updated:** March 11, 2026  
**Current Sprint:** Week 6 - Frontend MVP Complete  
**Next Milestone:** Backend Technology Selection & Setup
