import { OnClicked } from "../../../lib/dummy"

export default function Button({type , text , action = OnClicked }) {
  return (
    <button onClick={action} className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}>{text}</button>
  )
}
