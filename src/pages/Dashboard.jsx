// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) return alert('Please select an image or video file');
    if (!title || !desc) return alert('Fill in all fields');

    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user || user.email !== 'socialmediametaplatform@gmail.com') {
      alert('Access denied.');
      return navigate('/admin');
    }

    const storage = getStorage();
    const db = getFirestore();
    const storageRef = ref(storage, `media/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.error(error);
        setLoading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, 'posts'), {
          title,
          desc,
          mediaUrl: downloadURL,
          timestamp: serverTimestamp(),
          type: file.type.startsWith('video') ? 'video' : 'image',
        });
        setLoading(false);
        setSuccess(true);
        setTitle('');
        setDesc('');
        setFile(null);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-accent mb-6 text-center">Admin Dashboard</h2>

        {success && (
          <div className="bg-green-600 text-white p-2 rounded mb-4 text-center">
            Post uploaded successfully!
          </div>
        )}

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <input
            type="file"
            accept="image/*,video/*"
            className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-accent file:text-white hover:file:bg-pink-600"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-accent hover:bg-pink-600 text-white py-2 rounded font-semibold"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Post'}
          </button>
        </form>
      </div>
    </div>
  );
}
