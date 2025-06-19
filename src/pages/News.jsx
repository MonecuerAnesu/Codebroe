import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-6 animate-pulse">Latest News</h1>

        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : newsItems.length === 0 ? (
          <p className="text-gray-400">No news yet. Stay tuned for updates from CodeBro.</p>
        ) : (
          <div className="space-y-6">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-gray-900 rounded-lg p-4 shadow-md">
                {item.imageURL && (
                  <img
                    src={item.imageURL}
                    alt="News"
                    className="w-full h-auto rounded mb-3"
                  />
                )}
                <p className="text-gray-200">{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
