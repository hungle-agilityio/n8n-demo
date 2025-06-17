# n8n Self-Hosted

This repository contains the configuration and setup for a self-hosted instance of [n8n](https://n8n.io), an open-source workflow automation tool.

## Features

- Automate workflows with ease.
- Self-hosted for full control over your data.
- Extendable with custom nodes and integrations.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (optional for containerized deployment)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/hungle-agilityio/n8n-demo.git
   cd n8n-selfhost
   ```

2. Install the node into your local n8n instance

   ```bash
   npm link n8n-nodes-cityweather
   ```

3. Start the application:

   ```bash
   docker-compose up -d
   ```

4. Open browser with path: http://localhost:5678/

## Custom Node for n8n

This project contains custom nodes for n8n, including the new `CityWeather` node. Follow the steps below to build and run the custom node.

---

- Install Dependencies: Run the following command to install project dependencies:
  ```bash
  cd n8n-custom
  npm install
  ```
- When you are ready to test your node, publish it locally:
  ```bash
  npm run build
  npm link
  ```
- Note: Restart docker for local n8n

## Contributing

Feel free to open issues or submit pull requests to improve this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
