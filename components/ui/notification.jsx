import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Notification({ message, type = "success", onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}
      >
        <div className="flex items-center gap-2">
          {type === "success" ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
          <p className="font-medium">{message}</p>
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 