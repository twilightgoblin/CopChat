"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { API_ENDPOINTS } from "@/utils/api"

export default function OTPVerification({ email, onVerified }) {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleSendOTP = async () => {
    console.log('[OTP] handleSendOTP called with email:', email)
    if (!email) {
      setError("Email is required to send OTP")
      return
    }

    setResendLoading(true)
    setError("")
    try {
      const response = await fetch(API_ENDPOINTS.serviceForms.resendOtp, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
         if (!response.headers.get("content-type")?.includes("application/json")) {
            throw new Error("Server returned an error (status: " + response.status + ") – not JSON.");
         }
         const data = await response.json();
         throw new Error(data.message || 'Failed to send OTP');
      }
  
      const data = await response.json();
  
      setOtp(""); // reset the OTP input
      setError(""); // clear any previous errors
      setOtpSent(true)
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError(error.message || 'Failed to send OTP. Please try again.');
    } finally {
      setResendLoading(false);
    }
  }

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit verification code")
      return
    }

    setLoading(true)
    setError("")

    try {
      console.log('Verifying OTP:', { email, otp })
      const response = await fetch(API_ENDPOINTS.serviceForms.verifyOtp, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp
        })
      })

      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          throw new Error(data.message || 'Failed to verify OTP');
        } else {
          throw new Error(`Server returned an error (status: ${response.status}) – not JSON.`);
        }
      }
      const data = await response.json();
      console.log('Verification response:', data)

      // Set verified state
      setIsVerified(true)
      setError("")
      // Call onVerified with the verified OTP
      onVerified(data.otp)
    } catch (error) {
      console.error('Error verifying OTP:', error)
      setError(error.message || 'Failed to verify OTP. Please try again.')
      setIsVerified(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Button
        onClick={handleSendOTP}
        disabled={resendLoading || !email}
        className="w-full bg-violet-600 hover:bg-violet-700"
      >
        {resendLoading ? "Sending..." : "Send OTP"}
      </Button>
      {otpSent && (
        <div className="space-y-2">
          <Label>Enter Verification Code</Label>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => {
              console.log('OTP input changed:', value)
              setOtp(value)
            }}
            disabled={isVerified}
          >
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, index) => ( <InputOTPSlot key={index} index={index} /> ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
      )}
      {error && (
        <div className="flex items-center text-yellow-600">
          <AlertCircle className="h-4 w-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
      {isVerified && (
        <div className="flex items-center text green-600">
          <CheckCircle2 className="h-4 w-4 mr-1" />
          <span>OTP verified successfully!</span>
        </div>
      )}
      {otpSent && ( (otp.length === 6) && ( !isVerified ) ) && (
        <Button
          onClick={handleVerify}
          disabled={loading}
          className="flex-1 bg-violet-600 hover:bg-violet-700"
        >
          {loading ? "Verifying..." : "Verify"}
        </Button>
      )}
    </div>
  )
} 