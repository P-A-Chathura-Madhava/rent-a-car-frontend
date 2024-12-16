function BookingStepCard({...props}) {
  return (
    <div className="flex flex-col items-center w-60">
        <div className="text-3xl text-blue-600 shadow-3xl p-4 rounded-md mb-3">{props?.icon}</div>
        <h4 className="font-bold">{props?.title}</h4>
        <p className="text-sm text-justify">{props?.description}</p>
    </div>
  )
}

export default BookingStepCard