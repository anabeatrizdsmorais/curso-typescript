import React from 'react'

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    // 8- enum
    category: Category
}

export enum Category {
  JS = "javascript",
  TS = "typescript",
  P = "Python" 
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>Quantidade comentarios: {commentsQty}</p>
        <p>{tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </p>
        <p>Categoria {category}</p>
    </div>
  )
}

export default Destructuring