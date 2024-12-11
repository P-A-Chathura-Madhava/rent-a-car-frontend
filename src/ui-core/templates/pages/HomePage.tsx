import Navbar from "@/ui-core/components/organisms/Navbar"
import AboutUsSection from "@/ui-core/layouts/AboutUsSection"
import BookCardSection from "@/ui-core/layouts/BookCardSection"
import BookingStepsSection from "@/ui-core/layouts/BookingStepsSection"
import FeaturedCars from "@/ui-core/layouts/FeaturedCars"
import WelcomeSection from "@/ui-core/layouts/WelcomeSection"

function HomePage() {
  return (
    <div className="mb-80">
        <Navbar />
        <WelcomeSection />
        <BookCardSection />
        <BookingStepsSection />
        <AboutUsSection />
        <FeaturedCars />
    </div>
  )
}

export default HomePage