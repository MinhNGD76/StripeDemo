import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51P5X0cEppHi7JioIw1ls4nBLn9Xr77682eOSHHLHpyrSRLfyXpeNV3OtSpnshyLtSVRU2P4iYY86hEfxGkVhEo2l00pCQcLoCi"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}