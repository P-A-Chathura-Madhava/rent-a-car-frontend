import Image from "next/image"
import blobImg from "/public/blob.svg";

function BlobImage() {
  return (
    <Image className="absolute -z-20" src={blobImg} alt="blob-image" height={800} />
  )
}

export default BlobImage