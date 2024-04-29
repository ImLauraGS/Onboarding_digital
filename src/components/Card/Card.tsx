import { CardProps } from "../../types"

export default function Card({ title, description, bgColor, image, onClick }: CardProps) {
  return (
   <>
      <div className="card" style={{ backgroundColor: bgColor }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={title} />
        <button onClick={onClick}>Next</button>
      </div>
   </>
  )
}
