import Navbar from "@/ui-core/components/organisms/Navbar"
import BookCardSection from "@/ui-core/layouts/BookCardSection"
import BookingStepsSection from "@/ui-core/layouts/BookingStepsSection"
import WelcomeSection from "@/ui-core/layouts/WelcomeSection"

function HomePage() {
  return (
    <div className="mb-80">
        <Navbar />
        <WelcomeSection />
        <BookCardSection />
        <BookingStepsSection />
    </div>
  )
}

export default HomePage