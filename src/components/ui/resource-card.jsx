import React from 'react';
import { Button } from '@/components/ui/button';

const ResourceCard = ({
  title,
  description,
  image,
  author,
  date,
  readTime,
  category,
  tags = /** @type {string[]} */ ([]),
  type = 'blog', // 'blog' or 'ebook'
  downloadUrl = /** @type {string | undefined} */ (undefined),
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      {image && (
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {category && (
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
              {category}
            </span>
          )}
          {type === 'ebook' && (
            <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
              Ebook
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {author && (
              <>
                <span>{author}</span>
                <span className="text-gray-300">•</span>
              </>
            )}
            {date && <span>{date}</span>}
            {readTime && (
              <>
                <span className="text-gray-300">•</span>
                <span>{readTime} read</span>
              </>
            )}
          </div>
          {type === 'blog' ? (
            <Button variant="outline">Read More →</Button>
          ) : (
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => downloadUrl && window.open(downloadUrl, '_blank')}
            >
              Download PDF
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
