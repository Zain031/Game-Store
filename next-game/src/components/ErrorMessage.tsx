"use client"
import { useSearchParams } from "next/navigation"

export default function ErrorMessage() {
    const searchParams = useSearchParams()
    const error = searchParams.get('err')

    if (error) {
        return (
            <>
                {error}
            </>
        )
    }
}