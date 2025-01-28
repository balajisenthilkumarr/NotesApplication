// src/components/Navbar.jsx
import { Search } from 'lucide-react';
import Logo from "../logo.webp";
import Profile from "../profile.webp"
function Navbar({ search, setSearch, selectedTags, setSelectedTags, allTags }) {
 return (
   <nav className="bg-white shadow-lg sticky top-0 z-50">
     <div className="max-w-7xl mx-auto px-4 py-4">
       <div className="flex flex-col md:flex-row gap-4 items-center">
        <img src={Logo}  className="h-15 w-15 rounded-full transition-transform transform hover:scale-125"/>
         <span className="text-xl font-bold text-gray-800 whitespace-nowrap">NotesApp</span>
         
         <div className="w-full flex flex-col md:flex-row gap-4 items-center">
           <div className="relative w-full max-w-xl">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
             <input
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               type="search"
               placeholder="Search notes..."
               className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
             />
           </div>
           
           <div className="flex flex-wrap gap-2 justify-center md:justify-start">
             {allTags.map(tag => (
               <button
                 key={tag.name}
                 onClick={() => setSelectedTags(prev => 
                   prev.includes(tag.name) 
                     ? prev.filter(t => t !== tag.name)
                     : [...prev, tag.name]
                 )}
                 className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-colors
                   ${selectedTags.includes(tag.name) 
                     ? 'bg-teal-500 text-white hover:bg-teal-600' 
                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
               >
                 {tag.name}
                 <span className="text-xs opacity-75">({tag.count})</span>
               </button>
             ))}
           </div>
        </div>
        <div className="flex items-center space-x-4 transition-transform transform hover:scale-155">
          <img
            src={Profile} 
            alt="Profile"
            className="h-15 w-17 rounded-full"
          />
         </div>
       </div>
     </div>
   </nav>
 );
}

export default Navbar;