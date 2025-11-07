# Projeto de Integração ViaCEP + OpenWeather

## Sobre o Projeto  
Este projeto realiza a integração entre a **API ViaCEP** (consulta de endereços pelo CEP) e a **API OpenWeather** (informações climáticas).  
A arquitetura utilizada é **ponto a ponto (P2P)** com integração **B2B/I**.

<img width="1900" height="984" alt="localhost_8080_" src="https://github.com/user-attachments/assets/61a10c81-4f74-446e-b229-07e6630bc9ba" />

## Tecnologias Utilizadas  
- Vite  
- TypeScript  
- React  
- Tailwind CSS  
- shadcn-ui  

## Configuração do Projeto  

1. **Clonar o repositório**  
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. **Instalar dependências**  
   ```bash
   npm install
   ```

3. **Executar o projeto**  
   ```bash
   npm run dev
   ```

## Chave da API OpenWeather
Para que o projeto funcione corretamente, é necessário cadastrar uma chave da API OpenWeather e configurá-la no arquivo:

  
```bash
/services/api.ts
```

Exemplo:
```bash
const API_KEY = "SUA_CHAVE_AQUI";
```
