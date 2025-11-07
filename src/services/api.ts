// ViaCEP API
export const fetchAddress = async (cep: string) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  
  if (data.erro) {
    throw new Error("CEP não encontrado");
  }
  
  return data;
};

// OpenWeather API
export const fetchWeather = async (city: string) => {
  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Temporário - substituir por secret
  
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},BR&units=metric&lang=pt_br&appid=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error("Não foi possível obter informações do clima");
  }
  
  const data = await response.json();
  
  return {
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    wind_speed: data.wind.speed * 3.6, // Converter m/s para km/h
    city: data.name,
  };
};
