import { Button } from "@/components/ui/button"

function BookButton() {
  return (
    <div>
        <Button className="bg-blue-600 text-white font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 border-2 border-transparent hover:border-blue-600">Book Your Ride</Button>
    </div>
  )
}

export default BookButton