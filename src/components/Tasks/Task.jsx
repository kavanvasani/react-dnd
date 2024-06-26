import './Task.css'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Task = ({id, title}) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return (
    <div className='task' ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <input type='checkbox' className='checkbox'></input>
      {title}
    </div>
  )
}

export default Task