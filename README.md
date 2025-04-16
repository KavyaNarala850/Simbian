# ⚡ Simbian Security Comparison UI

This interactive UI simulates how security alerts are handled with and without Simbian. The project highlights the real-time difference in alert processing, showing increased false positives and active threats without automation—and zero threats with Simbian in action.

### 🎬 Thought Process

The component is split into two sections for clarity: "Without Simbian" (where metrics update in real-time using `setInterval`) and "With Simbian" (with clean summaries and a logical flow using motion animations). I aimed to present a visual storytelling experience that mirrors a real-world SOC (Security Operations Center) dashboard.

### ✨ Libraries Used

- **Framer Motion** for rich animations and transitions.
- **Lucide React** for consistent, minimal iconography.
- **Tailwind CSS** (if used) or custom styles for responsiveness.

### 🛠️ Known Issues / Improvements

- Alerts continue updating even when not visible—I'd optimize using `IntersectionObserver` or pause `setInterval` when off-screen.
- Would enhance accessibility and responsiveness on smaller screens.
- Could integrate live data via WebSockets or a backend service.

---

### 🚀 Deployment

Live Link :https://github.com/KavyaNarala850/Simbian.git

To run locally:

```bash
git clone https://github.com/YOUR_USERNAME/with-simbian.git
cd simbian
npm install
npm run dev
