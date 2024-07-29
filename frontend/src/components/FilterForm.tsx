import React, { useState } from 'react';

interface Props {
  onFilter: (filters: {
    limit: number;
    maxLength: number;
    minLength: number;
    tags: string;
    author: string;
    authorId: string;
  }) => void;
}

const FilterForm: React.FC<Props> = ({ onFilter }) => {
  const [limit, setLimit] = useState<number>(1);
  const [maxLength, setMaxLength] = useState<number>(1000);
  const [minLength, setMinLength] = useState<number>(0);
  const [tags, setTags] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [authorId, setAuthorId] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ limit, maxLength, minLength, tags, author, authorId });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Filter Quotes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Limit</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Length</label>
          <input
            type="number"
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Min Length</label>
          <input
            type="number"
            value={minLength}
            onChange={(e) => setMinLength(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Author ID</label>
          <input
            type="number"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            min="1"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
      >
        Next
      </button>
    </form>
  );
};

export default FilterForm;
