
import ActionAreaCard from '../../components/cardmonitora'
import ResponsiveAppBarMonitora from '../../components/navbarmonitora'
import './monitora.css'

const Monitora = () => {
    return(
        <div className='monitora'>
            <ResponsiveAppBarMonitora/>
            <ActionAreaCard/>
        </div>
    )
}


export default Monitora