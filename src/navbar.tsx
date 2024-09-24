

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Paaras</h1>  {/* Added name */}
       {/* Placeholder for photo upload */}
      <div className="space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a> {/* GitHub link */}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a> {/* LinkedIn link */}
      </div>
    </div>
  )
}

export default Navbar
