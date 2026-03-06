import { PubSub } from 'graphql-subscriptions'

/*
 * In-memory PubSub for subscriptions (no Redis required for local dev).
 * For production with multiple API instances, switch to RedisPubSub from 'graphql-redis-subscriptions'.
 */
export const pubsub = new PubSub()
