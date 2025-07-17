import { BsDownload } from 'react-icons/bs'

const FabButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-white text-primary p-4 rounded-full shadow-lg hover:bg-primary/80 transition-all"
    >
      <BsDownload size={24} />
    </button>
  )
}

export default FabButton
