"use client";

import { motion } from "framer-motion";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export function ToastNotification({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto dismiss after 5 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed bottom-24 left-6 w-80 h-24 rounded-xl border p-6 flex items-center gap-4 shadow-2xl backdrop-blur-sm ${
        type === "success"
          ? "border-green-500/40 bg-green-500/10"
          : "border-red-500/40 bg-red-500/10"
      }`}
    >
      {/* Icon */}
      <div className="shrink-0 flex items-center justify-center">
        {type === "success" ? (
          <CheckCircle2 className="h-8 w-8 text-green-400" />
        ) : (
          <AlertCircle className="h-8 w-8 text-red-400" />
        )}
      </div>

      {/* Message */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium leading-relaxed ${
            type === "success" ? "text-green-300" : "text-red-300"
          }`}
        >
          {message}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className={`shrink-0 hover:opacity-70 transition-opacity ${
          type === "success" ? "text-green-400" : "text-red-400"
        }`}
      >
        <X className="h-5 w-5" />
      </button>
    </motion.div>
  );
}