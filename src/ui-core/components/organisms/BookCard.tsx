import BookButton from "../atoms/BookCard/BookButton"
import BookDateButton from "../atoms/BookCard/BookDateButton"
import Seperator from "../atoms/BookCard/Seperator"

function BookCard() {
  return (
    <div className="flex gap-8 justify-center items-center shadow-3xl p-4 rounded-lg">
        <BookDateButton {...{title: "Pick Up Date"}} />
        <Seperator />
        <BookDateButton {...{title: "Return Date"}} />
        <BookButton />
    </div>
  )
}

export default BookCard