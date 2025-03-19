'use client'
import { useState } from 'react'

interface ValidationRules {
  [key: string]: {
    required?: boolean
    minLength?: number
    pattern?: RegExp
    message: string
  }
}

interface FormErrors {
  [key: string]: string
}

export const useFormValidation = (rules: ValidationRules) => {
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (data: { [key: string]: any }) => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(rules).forEach(field => {
      const value = data[field]
      const rule = rules[field]

      if (rule.required && !value) {
        newErrors[field] = rule.message
        isValid = false
      } else if (rule.minLength && value.length < rule.minLength) {
        newErrors[field] = rule.message
        isValid = false
      } else if (rule.pattern && !rule.pattern.test(value)) {
        newErrors[field] = rule.message
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  return { errors, validate, setErrors }
} 