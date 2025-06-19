import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [portfolio, setPortfolio] = useState({ title: '', link: '', file: null });
  const [news, setNews] = useState({ content: '', file: null });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        navigate('/admin');
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, []);

  const handleUpload = async (e, type) => {
    e.preventDefault();
    setLoading(true);

    const data = type === 'portfolio' ? portfolio : news;
    const fileRef = ref(storage, `${type}/${data.file.name}`);
    await uploadBytes(fileRef, data.file);
    const url = await getDownloadURL(fileRef);

    const docData = type === 'portfolio'
      ? { title: data.title, link: data.link, imageURL: url }
      : { content: data.content, imageURL: url };

    await addDoc(collection(db, type), docData);

    alert(`${type} post added!`);
    setPortfolio({ title: '', link: '', file: null });
    setNews({ content: '', file: null });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl text-accent font-bold">Admin Dashboard</h1>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {loading && <LoadingSpinner />}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Portfolio Upload */}
        <form onSubmit={(e) => handleUpload(e, 'portfolio')} className="bg-gray-900 p-4 rounded">
          <h2 className="text-xl font-semibold text-accent mb-2">Upload Portfolio</h2>
          <input
            type="text"
            placeholder="Title"
            value={portfolio.title}
            onChange={(e) => setPortfolio({ ...portfolio, title: e.target.value })}
            className="w-full p-2 mb-2 bg-black border border-gray-600 rounded"
            required
          />
          <input
            type="text"
            placeholder="Project Link"
            value={portfolio.link}
            onChange={(e) => setPortfolio({ ...portfolio, link: e.target.value })}
            className="w-full p-2 mb-2 bg-black border border-gray-600 rounded"
            required
          />
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setPortfolio({ ...portfolio, file: e.target.files[0] })}
            className="mb-2"
            required
          />
          <button type="submit" className="bg-accent text-black px-4 py-2 rounded hover:bg-white">
            Upload
          </button>
        </form>

        {/* News Upload */}
        <form onSubmit={(e) => handleUpload(e, 'news')} className="bg-gray-900 p-4 rounded">
          <h2 className="text-xl font-semibold text-accent mb-2">Post News</h2>
          <textarea
            placeholder="News content..."
            value={news.content}
            onChange={(e) => setNews({ ...news, content: e.target.value })}
            className="w-full p-2 mb-2 bg-black border border-gray-600 rounded"
            rows="4"
            required
          />
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setNews({ ...news, file: e.target.files[0] })}
            className="mb-2"
            required
          />
          <button type="submit" className="bg-accent text-black px-4 py-2 rounded hover:bg-white">
            Post News
          </button>
        </form>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center my-4">
      <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
