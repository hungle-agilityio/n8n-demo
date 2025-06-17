import {
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';

export class CityWeather implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'City Weather',
    name: 'CityWeather',
    icon: 'file:cityweather.svg',
    group: ['transform'],
    version: 1,
    subtitle: 'Get City Weather',
    description: 'Get data from OpenWeatherMap API',
    defaults: {
      name: 'City Weather',
    },
    inputs: ['main' as NodeConnectionType],
    outputs: ['main' as NodeConnectionType],
    credentials: [
      {
        name: 'CityWeatherApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: 'https://api.openweathermap.org/data/2.5/weather',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    properties: [
      {
        displayName: 'City',
        name: 'city',
        type: 'string',
        default: 'Da Nang',
        required: true,
        description: 'The city to get weather for',
        routing: {
          request: {
            qs: {
              q: '={{$value}}',
            },
          },
        },
      },
      {
        displayName: 'Units',
        name: 'units',
        type: 'options',
        options: [
          { name: 'Metric (°C)', value: 'metric' },
          { name: 'Imperial (°F)', value: 'imperial' },
        ],
        default: 'metric',
        routing: {
          request: {
            qs: {
              units: '={{$value}}',
            },
          },
        },
      },
    ],
  };
}
