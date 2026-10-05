import { HealthResponse } from '../../shared/types/api';

export default defineEventHandler((event): HealthResponse => {
  return {
    hello: 'world'
  }
})