import React from 'react';
import { useParams } from 'react-router-dom';

function CoursePage() {
  const { slug } = useParams();
  console.log(slug);

  return (
    <div>
      Hello
    </div>
  );
}

export default CoursePage;
