import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Notification({ message, type = "success", onClose, className = "" }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${
          type === "success" 
            ? "bg-green-100 border-green-500 text-green-800" 
            : "bg-red-100 border-red-500 text-red-800"
        } ${className}`}
      >
        <div className="flex items-center gap-2">
          {type === "success" ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <p className="font-medium">{message}</p>
          <button
            onClick={onClose}
            className={`ml-4 hover:text-opacity-80 ${
              type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            ×
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 