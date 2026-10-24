import React from "react";
import Link from "next/link";
import { Utensils, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-saffron/15 text-maroon mx-auto flex items-center justify-center">
          <Utensils className="w-10 h-10 text-saffron" />
        </div>

        <span className="font-accent text-3xl text-saffron font-semibold block">
          404 Error
        </span>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-maroon">
          Page Not Found
        </h1>

        <p className="text-sm text-charcoal/70 leading-relaxed">
          The culinary delicacy or page you are looking for does not exist or has been moved.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Button>

          <Button href="/menu" variant="outline" size="md">
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Food Menu</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
