# WeatherCEP
 
> Search any Brazilian ZIP code to instantly get the full address and real-time weather conditions for that city.
 
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

![Project Preview](https://github.com/user-attachments/assets/61a10c81-4f74-446e-b229-07e6630bc9ba)

## 🎯 About
 
WeatherCEP is a React app that combines two public APIs in a single search flow: enter a Brazilian ZIP code (CEP), get the full address from **ViaCEP**, and immediately see the current weather for that city from **OpenWeather** — temperature, feels-like, humidity, wind speed, and conditions description.
 
## ✨ Features
 
- 🔍 **CEP Lookup** — Fetches address data (street, neighborhood, city, state) from the ViaCEP API
- 🌤️ **Real-Time Weather** — Retrieves current weather for the city returned by the CEP query
- 🎭 **Auto-Format Input** — CEP input automatically formats to `00000-000` as the user types
- 📋 **Dual-Card Result** — Address and weather displayed side by side in responsive cards
- 🔔 **Toast Notifications** — User-friendly error feedback for invalid CEPs or missing API key
- 📱 **Responsive Layout** — Stacked on mobile, side-by-side grid on larger screens
 
## 🛠️ Built With
 
- **React 18** + **TypeScript** — Component architecture with typed props and API responses
- **Tailwind CSS** + **shadcn/ui** — UI components (Card, Input, Button, Toast) built on Radix UI
- **ViaCEP API** — Free public API for Brazilian ZIP code lookups (no key required)
- **OpenWeather API** — Current weather data by city name (free tier, key required)
- **Lucide React** — Icon set used throughout the UI
- **Vite** — Build tool and dev server
 
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js >= 18
- A free OpenWeather API key — [get one here](https://openweathermap.org/api)
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/Luan-Neumann-Dev/cep-weather.git
 
# Navigate to project directory
cd cep-weather
 
# Install dependencies
npm install
```
 
### API Key Setup
 
Open `src/services/api.ts` and replace the placeholder with your OpenWeather key:
 
```ts
const API_KEY = "your_openweather_api_key_here";
```
 
```bash
# Start the dev server
npm run dev
```
 
Open [http://localhost:8080](http://localhost:8080) in your browser.
 
## 📁 Project Structure
 
```
cep-weather/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx     # CEP input with auto-format and validation
│   │   ├── AddressCard.tsx   # Displays ViaCEP result
│   │   └── WeatherCard.tsx   # Displays OpenWeather result
│   ├── services/
│   │   └── api.ts            # fetchAddress() and fetchWeather() functions
│   ├── pages/
│   │   ├── Index.tsx         # Main page — orchestrates search and state
│   │   └── NotFound.tsx      # 404 fallback
│   └── App.tsx
```
 
## 📝 Notes
 
- The ViaCEP API is free and requires no authentication
- The OpenWeather free tier allows up to 60 requests/minute — sufficient for local use
- Weather is queried using the **city name** extracted from the CEP response, which may occasionally not match a valid OpenWeather city name for smaller municipalities
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
 
## 👤 Author
 
**Luan Neumann**
 
- LinkedIn: [luan-neumann-dev](https://www.linkedin.com/in/luan-neumann-dev/)
- GitHub: [@Luan-Neumann-Dev](https://github.com/Luan-Neumann-Dev)
 
---
 
⭐ If you found this project helpful, consider giving it a star!
