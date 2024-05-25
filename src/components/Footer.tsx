import { UPDATED_DATE } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">Updated on: {UPDATED_DATE}</p>
      <small className="text-xs">&copy; 2024 Taesok Kwon. All rights reserved.</small>
    </footer>
  )
}
