import React from 'react';

interface Quote {
    id: number;
    content: string;
    author: string;
    tags: string[];
}

interface Props {
    quote: Quote;
    onSeen: (quote: Quote) => void;
}

const QuoteRow: React.FC<Props> = ({ quote, onSeen }) => {
    const handleSeen = () => {
        onSeen(quote);
    };

    return (
        <tr className="bg-gray-100 border-b border-gray-200">
            <td className="w-3/10 py-3 px-4 text-center">{quote.author}</td>
            <td className="w-4/10 py-3 px-4 text-center">{quote.content}</td>
            <td className="w-3/10 py-3 px-4 text-center">{quote.tags.join(', ')}</td>
        </tr>
    );
};

export default QuoteRow;
