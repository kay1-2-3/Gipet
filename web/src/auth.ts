/**
 * Auth setup for dbAuth (self-hosted cookie-based auth).
 * Exposes AuthProvider and useAuth for the app.
 */
import { createAuthentication } from '@redwoodjs/auth'

const getAuthUrl = () => {
  if (typeof window !== 'undefined') {
    const base = (window as unknown as { RWJS_API_GRAPHQL_URL?: string }).RWJS_API_GRAPHQL_URL
    if (base) {
      return base.replace(/\/graphql$/, '/auth')
    }
    return '/api/auth'
  }
  return '/api/auth'
}

const dbAuthClient = {
  type: 'dbAuth' as const,
  client: undefined,

  getToken: async () => {
    return null
  },

  login: async ({ username, password }: { username: string; password: string }) => {
    const response = await fetch(getAuthUrl(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'login', username, password }),
    })
    const data = await response.json()
    if (!response.ok || data?.error) {
      throw new Error(data?.error || data?.message || 'Login failed')
    }
    return data
  },

  signup: async ({
    username,
    password,
    ...rest
  }: {
    username: string
    password: string
    [key: string]: unknown
  }) => {
    const response = await fetch(getAuthUrl(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'signup', username, password, ...rest }),
    })
    const data = await response.json()
    if (!response.ok || data?.error) {
      throw new Error(data?.error || data?.message || 'Signup failed')
    }
    return data
  },

  logout: async () => {
    const response = await fetch(getAuthUrl(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'logout' }),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data?.error || 'Logout failed')
    }
    return data
  },

  forgotPassword: async (username: string) => {
    const response = await fetch(getAuthUrl(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'forgotPassword', username }),
    })
    const data = await response.json()
    if (!response.ok || data?.error) {
      throw new Error(data?.error || data?.message || 'Forgot password failed')
    }
    return data
  },

  resetPassword: async ({
    resetToken,
    password,
  }: {
    resetToken: string
    password: string
  }) => {
    const response = await fetch(getAuthUrl(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'resetPassword', resetToken, password }),
    })
    const data = await response.json()
    if (!response.ok || data?.error) {
      throw new Error(data?.error || data?.message || 'Reset password failed')
    }
    return data
  },

  validateResetToken: async (resetToken: string) => {
    const response = await fetch(getAuthUrl(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'validateResetToken', resetToken }),
    })
    const data = await response.json()
    if (!response.ok || data?.error) {
      throw new Error(data?.error || 'Invalid reset token')
    }
    return data
  },
}

export const { AuthProvider, useAuth } = createAuthentication(dbAuthClient)
