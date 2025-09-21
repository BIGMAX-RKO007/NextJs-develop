import {initialTickets} from '../../data'
import Link from 'next/link'

const TicketPage = () => {
    return(
    <div>
        {/* <h2 className="text-6xl">Ticket Page!!!</h2> */}
        {
            initialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2 className="test-lg">
                        {ticket.title}
                    </h2>
                    <Link href={`/tickets/${ticket.id}`}>View</Link>
                </div>
            )
        )
        }
    </div>
    )
  }
  
  export default TicketPage