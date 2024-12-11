import Navbar from "@/ui-core/components/organisms/Navbar"
import BookCardSection from "@/ui-core/layouts/BookCardSection"
import WelcomeSection from "@/ui-core/layouts/WelcomeSection"

function HomePage() {
  return (
    <div className="mb-80">
        <Navbar />
        <WelcomeSection />
        <BookCardSection />
    </div>
  )
}

export default HomePage