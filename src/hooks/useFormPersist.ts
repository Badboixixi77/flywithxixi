'use client'
import { useState, useEffect } from 'react'

export function useFormPersist<T>(key: string, initialState: T) {
  // Get stored data
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return initialState
    
    try {
      const storedValue = localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialState
    } catch {
      return initialState
    }
  })

  // Update storage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.error('Error saving form:', error)
    }
  }, [key, state])

  // Clear storage
  const clearStorage = () => {
    try {
      localStorage.removeItem(key)
      setState(initialState)
    } catch (error) {
      console.error('Error clearing form:', error)
    }
  }

  return [state, setState, clearStorage] as const
} 