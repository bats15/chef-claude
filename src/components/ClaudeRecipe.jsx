import React from "react";
import ReactMarkdown from 'react-markdown';
import './claudeRecipe.css';

export default function SectionA({ recipe }) {
  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown>
        {recipe || "Loading recipe..."}
      </ReactMarkdown>
    </section>
  );
}