import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import productService from '../services/eventService'
import useAuth from '../hooks/useAuth'

export default function EventsDetail() {
  const { eventId } = useParams()
  const { user } = useAuth()
  const [detail , setDetail] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isDet, setIsDet] = useState(false)

  useEffect(() => {
    productService.getEventById(Number(eventId)).then(setDetail).finally(() => setLoading(false))
    if (user) {
      eventService.getAllFavorites().then((favs) => {
        setIsDet(favs.some((f) => (f.event_id || f.id) === Number(eventId)))
      }).catch(() => {})
    }
  }, [])

  const toggleFav = async () => {
    if (isDet) {
      await eventService.deleteFromFavorites(Number(eventId))
      setIsFav(false)
    } else {
      await eventService.addFavorites({ event_id: Number(eventId) })
      setIsDet(true)
    }
  }

  if (loading) return <p className="text-center p-8">Cargando...</p>
  if (!event) return <p className="text-center p-8">Event no encontrado</p>

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/products" className="text-blue-600 mb-4 block">&larr; Volver a lista de eventos</Link>
      <div className="border rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold mb-2">{event.evento_name}</h1>
        <p className="text-gray-500 mb-2">{event.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">${event.location}</p>
        <p className="text-sm text-gray-500 mb-4">Event category: {event.category} | Categoria: {event.category?.category_name}</p>
         <p className="text-sm text-gray-500 mb-4">Event organizrusername: {event.organizerUsername} </p>
    
        <button
          onClick={toggleFav}
          className={`p-3 rounded cursor-pointer ${isDet ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}
        >
          {isDet ? 'Eliminar evento' : 'Agregar a eventos'}
        </button>
      </div>
    </div>
  )
}