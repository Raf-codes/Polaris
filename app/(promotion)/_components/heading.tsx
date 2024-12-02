"use client"

import { Button } from "@/components/ui/button"
import { useConvexAuth } from "convex/react"
import { ArrowRight } from "lucide-react"
import { Spinner } from "@/components/spinners"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth()
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Your Ideas, Documents, & Plans Unified. Welcome to <span className="underline">Polaris</span>
        </h1>

        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Polaris is connected workspace where better and faster work happens
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg"/>
          </div>
        )}

        {isAuthenticated && !isLoading && (
          <Button asChild className="group">
            <Link href="/documents">
              Enter Polaris
              <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
            </Link>
          </Button>
        )}

        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button className="group">
              Get Polaris
              <ArrowRight className="transition-transform group-hover:translate-x-1 ml-2" />
            </Button>
          </SignInButton>
        )}
    </div>
  )
}