"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MockupProps {
  className?: string;
  theme?: "light" | "dark";
}

export function Mockup({ className, theme = "light" }: MockupProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative w-full max-w-[1200px] mx-auto rounded-xl overflow-hidden border",
        isDark ? "bg-[#1a1a1a] border-gray-800" : "bg-white border-gray-200",
        className
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "h-12 flex items-center px-4 border-b",
          isDark ? "border-gray-800" : "border-gray-200"
        )}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5390]" />
          <div className="w-3 h-3 rounded-full bg-[#F5B341]" />
          <div className="w-3 h-3 rounded-full bg-[#68AF6B]" />
        </div>
        <div
          className={cn(
            "mx-auto text-sm font-medium",
            isDark ? "text-gray-400" : "text-gray-500"
          )}
        >
          traffik.app
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Search Bar */}
        <div
          className={cn(
            "h-12 rounded-lg mb-6 relative overflow-hidden",
            isDark ? "bg-gray-800" : "bg-gray-100"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5390] via-[#F5B341] to-[#68AF6B] opacity-10" />
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-lg overflow-hidden relative",
                isDark ? "bg-gray-800" : "bg-gray-100"
              )}
            >
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5390] via-[#F5B341] to-[#68AF6B] opacity-20" />
              </div>
              <div className="p-4">
                <div
                  className={cn(
                    "h-4 w-3/4 rounded mb-2",
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  )}
                />
                <div
                  className={cn(
                    "h-4 w-1/2 rounded",
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {["All", "Fashion", "Electronics", "Home", "Beauty"].map(
            (category, index) => {
              const colors = [
                "from-[#FF5390] to-[#F5B341]",
                "from-[#F5B341] to-[#68AF6B]",
                "from-[#68AF6B] to-[#FF5390]",
                "from-[#FF5390] to-[#68AF6B]",
                "from-[#F5B341] to-[#FF5390]",
              ];
              return (
                <div
                  key={category}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm whitespace-nowrap relative overflow-hidden group",
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  )}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      colors[index % colors.length]
                    } opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <span className="relative">{category}</span>
                </div>
              );
            }
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "rounded-lg overflow-hidden relative group",
                isDark ? "bg-gray-800" : "bg-gray-100"
              )}
            >
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5390] via-[#F5B341] to-[#68AF6B] opacity-20 group-hover:opacity-30 transition-opacity" />
              </div>
              <div className="p-3">
                <div
                  className={cn(
                    "h-3 w-3/4 rounded mb-2",
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  )}
                />
                <div
                  className={cn(
                    "h-3 w-1/2 rounded",
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className={cn(
          "h-16 border-t flex items-center justify-around px-4",
          isDark ? "border-gray-800" : "border-gray-200"
        )}
      >
        {["Home", "Search", "Cart", "Profile"].map((item, index) => {
          const colors = [
            "from-[#FF5390] to-[#F5B341]",
            "from-[#F5B341] to-[#68AF6B]",
            "from-[#68AF6B] to-[#FF5390]",
            "from-[#FF5390] to-[#68AF6B]",
          ];
          return (
            <div
              key={item}
              className={cn(
                "flex flex-col items-center relative group",
                isDark ? "text-gray-400" : "text-gray-500"
              )}
            >
              <div className="relative">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full mb-1 relative overflow-hidden",
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  )}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      colors[index % colors.length]
                    } opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                </div>
              </div>
              <span className="text-xs">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
