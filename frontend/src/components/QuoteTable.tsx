// src/components/QuoteTable.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterForm from './FilterForm';
import QuoteRow from './QuoteRow';
import { URL } from '../consts/path';

interface Quote {
    id: number;
    content: string;
    author: string;
    tags: string[];
}

const QuoteTable: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [filters, setFilters] = useState({
        limit: 1,
        maxLength: 1000,
        minLength: 0,
        tags: '',
        author: '',
        authorId: '',
    });
    const [seenQuotes, setSeenQuotes] = useState<Quote[]>([]);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': "abcdefg" // this token value is const value
      };
    const fetchQuotes = async () => {
        try {
            const response = await axios.get<Quote[]>(`${URL}?`, {
                params: {
                    limit: filters.limit,
                    maxLength: filters.maxLength,
                    minLength: filters.minLength,
                    tags: filters.tags,
                    author: filters.author,
                    authorId: filters.authorId,
                },
                headers: headers
            });
            setQuotes(response.data);
        } catch (error) {
            console.error('Error fetching quotes:', error);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, [filters]);

    const handleSeen = (quote: Quote) => {
        setSeenQuotes((prev) => {
            const newSeenQuotes = [...prev, quote];
            if (newSeenQuotes.length > 100) newSeenQuotes.shift();
            return newSeenQuotes;
        });
    };
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-6">Random Quotes</h1>
            <div className="overflow-x-auto">
                <FilterForm onFilter={setFilters} />
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                            <th className="w-3/10 py-3 px-4 uppercase font-semibold text-sm text-center">Author</th>
                            <th className="w-4/10 py-3 px-4 uppercase font-semibold text-sm text-center">Content</th>
                            <th className="w-3/10 py-3 px-4 uppercase font-semibold text-sm text-center">Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map((quote) => (
                            <QuoteRow key={quote.id} quote={quote} onSeen={handleSeen} />
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default QuoteTable;
