// App.jsx
import { useState, useEffect } from "react";
import { notesApi } from "./api/notesApi";
import Navbar from "./components/Navbar";
import NotesList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";
import NoteForm from "./components/NoteForm";
import { Plus } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotesAndTags = async () => {
    try {
      setLoading(true);
      const [notesData, tagsData] = await Promise.all([
        notesApi.getAllNotes(search, selectedTags),
        notesApi.getAllTags(),
      ]);
      setNotes(notesData);
      setAllTags(tagsData);
      setError(null);
    } catch (err) {
      setError("Failed to fetch notes or tags");
      toast.error("Failed to fetch notes or tags");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotesAndTags();
  }, [search, selectedTags]);

  const handleSave = async (noteData) => {
    try {
      setLoading(true);
      if (selectedNote?.isEditing) {
        await notesApi.updateNote(selectedNote._id, noteData);
        setSelectedNote(null);
        toast.success("Note updated successfully");
      } else {
        await notesApi.createNote(noteData);
        toast.success("Note created successfully");
      }
      // Optimistically update UI
      await fetchNotesAndTags();
      setIsCreating(false);
      setError(null);
    } catch (err) {
      setError("Failed to save note");
      toast.error("Failed to save note");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      // Optimistically remove note from state
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      await notesApi.deleteNote(id);
      setSelectedNote(null);
      toast.success("Note deleted successfully");
      await fetchNotesAndTags();
    } catch (err) {
      setError("Failed to delete note");
      toast.error("Failed to delete note");
      // Revert optimistic update if deletion fails
      fetchNotesAndTags();
    } finally {
      setLoading(false);
    }
  };

  const notify = () => {
    if(!isCreating)
    toast.info("Add new notes", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <Navbar
        search={search}
        setSearch={setSearch}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        allTags={allTags}
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <div className="flex gap-6">
          <div className="w-1/3">
            <div className="bg-gray-300 rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Notes</h2>
                <button
                  onClick={() => {
                    setIsCreating(true);
                    setSelectedNote(null);
                    notify();
                  }}
                  className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
                >
                  <Plus size={20} />
                </button>
              </div>
              <NotesList
                notes={notes}
                selectedNote={selectedNote}
                onSelectNote={(note) => {
                  setSelectedNote(note);
                  setIsCreating(false);
                }}
                onDelete={handleDelete}
                loading={loading}
              />
            </div>
          </div>
          <div className="w-2/3">
            {isCreating ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Create New Note
                </h2>
                <NoteForm
                  onSave={handleSave}
                  onCancel={() => {
                    setIsCreating(false);
                   }}
                  disabled={loading}
                />
              </div>
            ) : selectedNote ? (
              selectedNote.isEditing ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Edit Note
                  </h2>
                  <NoteForm
                    note={selectedNote}
                    onSave={handleSave}
                    onCancel={() => {
                      setSelectedNote((prev) => ({
                        ...prev,
                        isEditing: false,
                      }));
                    }}
                    disabled={loading}
                  />
                </div>
              ) : (
                <NoteDetail
                  note={selectedNote}
                  onEdit={(note) => setSelectedNote({ ...note, isEditing: true })}
                  onDelete={handleDelete}
                />
              )
            ) : (
              <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-md">
                <p className="text-gray-500">Select a note to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
