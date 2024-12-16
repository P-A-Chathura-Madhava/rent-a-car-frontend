import BackToTopButton from "@/ui-core/components/atoms/BackToTopButton"
import Navbar from "@/ui-core/components/organisms/Navbar"
import AboutUsSection from "@/ui-core/layouts/AboutUsSection"
import BookCardSection from "@/ui-core/layouts/BookCardSection"
import BookingStepsSection from "@/ui-core/layouts/BookingStepsSection"
import FeaturedCars from "@/ui-core/layouts/FeaturedCars"
import FooterSection from "@/ui-core/layouts/FooterSection"
import WelcomeSection from "@/ui-core/layouts/WelcomeSection"

function HomePage() {
  return (
    <div>
        <Navbar />
        <WelcomeSection />
        <BookCardSection />
        <BookingStepsSection />
        <AboutUsSection />
        <FeaturedCars />
        <FooterSection />
        <BackToTopButton />
    </div>
  )
}

export default HomePage